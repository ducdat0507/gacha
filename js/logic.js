const MAX_CARDS = 1e12;

let autobuyTime = 0;

function onFrame() {
    game.stats.timePlayed += delta / 1000;

    if (delta > 5000) {
        if (effects.offlineLimit > 0) {
            doOfflineGain(delta / 1000);
        } else {
            doGain(5);
            spendBuffs("time", 5);
        }
    } else {
        doGain(delta / 1000);
        spendBuffs("time", delta / 1000);
    }

    elms.currencies.$cards.$title.textContent = str.currencies.cards.left();
    elms.currencies.$cards.$amount.textContent = format(MAX_CARDS - game.stats.cardsDrawn, 0, 13);
    if (flags.unlocked.points) elms.currencies.$points.$amount.textContent = format(game.res.points, 0, 7);
    if (flags.unlocked.shreds) elms.currencies.$shreds.$amount.textContent = format(game.res.shreds, 0, 7);
    if (flags.unlocked.energy) {
        elms.currencies.$energy.$amount.textContent = format(game.res.energy, 0, 7) + " / " + format(effects.energyCap, 0, 7);
        elms.currencies.$energy.classList.toggle("f-fire", game.res.energy >= effects.energyCap);
    }
    if (flags.unlocked.faction) {
        ["fire", "water", "leaf", "sun", "moon"].forEach((x) => {
            elms.currencies["$" + x].$amount.textContent = format(game.res[x], 1);
        })
    }
    if (flags.unlocked.skills) {
        ["fire", "water", "leaf", "sun", "moon"].forEach((x) => {
            let btn = elms.draw.$skills["$" + x];
            let data = skills[x];
            let icon;
            if (hasCard("standard", "ssr", "s_" + x)) {
                btn.disabled = false;
                icon = data.icon;
                btn.classList.add("f-" + x);
                btn.classList.toggle("disabled", game.time.skillCooldowns[x] > 0 && (game.time.skillStacks[x] ?? 0) <= 0);
                btn.classList.toggle("active", !!game.drawPref.skills[x]);
                btn.style.setProperty("--cooldown", 
                    game.drawPref.skills[x] ? '"' + str.common.skills.active() + '"' : 
                    game.time.skillCooldowns[x] > 0 ? `"${format.time(game.time.skillCooldowns[x])}"` : "");
                btn.style.setProperty("--stack", 
                    game.time.skillStacks[x] > 0 ? `"${format(game.time.skillStacks[x] + (game.time.skillCooldowns[x] <= 0))}×"` : 
                    "");
            } else {
                btn.disabled = true;
                icon = "tabler:lock";
            }
            if (btn.$icon.getAttribute("icon") != icon)
                btn.$icon.setAttribute("icon", icon);
        })
    }
    if (flags.unlocked.pickit && tabs.collection.filters.pickit) {
        game.time.pickit -= delta / 1000;
        if (game.time.pickit <= 0) {
            game.time.pickit = 0;
            if (tabs.collection.elms.pickit) tabs.collection.elms.pickit.childNodes[0].click();
            else tabs.collection.filters.pickit = false;
        }
        if (effects.autobuySpeed) {
            autobuyTime += delta / 1000 * effects.autobuySpeed;
            while (autobuyTime >= 1) {
                autobuyTime -= 1;
                const boughtCard = tabs.collection.cardList.find(x => getCardLevelMax(x[0], x[1], x[2]) > 0);
                if (boughtCard) {
                    const [pack, rarity, id] = boughtCard;
                    levelUpCard(pack, rarity, id, 1, true, false);
                    // re-sort cards
                    tabs.collection.updateCards();
                }
                else {
                    autobuyTime = 0;
                }
            }
        }
    }
    if (flags.unlocked.money) {
        elms.currencies.$money.$amount.textContent = format.currency("money", game.res.money, 7);
        elms.currencies.$exp.$amount.textContent = format.currency("exp", game.res.exp, 7);
    }

    let cooldown = getDrawCooldown();
    elms.draw.classList.toggle("anim-card-btn-draw", !!popups.draw.elms.list);
    if (popups.draw.elms.list) {
        elms.draw.$action.textContent = "";
        elms.draw.$amount.textContent = "";
    } else if (game.stats.cardsDrawn >= MAX_CARDS) {
        elms.draw.$action.textContent = verbify(str.common.draw_outOfDraws());
        elms.draw.$amount.textContent = "×-";
    } else if (cooldown > 0) {
        elms.draw.$action.textContent = str.common.draw_inCooldown();
        elms.draw.$amount.textContent = format.time(cooldown, 2, 2);
    } else {
        elms.draw.$action.textContent = verbify(str.common.draw());
        elms.draw.$amount.textContent = "×" + format(getDrawAmount(), 0, 9);
    }

    tabs[currentTab]?.onFrame?.();
    emit("frame");

    if (!game.badges[25] && game.stats.timePlayed >= 24 * 60 * 24) {
        awardBadge(25);
    }

    if (game.time.now - lastSaveTime >= 60000) saveGame();
    if (game.time.now - lastCloudSaveTime >= 300000) saveToCloud();
}

