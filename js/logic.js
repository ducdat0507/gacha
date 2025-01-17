const MAX_CARDS = 1e12;

function onFrame() {
    elms.currencies.$cards.$title.textContent = "Cards left";
    elms.currencies.$cards.$amount.textContent = format(MAX_CARDS - game.stats.cardsDrawn, 0, 13);
    if (flags.unlocked.points) elms.currencies.$points.$amount.textContent = format(game.res.points, 0, 7);
    if (flags.unlocked.shreds) elms.currencies.$shreds.$amount.textContent = format(game.res.shreds, 0, 7);
    if (flags.unlocked.energy) {
        elms.currencies.$energy.$amount.textContent = format(game.res.energy, 0, 7) + " / " + format(effects.energyCap, 0, 7);
    }
    if (flags.unlocked.faction) {
        ["fire", "water", "leaf", "sun", "moon"].forEach((x) => {
            elms.currencies["$" + x].$amount.textContent = format(game.res[x]);
        })
    }

    game.res.energy = addWithCap(game.res.energy, delta / 60000 * effects.bulkPower, effects.energyCap);
    game.time.drawCooldown -= delta / 1000 / effects.cooldownTime;
    let cooldown = getDrawCooldown();
    elms.draw.classList.toggle("anim-card-btn-draw", !!popups.draw.elms.list);
    if (popups.draw.elms.list) {
        elms.draw.$action.textContent = "";
        elms.draw.$amount.textContent = "";
    } else if (cooldown > 0) {
        elms.draw.$action.textContent = "In cooldown";
        elms.draw.$amount.textContent = format(cooldown, 2) + "s";
    } else {
        elms.draw.$action.textContent = "Draw";
        elms.draw.$amount.textContent = "×" + format(getDrawAmount(), 0, 9);
    }

    tabs[currentTab]?.onFrame?.();
    emit("frame");
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

    flags.unlocked.faction = hasCard("standard", "ex", "faction");
    elms.currencies.$factions.style.display = 
        elms.draw.$factionPicker.style.display = flags.unlocked.faction ? "" : "none";
    elms.sidebar.classList.toggle("option-unlocked", flags.unlocked.faction);
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
    let rarityChance = { n: 1, r: 1e-3, sr: 1e-5, ssr: 1e-7, ur: 1e-9 }
    let chanceSum = 0;
    for (let rarity of rarityList) {
        let cardRarityDef = [];
        for (let id in cards[pack][rarity]) {
            let card = cards[pack][rarity][id];
            if (card.condition && !card.condition()) continue;
            if (card.faction && card.faction != faction) continue;

            let cardDef = { item: `card:${pack}/${rarity}/${id}`, w: 1 };
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

            if (hasCard("standard", "ex", "zip")) {
                lootList.cards.push([pack, rarity, id, loot.count]);
            } else for (let i = 0; i < loot.count; i++) {
                lootList.cards.push([pack, rarity, id, 1]);
            }

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
                    console.log(pack, rarity, id, cardShreds);
                }
            }
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
    game.res.energy -= getUsedEnergy();
    doDraw(amount);
}

function getDrawCooldown() {
    return game.time.drawCooldown * effects.cooldownTime;
}

function getDrawAmount() {
    let count = Math.floor(effects.bulk) + getUsedEnergy();
    count = Math.floor(count * effects.bulkMult);
    count = Math.min(count, MAX_CARDS - game.stats.cardsDrawn);
    if (!hasCard("standard", "ex", "zip")) count = Math.min(count, 100);
    return count;
}

function getUsedEnergy() {
    return Math.floor(game.res.energy);
}

function getCardLevelCost(pack, rarity, id, amount = 1) {
    let data = cards[pack][rarity][id];
    if (!data.levelCost) return [Infinity, res];
    let state = game.cards[pack]?.[rarity]?.[id];
    if (!state) return [Infinity, res]; 

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
    tabs.marketplace.cards[pack + " " + rarity + " " + id]?.remove();
    callPopup("draw", { res: [], cards: [[pack, rarity, id, 1]] });
}