const MAX_CARDS = 1e12;

function onFrame() {
    elms.currencies.$cards.$title.textContent = str.currencies.cards.left();
    elms.currencies.$cards.$amount.textContent = format(MAX_CARDS - game.stats.cardsDrawn, 0, 13);
    if (flags.unlocked.points) elms.currencies.$points.$amount.textContent = format(game.res.points, 0, 7);
    if (flags.unlocked.shreds) elms.currencies.$shreds.$amount.textContent = format(game.res.shreds, 0, 7);
    if (flags.unlocked.energy) {
        elms.currencies.$energy.$amount.textContent = format(game.res.energy, 0, 7) + " / " + format(effects.energyCap, 0, 7);
    }
    if (flags.unlocked.faction) {
        ["fire", "water", "leaf", "sun", "moon"].forEach((x) => {
            elms.currencies["$" + x].$amount.textContent = format(game.res[x], 1);
        })
    }
    if (flags.unlocked.skills) {
        for (let skill in game.time.skillCooldowns) {
            if (game.drawPref.skills[skill]) continue;
            game.time.skillCooldowns[skill] -= delta / 1000;
        }
        
        if (game.time.skillCooldowns.fire < 0 && (game.time.skillStacks.fire ?? 0) < effects.skillFireStack - 1) {
            game.time.skillStacks.fire ??= 0;
            game.time.skillStacks.fire++;
            game.time.skillCooldowns.fire += effects.skillFireCooldown;
        }
        if (game.time.skillCooldowns.fire < 0 && (game.time.skillStacks.fire ?? 0) >= effects.skillFireStack - 1) {
            game.time.skillCooldowns.fire = 0;
        }

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
    if (flags.unlocked.pickit) {
        if (tabs.collection.filters.pickit) {
            game.time.pickit -= delta / 1000;
            if (game.time.pickit <= 0) {
                game.time.pickit = 0;
                if (tabs.collection.elms.pickit) tabs.collection.elms.pickit.childNodes[0].click();
                else tabs.collection.filters.pickit = false;
            }
        } else {
            game.time.pickit = Math.min(effects.pickitMax, game.time.pickit + delta * effects.pickitRate / 60000);
        }
    }

    game.stats.timePlayed += delta / 1000;

    game.res.energy = addWithCap(game.res.energy, delta / 60000 * effects.bulkPower, effects.energyCap);
    game.time.drawCooldown -= delta / 1000 / effects.cooldownTime;
    let cooldown = getDrawCooldown();
    elms.draw.classList.toggle("anim-card-btn-draw", !!popups.draw.elms.list);
    if (popups.draw.elms.list) {
        elms.draw.$action.textContent = "";
        elms.draw.$amount.textContent = "";
    } else if (cooldown > 0) {
        elms.draw.$action.textContent = str.common.draw_inCooldown();
        elms.draw.$amount.textContent = cooldown < 60 ? format(cooldown, 2) + "s" : format.time(cooldown);
    } else {
        elms.draw.$action.textContent = verbify(str.common.draw());
        elms.draw.$amount.textContent = "×" + format(getDrawAmount(), 0, 9);
    }

    tabs[currentTab]?.onFrame?.();
    emit("frame");

    if (game.time.now - lastSaveTime >= 60000) saveGame();
    if (game.time.now - lastCloudSaveTime >= 300000) saveToCloud();
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


    flags.unlocked.faction = hasCard("standard", "ex", "faction");
    elms.currencies.$factions.style.display = 
        elms.draw.$factionPicker.style.display = flags.unlocked.faction ? "" : "none";

    flags.unlocked.skills = hasCard("standard", "ex", "skills");
    elms.draw.$skills.style.display = flags.unlocked.skills ? "" : "none";

    elms.sidebar.classList.toggle("option-unlocked", flags.unlocked.faction || flags.unlocked.skills);

    flags.unlocked.pickit = hasCard("standard", "ex", "pickit");
}

// ----- Effect logic

let effects = {...baseEffect};
let cardEffects = {};
let fx = (x) => x;

function updateEffects() {
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

    let sortedEffectorPriorities = Object.keys(effectors).sort((a, b) => a - b);
    for (let eId of sortedEffectorPriorities) {
        for (let eftr of effectors[eId]) {
            if (eftr[0] == "card") fx = getCardEffectFx(...eftr[3]);
            effects[eftr[1]] = eftr[2](effects[eftr[1]]);
        }
    }

    // Skill effects
    if (game.drawPref.skills.water) {
        effects.energyCap *= effects.skillWaterGain;
        effects.bulkMult *= effects.skillWaterCard;
        effects.bulkPower *= effects.skillWaterSpeed;
        effects.skillFireSkip /= effects.skillWaterSpeed;
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


    emit("effect-update");
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
    let rawLoot = makeLootTable().loot(count);
    let lootList = {
        res: [],
        cards: [],
    };

    let resLoot = {
        shreds: 0,
    }
    for (let loot of rawLoot) {
        let [type, target] = loot.item.split(":");
        if (type == "res") {
            if (loot.count > 0) lootList.res.push([target, loot.count]);
        } else if (type == "card") {
            let [pack, rarity, id] = target.split("/");
            let data = cards[pack][rarity][id];
            if (data.faction && game.drawPref.skills.sun && effects.skillSunDup > 0) {
                loot.count += new lootalot.LootTable([{ item: "", p: effects.skillSunDup }]).loot(loot.count)[0]?.count ?? 0;
            }
            let count = hasCard("standard", "ex", "zip") ? loot.count : 1;
            let isNew = !hasCard(pack, rarity, id);
            let isShredded = false;
            
            if (flags.unlocked.shreds) {
                let data = cards[pack][rarity][id];
                let state = game.cards[pack]?.[rarity]?.[id] ?? { stars: 0 };

                if (data.crown || state.stars >= 5) {
                    if (state.stars == 0) loot.count -= 1;
                    let cardShreds = loot.count * effects.shredMult;
                    if (data.crown) cardShreds *= effects.shredCrownMult;
                    let rIndex = ["r", "sr", "ssr", "ur"].indexOf(rarity);
                    let rMult = [effects.shredRMult, effects.shredSRMult, effects.shredSSRMult, effects.shredURMult];
                    for (let i = 0; i <= rIndex; i++) cardShreds *= rMult[i];
                    resLoot.shreds += cardShreds;
                    if (!isNew) isShredded = true;
                }
            }
            let lootItem = [pack, rarity, id, count, isNew, isShredded];
            lootList.cards.push(lootItem);
        }
    }

    lootList.cards.shuffle();
    for (let r in resLoot) if (resLoot[r]) lootList.res.push([r, resLoot[r]]);
    callPopup("draw", lootList);
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
    count = Math.floor(count * effects.bulkMult);
    if (game.drawPref.skills.water && game.res.energy >= effects.energyCap) count = Math.floor(count * effects.skillWaterCard2);
    count = Math.min(count, MAX_CARDS - game.stats.cardsDrawn);
    if (!hasCard("standard", "ex", "zip")) count = Math.min(count, 100);
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
    let [base, rate, res] = data.levelCost;
    return maxGeometricSeries(base, rate, game.res[res], state.level - 1);
}
function levelUpCard(pack, rarity, id, amount = 1, shouldEmit = true) {
    let cost = getCardLevelCost(pack, rarity, id, amount);
    if (game.res[cost[1]] < cost[0]) return;
    game.res[cost[1]] -= cost[0];
    let state = game.cards[pack]?.[rarity]?.[id];
    state.level += amount;
    if (shouldEmit) {
        updateEffects();
        updateUnlocks();
        emit("card-upgrade");
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

    let cost = cards[pack][rarity][id].buyCost;
    if (game.res[cost[1]] < cost[0]) return;
    game.res[cost[1]] -= cost[0];

    console.log(tabs.marketplace.cards[pack + " " + rarity + " " + id]);
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.dispatchEvent(new PointerEvent("pointerleave"));
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.$levelBtn.dispatchEvent(new PointerEvent("pointerleave"));
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.remove();
    callPopup("draw", { res: [], cards: [[pack, rarity, id, 1]] });
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
    updateEffects();
}

function awardShow(show) {
    if (game.flags.showSeen[show]) return;
    game.flags.showSeen[show] = 1;
    callPopup("slideshow", show);
}