let uiFrameTimeout = 0;
function doUIFrame() {
    if (game.option.updateRate > 0 && game.option.updateRate < 30 && !uiFrameTimeout) {
        uiFrameTimeout = setTimeout(() => {
            uiFrameTimeout = 0;
            delta = performance.now() - time;
            time += delta;
            game.time.now = Date.now();

            onFrame();
            updateNotifs();
        }, 0)
    }
}

function handleOfflineProgress() {
    if (effects.offlineLimit <= 0) return;
    doOfflineGain((Date.now() - game.time.now) / 1000);
}

function doOfflineGain(realSec) {
    let progressSec = cap(realSec, effects.offlineLimit, 1 / effects.offlineLimitStrength);
    let getCurrentStat = () => ({
        energy: format(game.res.energy, 0, 7),
        cooldown: format.time(Math.max(0, game.time.drawCooldown * effects.cooldownTime), 2, 2),
        skillCooldown: Object.fromEntries(Object.entries(game.time.skillCooldowns).map(
            ([i, x]) => [i, format.time(Math.max(x, 0))])
        ),
        skillStack: {...game.time.skillStacks},
        pickitTime: format.time(game.time.pickit, 2, 2),
        adCooldown: format.time(Math.max(0, game.time.adCooldown) * effects.adCooldown, 2, 2),
    });

    let stops = [[Infinity, () => {}]]
    for (let buff in game.buffs.active.time ?? {}) {
        let state = game.buffs.active.time[buff]
        stops.push([state.duration, () => {
            delete game.buffs.active.time[buff];
            updateEffects(true);
        }])
    }
    stops.sort((x, y) => x[0] - y[0])
    let elapsed = 0;

    let oldStats = getCurrentStat();
    while (stops.length > 0) {
        let currentSec = Math.min(progressSec, stops[0][0])
        if (currentSec > 0) {
            doGain(currentSec - elapsed);
        }
        elapsed = currentSec;
        if (elapsed >= progressSec) break;
        stops[0][1]();
        stops.shift();
    }
    spendBuffs("time", progressSec);

    let newStats = getCurrentStat();

    if (realSec >= 60) callPopup("offline", realSec, progressSec, oldStats, newStats);
}

function doGain(secDelta) {
    game.stats.timeProgress += secDelta;

    game.res.energy = addWithCap(game.res.energy, secDelta / 60 * effects.bulkPower * effects.energySpeed, effects.energyCap);
    game.time.drawCooldown -= secDelta / effects.cooldownTime;

    if (flags.unlocked.skills) {
        for (let skill in game.time.skillCooldowns) {
            if (game.drawPref.skills[skill]) continue;
            game.time.skillCooldowns[skill] -= secDelta;
        }
        
        doSkillBulk("fire", effects.skillFireCooldown, effects.skillFireStack);
    }
    
    if (flags.unlocked.pickit && !tabs.collection.filters.pickit) {
        game.time.pickit = Math.min(effects.pickitMax, game.time.pickit + secDelta * effects.pickitRate / 60);
    }

    if (flags.unlocked.ad) {
        game.time.adCooldown -= secDelta / effects.adCooldown;
    }
}

function doSkillBulk(skill, cooldown, maxStack) {
    while (game.time.skillCooldowns[skill] < 0 && (game.time.skillStacks[skill] ?? 0) < maxStack - 1) {
        game.time.skillStacks[skill] ??= 0;
        game.time.skillStacks[skill]++;
        game.time.skillCooldowns[skill] += cooldown;
    }
    if (game.time.skillCooldowns[skill] < 0 && (game.time.skillStacks[skill] ?? 0) >= maxStack - 1) {
        game.time.skillCooldowns[skill] = 0;
    }
}

function updateUnlocks() {
    flags.unlocked.points = hasCard("standard", "n", "n1");
    elms.currencies.$points.style.display = flags.unlocked.points ? "" : "none";
    flags.unlocked.shreds = hasCard("standard", "ex", "shred");
    elms.currencies.$shreds.style.display = flags.unlocked.shreds ? "" : "none";
    flags.unlocked.energy = hasCard("standard", "n", "n4");
    elms.currencies.$energy.style.display = flags.unlocked.energy ? "" : "none";

    flags.unlocked.market = hasCard("standard", "n", "c1");
    tabButtons.marketplace.style.display = flags.unlocked.market ? "" : "none";
    flags.unlocked.infobook = hasCard("standard", "r", "c1");
    tabButtons.infobook.style.display = flags.unlocked.infobook ? "" : "none";

    flags.unlocked.zip = hasCard("standard", "ex", "zip") || hasCard("standard_legacy", "ex", "zip");
    flags.unlocked.faction = hasCard("standard", "ex", "faction");
    elms.currencies.$factions.style.display = flags.unlocked.faction ? "" : "none";
        elms.draw.$factionPicker.classList.toggle("locked", !flags.unlocked.faction);

    flags.unlocked.skills = hasCard("standard", "ex", "skills");
    elms.draw.$skills.style.display = flags.unlocked.skills ? "" : "none";

    elms.sidebar.classList.toggle("option-unlocked", flags.unlocked.faction || flags.unlocked.skills || elms.draw.$buffs.childNodes.length > 0);

    flags.unlocked.pickit = hasCard("standard", "ex", "pickit");
    flags.unlocked.iris = hasCard("standard", "ex", "iris") || hasCard("standard_legacy", "ex", "pickit");

    flags.unlocked.money = game.stats.accountsSold > 0;
    elms.currencies.$moneyExp.style.display = flags.unlocked.money ? "" : "none";
    
    flags.unlocked.legacy = hasCard("standard_legacy", "ex", "legacy");
    flags.unlocked.ad = hasCard("standard_legacy", "ex", "ads");
    flags.unlocked.adReroll = hasCard("standard", "ssr", "n2");
}

function updatePrefs() {
    document.body.style.setProperty("--card-size", game.option.cardSize / 100);
}

// ----- Effect logic

let effects = {...baseEffect};
let cardEffects = {};
let fx = (x) => x;

function updateEffects(silent = false) {
    for (let eff in baseEffect) effects[eff] = baseEffect[eff];

    let effectors = {};
    function addEffector(type, priority, target, effector, data) {
        if (!effectors[priority]) effectors[priority] = [];
        effectors[priority].push([type, target, effector, data]);
    }
    cardEffects = {};
    let getCardEffectFx = (pack, rarity, id) => {
        return (x) => cardEffects[pack]?.[rarity]?.[id]?.[x] ?? 0;
    }

    for (let pack in game.cards) {
        cardEffects[pack] = {};
        for (let rarity in game.cards[pack]) {
            cardEffects[pack][rarity] = {};
            for (let id in game.cards[pack][rarity]) {
                let data = cards[pack][rarity][id];
                let state = game.cards[pack][rarity][id];
                let list = cardEffects[pack][rarity][id] = [];
                fx = getCardEffectFx(pack, rarity, id);

                for (let effect of data.effects) list.push(effect(state.level, state.stars));
                for (let eftr in data.effectors) addEffector("card", 
                    data.effectors[eftr][0], eftr, data.effectors[eftr][1], [pack, rarity, id]
                );
            }
        }
    }

    buffEffects = {};
    let getBuffEffectFx = (type, buff) => {
        return (x) => buffEffects[type]?.[buff]?.[x] ?? 0;
    }
    for (let type in game.buffs.active) {
        buffEffects[type] = {};
        for (let buff in game.buffs.active[type]) {
            let data = buffs[type][buff];
            let state = game.buffs.active[type][buff];
            let list = buffEffects[type][buff] = [];
            fx = getCardEffectFx(type, buff);

            for (let effect of data.effects) list.push(effect(state));
            for (let eftr in data.effectors) addEffector("buff", 
                data.effectors[eftr][0], eftr, data.effectors[eftr][1], [type, buff]
            );
        }
    }

    let sortedEffectorPriorities = Object.keys(effectors).sort((a, b) => a - b);
    for (let eId of sortedEffectorPriorities) {
        for (let eftr of effectors[eId]) {
            if (eftr[0] == "card") fx = getCardEffectFx(...eftr[3]);
            if (eftr[0] == "buff") fx = getBuffEffectFx(...eftr[3]);
            effects[eftr[1]] = eftr[2](effects[eftr[1]]);
        }
    }

    // Skill effects
    if (game.drawPref.skills.water) {
        effects.energyCap *= effects.skillWaterGain;
        effects.bulkMultBonus *= effects.skillWaterCard;
        effects.energySpeed *= effects.skillWaterSpeed;
    }
    if (game.drawPref.skills.leaf) {
        effects.shredRMult *= effects.skillLeafMult;
        effects.shredSRMult *= effects.skillLeafMult;
        effects.shredSSRMult *= effects.skillLeafMult;
        effects.shredURMult *= effects.skillLeafMult;
        effects.shredCrownMult *= effects.skillLeafMultCrown;
        effects.shredMult *= effects.skillLeafMultBase;
    }
    if (game.drawPref.skills.sun) {
        effects.factionMult *= effects.skillSunBuff;
        effects.pointsMult /= effects.skillSunDebuff;
        effects.shredMult /= effects.skillSunDebuff;
    }
    if (game.drawPref.skills.moon) {
        effects.pointsMult *= effects.skillMoonBuff;
        effects.factionMult /= effects.skillMoonDebuff;
    }


    if (!silent) emit("effect-update");
    doUIFrame();
}

// ----- Card logic

function addCard(pack, rarity, id, amount) {
    if (!game.cards[pack]) game.cards[pack] = {};
    if (!game.cards[pack][rarity]) game.cards[pack][rarity] = {};
    if (!game.cards[pack][rarity][id]) game.cards[pack][rarity][id] = {
        amount: -1,
        stars: 1,
        level: 1,
    };

    let data = cards[pack][rarity][id];
    let state = game.cards[pack][rarity][id];
    if (data.crown || state.stars >= 5) state.amount = 0;
    else state.amount += amount;
}

function hasCard(pack, rarity, id) {
    return !!game.cards[pack]?.[rarity]?.[id];
}

function makeLootTable() {
    let lootDef = [];
    lootDef.push([
        { item: "res:points", count: [
            Math.floor(effects.points * effects.pointsMult), 
            Math.floor((effects.points + effects.pointsExtra) * effects.pointsMult)
        ] }
    ]);

    let faction = game.drawPref.faction;
    if (faction) {
        lootDef.push([
            { item: "res:" + faction, 
                count: Math.floor(effects[faction + "Gain"] * effects.factionMult), 
                p: effects.factionChance
            }
        ]);
    }

    let pack = "standard";
    let cardDef = [];
    lootDef.push(cardDef);
    let rarityList = ["ur", "ssr", "sr", "r", "n"];
    let rarityChance = { n: 1, r: effects.cardRChance, sr: effects.cardSRChance, ssr: effects.cardSSRChance, ur: effects.cardURChance }
    let chanceSum = 0;
    for (let rarity of rarityList) {
        let cardRarityDef = [];
        for (let id in cards[pack][rarity]) {
            let card = cards[pack][rarity][id];
            if (card.available && !card.available()) continue;
            if (card.condition && !card.condition()) continue;
            if (card.faction && card.faction != faction) continue;

            let cardDef = { item: `card:${pack}/${rarity}/${id}`, w: 1 };
            if (card.pMult) cardDef.w *= card.pMult;
            if (card.crown) cardDef.w /= 10;

            cardRarityDef.push(cardDef);
        }
        if (cardRarityDef.length) {
            let rlt = new lootalot.LootTable(cardRarityDef);
            cardDef.push({ table: rlt, p: rarityChance[rarity] - chanceSum })
            chanceSum = rarityChance[rarity];
        }
    }

    let lt = new lootalot.LootTable(...lootDef);
    return lt;
}

function makeLegacyLootTable() {
    let pack = "standard_legacy";
    let lootDef = [];
    let cardDef = [];
    lootDef.push(cardDef);
    let rarityList = ["n"];
    let rarityChance = { n: 1 }
    let chanceSum = 0;
    for (let rarity of rarityList) {
        let cardRarityDef = [];
        for (let id in cards[pack][rarity]) {
            let card = cards[pack][rarity][id];
            if (card.available && !card.available()) continue;
            if (card.condition && !card.condition()) continue;
            if (card.faction && card.faction != faction) continue;

            let cardDef = { item: `card:${pack}/${rarity}/${id}`, w: 1 };
            if (card.pMult) cardDef.w *= card.pMult;
            if (card.crown) cardDef.w /= 10;

            cardRarityDef.push(cardDef);
        }
        if (cardRarityDef.length) {
            let rlt = new lootalot.LootTable(cardRarityDef);
            cardDef.push({ table: rlt, p: rarityChance[rarity] - chanceSum })
            chanceSum = rarityChance[rarity];
        }
    }

    let lt = new lootalot.LootTable(...lootDef);
    return lt;
}

function doDraw(count) {
    let rawLoot = {}
    let counted = 0;
    // Guarantee In-Game Shop when draw for the first time after the first playthrough
    if (game.stats.cardsDrawn == 0 && game.stats.accountsSold >= 1) {
        rawLoot["card:standard/n/c1"] = { count: 1 };
        counted++;
    }
    if (counted < count) {
        let stops = [[Infinity, () => {}]];
        for (let buff in game.buffs.active.draw ?? {}) {
            let state = game.buffs.active.draw[buff]
            stops.push([state.duration, () => {
                delete game.buffs.active.draw[buff];
                updateEffects(true);
            }])
        }
        stops.sort((x, y) => x[0] - y[0])
        while (stops.length > 0) {
            let realCount = Math.min(count, stops[0][0])
            if (realCount > 0) {
                let tickLoot = doDrawTick(realCount - counted);
                for (let loot in tickLoot) {
                    if (rawLoot[loot]) for (let c in tickLoot[loot]) rawLoot[loot][c] = (rawLoot[loot][c] || 0) + tickLoot[loot][c];
                    else rawLoot[loot] = tickLoot[loot]
                }
            }
            counted = realCount;
            if (counted >= count) break;
            stops[0][1]();
            stops.shift();
        }
    }

        console.log(rawLoot)

    let lootList = {
        res: [],
        cards: [],
    };

    for (let loot in rawLoot) {
        let [type, target] = loot.split(":");
        let state = rawLoot[loot]
        if (type == "res") {
            if (state.count) lootList.res.push([target, state.count]);
        } else if (type == "card") {
            let [pack, rarity, id] = target.split("/");
            let data = cards[pack][rarity][id];
            if (data.faction && game.drawPref.skills.sun && effects.skillSunDup > 0) {
                state.count += new lootalot.LootTable([{ item: "", p: effects.skillSunDup }]).loot(state.count)[0]?.count ?? 0;
            }

            let info = {};

            if (!game.cards[pack]?.[rarity]?.[id]) {
                info.isNew = true;
            }

            if (flags.unlocked.zip) {
                lootList.cards.push([pack, rarity, id, state.count, info]);
            } else for (let i = 0; i < state.count; i++) {
                lootList.cards.push([pack, rarity, id, 1, info]);
            }

            if (state.shreds) info.shreds = state.shreds;
        }
    }

    game.stats.cardsDrawn += count;
    spendBuffs("draw", count);

    lootList.cards.shuffle();
    if (game.drawPref.faction && !lootList.res.find(x => x[0] == game.drawPref.faction)) lootList.res.push([game.drawPref.faction, 0]);
    console.log(rawLoot, lootList);
    callPopup("draw", lootList);
}
function doDrawTick(count) {
    let rawLoot = Object.fromEntries(makeLootTable().loot(count).map(x => [x.item, {count: x.count}]))

    for (let loot in rawLoot) {
        let [type, target] = loot.split(":");
        if (type == "card") {
            let [pack, rarity, id] = target.split("/");
            let data = cards[pack][rarity][id];
            if (data.faction && game.drawPref.skills.sun && effects.skillSunDup > 0) {
                rawLoot[loot].count += new lootalot.LootTable([{ item: "", p: effects.skillSunDup }]).loot(rawLoot[loot].count)[0]?.count ?? 0;
            }

            let info = {};

            if (flags.unlocked.shreds) {
                let data = cards[pack][rarity][id];
                let state = game.cards[pack]?.[rarity]?.[id] ?? { stars: 0 };

                if (data.crown || state.stars >= 5) {
                    if (state.stars == 0) rawLoot[loot].count -= 1;
                    let cardShreds = rawLoot[loot].count * effects.shredMult;
                    if (data.crown) cardShreds *= effects.shredCrownMult;
                    let rIndex = ["r", "sr", "ssr", "ur"].indexOf(rarity);
                    let rMult = [effects.shredRMult, effects.shredSRMult, effects.shredSSRMult, effects.shredURMult];
                    for (let i = 0; i <= rIndex; i++) cardShreds *= rMult[i];
                    rawLoot["res:shreds"] ??= { count: 0 }
                    rawLoot["res:shreds"].count += cardShreds;
                    rawLoot[loot].shreds = cardShreds;
                }
            }
        }
    }

    return rawLoot;
}

function doDrawLegacy() {
    let rawLoot;
    let lt = makeLegacyLootTable();
    rawLoot = lt.loot(effects.legacyDrawCount);

    let options = []

    for (let loot of rawLoot) {
        let [type, target] = loot.item.split(":");
        if (type == "card") {
            let [pack, rarity, id] = target.split("/");

            let info = {};
            if (!game.cards[pack]?.[rarity]?.[id]) {
                info.isNew = true;
            }
            
            for (let i = 0; i < loot.count; i++) {
                options.push([pack, rarity, id, 1, info]);
            }
        }
    }

    options.shuffle();
    callPopup("drawLegacy", options);
}

function onDrawButtonClick() {
    if (popups.draw.elms?.list) return;
    if (getDrawCooldown() > 0) return;
    let amount = getDrawAmount();
    if (amount < 1) return;
    game.res.energy -= getUsedEnergy();

    doDraw(amount);

    awardBadge(11);
    if (!game.drawPref.faction && game.drawPref.skills.sun) awardBadge(23);
    elms.draw.$hint.style.display = "none";

    if (game.drawPref.skills.water) {
        effects.bulkPower /= effects.skillWaterSpeed;
        effects.skillFireSkip *= effects.skillWaterSpeed;
    }
}

function getDrawCooldown() {
    return game.time.drawCooldown * effects.cooldownTime;
}

function getDrawAmount() {
    let count = Math.floor(effects.bulk) + getUsedEnergy();
    count = Math.floor(count * effects.bulkMult * effects.bulkMultBonus);
    if (game.drawPref.skills.water && game.res.energy >= effects.energyCap) count = Math.floor(count * effects.skillWaterCard2);
    if (game.drawPref.faction) count = Math.floor(count * effects[game.drawPref.faction + "DrawMult"]);
    count = Math.min(count, MAX_CARDS - game.stats.cardsDrawn);
    if (!flags.unlocked.zip) count = Math.min(count, 100);
    return count;
}

function getUsedEnergy() {
    return Math.floor(game.res.energy);
}

function getCardLevelCost(pack, rarity, id, amount = 1) {
    let data = cards[pack][rarity][id];
    if (!data.levelCost) return [Infinity, "points"];
    let state = game.cards[pack]?.[rarity]?.[id];
    if (!state) return [Infinity, "points"]; 

    let [base, rate, res] = data.levelCost;
    res ??= "points";
    if (data.maxLevel) {
        amount = Math.min(amount, data.maxLevel - state.level);
        if (amount <= 0) return [Infinity, res];
    }

    return [sumGeometricSeries(base, rate, amount, state.level - 1), res]
}
function getCardLevelMax(pack, rarity, id) {
    let data = cards[pack][rarity][id];
    let state = game.cards[pack]?.[rarity]?.[id];
    if (!state || !data.levelCost) return 0;
    let [base, rate, res = "points"] = data.levelCost;
    return maxGeometricSeries(base, rate, game.res[res], state.level - 1);
}
function levelUpCard(pack, rarity, id, amount = 1, shouldEmit = true, shouldSave = true) {
    let cost = getCardLevelCost(pack, rarity, id, amount);
    if (game.res[cost[1]] < cost[0]) return;
    game.res[cost[1]] -= cost[0];
    let state = game.cards[pack]?.[rarity]?.[id];
    state.level += amount;
    if (shouldEmit) {
        updateEffects();
        updateUnlocks();
        emit("card-upgrade");
    }
    if (shouldSave) {
        saveGame();
    }
}
function getCardStarCost(pack, rarity, id) {
    let data = cards[pack][rarity][id];
    let state = game.cards[pack]?.[rarity]?.[id];
    if (!state || data.crown || state.stars >= 5) return Infinity;
    return (data.starCost ?? cardStarCost[pack][rarity])(state.stars, data.starDiff ?? 0);
}
function starUpCard(pack, rarity, id, shouldEmit = true) {
    let cost = getCardStarCost(pack, rarity, id);
    let state = game.cards[pack]?.[rarity]?.[id] ?? {amount: 0};
    if (state.amount < cost) return;
    state.amount -= cost;
    state.stars++;
    if (shouldEmit) {
        updateEffects();
        updateUnlocks();
        emit("card-upgrade");
        saveGame();
    }
}
function buyCard(pack, rarity, id) {
    if (hasCard(pack, rarity, id) || popups.draw.elms.list) return;

    let cost = unwrapFn(cards[pack][rarity][id].buyCost);
    if (game.res[cost[1]] < cost[0]) return;
    game.res[cost[1]] -= cost[0];

    console.log(tabs.marketplace.cards[pack + " " + rarity + " " + id]);
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.dispatchEvent(new PointerEvent("pointerleave"));
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.$levelBtn.dispatchEvent(new PointerEvent("pointerleave"));
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.remove();
    callPopup("draw", { res: [], cards: [[pack, rarity, id, 1, {
        isNew: !game.cards[pack]?.[rarity]?.[id],
    }]] });
}

function getTotalStars(pack) {
    let count = { stars: 0, crowns: 0 };
    for (let rarity in game.cards[pack]) {
        for (let id in game.cards[pack][rarity]) {
            let data = cards[pack][rarity][id];
            if (data.crown) count.crowns++;
            else count.stars += game.cards[pack][rarity][id].stars;
        }
    }
    
    return count;
}

// ----- Skill logic 

function activateSkill(skill) {
    let data = skills[skill];
    if (game.time.skillCooldowns[skill] > 0 && (game.time.skillStacks[skill] ?? 0) <= 0) return;

    data.trigger();
    game.stats.skillsUsed[skill] ??= 0;
    game.stats.skillsUsed[skill]++;

    if (game.drawPref.skills.sun && (game.drawPref.skills.moon || game.drawPref.skills.leaf)) {
        delete game.drawPref.skills.sun;
        delete game.drawPref.skills.moon;
        delete game.drawPref.skills.leaf;
        doSkillReaction();
    }

    updateEffects();
    saveGame();
}

function doSkillReaction() {
    game.stats.reactionCount++;
    elms.draw.$skills.classList.add("reaction");
    setTimeout(() => elms.draw.$skills.classList.remove("reaction"), 500);
    awardBadge(22);
}

// ----- Account sell logic

function getSellValue() 
{
    if (game.stats.cardsDrawn < MAX_CARDS) return null;
    if (game.stats.accountsSold == 0) return { money: 10.00, exp: 300 }
    let totalStars =  getTotalStars("standard");
    return { 
        money: game.stats.cardsDrawn / 1e11,
        exp: totalStars.stars + totalStars.crowns * 10
    }
}

function sellAccount(forced = false) {
    console.log(forced);
    if (!forced && game.option.confirm.sellAccount) {
        callPopup(popups.confirm.sellAccount);
    } else {
        let sellValue = getSellValue();
        if (!sellValue) return;
        game.res.money += sellValue.money;
        game.res.exp += sellValue.exp;
        game.stats.accountsSold++;

        delete game.cards.standard;
        for (let i of ["points", "shreds", "energy", "fire", "water", "leaf", "sun", "moon"]) game.res[i] = 0;
        game.stats.cardsDrawn = 0;
        game.drawPref.faction = "";
        game.stats.reactionCount = 0;
        game.stats.skillsUsed = {};
        game.drawPref.skills = {};
        game.time.skillCooldowns = {};
        game.time.skillStacks = {};
        game.buffs.active = {};
        game.buffs.adOffer = "";


        updateEffects();
        callPopup("sell", sellValue);
    }
}

// ----- Booster pack logic

function buyPack(pack, id) {
    let data = packs[pack][id];
    if (game.res[data.cost[1]] < data.cost[0]) return;

    game.res[data.cost[1]] -= data.cost[0];
    if (!game.flags.boughtPacks[pack]) game.flags.boughtPacks[pack] = {};
    game.flags.boughtPacks[pack][id] = true;
    data.onBuy();
}

// ----- Buff logic

function spendBuffs(type, amount) {
    let buffExpired = false;
    for (let buff in game.buffs.active[type] ?? {}) {
        game.buffs.active[type][buff].duration -= amount;
        if (game.buffs.active[type][buff].duration <= 0) {
            delete game.buffs.active[type][buff];
            buffExpired = true;
        }
    }
    if (buffExpired) updateEffects();
}

// ----- Infobook logic

function buyStatEntry(group, id) {
    if (game.flags.statUnlocks[group]?.[id]) return;

    let data = statEntries[group].items[id];
    if (game.res[data.cost[1]] < data.cost[0]) return;

    game.res[data.cost[1]] -= data.cost[0];
    if (!game.flags.statUnlocks[group]) game.flags.statUnlocks[group] = {};
    game.flags.statUnlocks[group][id] = true;
    saveGame();
    updateEffects();
}

function awardBadge(badge) {
    if (game.badges[badge]) return;
    game.badges[badge] = Date.now();
    spawnBadgeNotif(badge);
    if (Object.keys(game.badges).length == Object.keys(badges).length) {
        callPopup("endgame");
    }
    updateEffects();
}

function awardShow(show) {
    if (game.flags.showSeen[show]) return;
    game.flags.showSeen[show] = 1;
    callPopup("slideshow", show);
}
