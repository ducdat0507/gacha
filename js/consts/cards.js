const cards = {
    standard: {
        n: {
            "n0": {
                maxLevel: 0,
                effects: [],
                effectors: {}
            },
            "n1": {
                levelCost: [10, 1.2],
                pMult: 1.2,
                effects: [
                    (level, star) => level ** ((game.cards.standard?.sr?.n1?.stars ?? 0) * .1 + 1) * star,
                ],
                effectors: {
                    points: [priority.additive, (x) => x + fx(0)]
                }
            },
            "n2": {
                condition: () => hasCard("standard", "n", "n1"),
                levelCost: [5, 1.15],
                pMult: 1.2,
                starDiff: 0.2,
                effects: [
                    (level, star) => level ** ((game.cards.standard?.sr?.n2?.stars ?? 0) * .1 + 1) * star,
                ],
                effectors: {
                    pointsExtra: [priority.additive, (x) => x + fx(0)]
                }
            },
            "n3": {
                levelCost: [10, 1.3],
                starDiff: 0.8,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    bulk: [priority.additive, (x) => x + fx(0)]
                }
            },
            "n4": {
                condition: () => hasCard("standard", "n", "n3"),
                levelCost: [25, 2],
                starDiff: 1.6,
                effects: [
                    (level, star) => level * star * 5,
                ],
                effectors: {
                    bulkPower: [priority.additive, (x) => x + fx(0)]
                }
            },
            "n5": {
                condition: () => hasCard("standard", "n", "n4"),
                levelCost: [100, 1.8],
                starDiff: 1.4,
                effects: [
                    (level, star) => level * star * 10,
                ],
                effectors: {
                    energyCap: [priority.additive, (x) => x + fx(0)]
                }
            },
            "n6": {
                levelCost: [25, 2],
                pMult: 0.6,
                starDiff: 0.5,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    breakTime: [priority.multiplicative, (x) => x / (1 + fx(0) / 100)]
                }
            },
            "n7": {
                levelCost: [25, 2],
                pMult: 0.6,
                starDiff: 0.5,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    cooldownTime: [priority.multiplicative, (x) => x / (1 + fx(0) / 100)]
                }
            },
            "c1": {
                condition: () => hasCard("standard", "n", "n5"),
                crown: true,
                effects: [],
                effectors: {}
            },
        },
        r: {
            "n0": {
                condition: () => flags.unlocked.shreds,
                levelCost: [100000, 1.2],
                starDiff: 0.2,
                effects: [
                    (level, star) => level * star * 20,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n0b": {
                condition: () => hasCard("standard", "r", "n0"),
                levelCost: [2500, 1.25, "shreds"],
                starDiff: 0.3,
                effects: [
                    (level, star) => level * star * 20,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n1": {
                levelCost: [100000, 1.3],
                pMult: 1.2,
                effects: [
                    (level, star) => 40 + level * [0, 10, 20, 40, 80, 160][star],
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n1b": {
                condition: () => flags.unlocked.shreds,
                levelCost: [1000, 1.12, "shreds"],
                pMult: 1.2,
                starDiff: 0.2,
                effects: [
                    (level, star) => 25 + level ** (0.9 + star * 0.1) * [0, 25, 50, 100, 180, 250][star],
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n2": {
                condition: () => hasCard("standard", "n", "n3") && flags.unlocked.zip,
                levelCost: [200000, 2],
                starDiff: 0.9,
                effects: [
                    (level, star) => 20 + level * star * 5,
                    (level, star) => 2 * level,
                ],
                effectors: {
                    bulk: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    cooldownTime: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                }
            },
            "n3": {
                condition: () => hasCard("standard", "n", "n4") && flags.unlocked.zip,
                levelCost: [250000, 1.8],
                starDiff: 0.8,
                effects: [
                    (level, star) => 20 + level * star * 5,
                    (level, star) => 2 * level,
                ],
                effectors: {
                    bulkPower: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    cooldownTime: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                }
            },
            "n3b": {
                condition: () => hasCard("standard", "r", "n3") && flags.unlocked.shreds,
                levelCost: [1000, 1.4, "shreds"],
                pMult: 0.8,
                maxLevel: 40,
                starDiff: 1.2,
                effects: [
                    (level, star) => 10 * level * [0, 1, 1.5, 2, 3, 4][star],
                ],
                effectors: {
                    bulkPower: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n3c": {
                condition: () => hasCard("standard", "r", "n3b"),
                pMult: 0.8,
                levelCost: [1000, 1.3, "shreds"],
                maxLevel: 75,
                starDiff: 0.9,
                effects: [
                    (level, star) => 25 * (level + 1) * [0, 1, 2, 3, 5, 7][star],
                ],
                effectors: {
                    energyCap: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4": {
                condition: () => flags.unlocked.zip,
                pMult: 0.8,
                levelCost: [50000, 2],
                maxLevel: 40,
                starDiff: 1,
                effects: [
                    (level, star) => 8 + level * star * 2,
                    (level, star) => 5 * level,
                ],
                effectors: {
                    bulkMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    cooldownTime: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                    breakTime: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                }
            },
            "n4b": {
                condition: () => flags.unlocked.zip && flags.unlocked.shreds,
                pMult: 0.6,
                levelCost: [10, 2, "shreds"],
                maxLevel: 100,
                starDiff: 1.2,
                effects: [
                    (level, star) => (9 + level) * star,
                ],
                effectors: {
                    revealTime: [priority.multiplicative, (x) => x / (1 + fx(0) / 100)],
                }
            },
            "n5a": {
                faction: "fire",
                pMult: 0.5,
                levelCost: [2, 1.5, "fire"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 12,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    fireGain: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n5b": {
                faction: "water",
                pMult: 0.5,
                levelCost: [2, 1.5, "water"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 12,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    waterGain: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n5c": {
                faction: "leaf",
                pMult: 0.5,
                levelCost: [2, 1.5, "leaf"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 12,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    leafGain: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n5d": {
                faction: "sun",
                pMult: 0.5,
                levelCost: [2, 1.5, "sun"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 12,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    sunGain: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n5e": {
                faction: "moon",
                pMult: 0.5,
                levelCost: [2, 1.5, "moon"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 12,
                effects: [
                    (level, star) => level * star,
                ],
                effectors: {
                    moonGain: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n6a": {
                available: () => flags.unlocked.ad,
                pMult: 0.1,
                levelCost: [1e9, 10, "points"],
                starCost: x => cardStarCost.standard.n(x, 3),
                effects: [
                    (level, star) => (level + 5) * (2 ** star) * 0.05,
                ],
                effectors: {
                    adPointBoost: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n6b": {
                available: () => flags.unlocked.ad,
                condition: () => flags.unlocked.shreds,
                pMult: 0.08,
                levelCost: [1e6, 10, "shreds"],
                starCost: x => cardStarCost.standard.n(x, 3),
                effects: [
                    (level, star) => (level + 4) * (2 ** star) * 0.05,
                ],
                effectors: {
                    adShredBoost: [priority.additive, (x) => x + fx(0)],
                }
            },
            "n6c": {
                available: () => flags.unlocked.ad,
                condition: () => flags.unlocked.faction,
                pMult: 0.06,
                levelCost: [10, 10, "leaf"],
                starCost: x => cardStarCost.standard.n(x, 3),
                effects: [
                    (level, star) => (level + 4) * (2 ** star) * 0.05,
                ],
                effectors: {
                    adFactionBoost: [priority.additive, (x) => x + fx(0)],
                }
            },
            "c1": {
                crown: true,
                effects: [],
                effectors: {}
            },
        },
        sr: {
            "n0": {
                levelCost: [125, 5],
                pMult: 2,
                effects: [
                    (level, star) => 40 + level ** (0.9 + star * 0.1) * [0, 10, 20, 40, 80, 160][star],
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n1": {
                pMult: 1.2,
                effects: [
                    (level, star) => 1 + star * 0.1,
                ],
                effectors: {}
            },
            "n2": {
                pMult: 1.2,
                effects: [
                    (level, star) => 1 + star * 0.1,
                ],
                effectors: {}
            },
            "n3": {
                condition: () => hasCard("standard", "r", "n3b"),
                levelCost: [10000000, 5, "shreds"],
                maxLevel: 75,
                starDiff: 0.9,
                effects: [
                    (level, star) => 10 * level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    energyCap: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4a": {
                faction: "fire",
                pMult: 0.5,
                levelCost: [10, 1.2, "fire"],
                effects: [
                    (level, star) => 8 + level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    fireGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    leafGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4b": {
                faction: "water",
                pMult: 0.5,
                levelCost: [10, 1.2, "water"],
                effects: [
                    (level, star) => 8 + level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    fireGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    waterGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4c": {
                faction: "leaf",
                pMult: 0.5,
                levelCost: [10, 1.2, "leaf"],
                effects: [
                    (level, star) => 8 + level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    leafGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    waterGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4d": {
                faction: "sun",
                pMult: 0.5,
                levelCost: [10, 1.2, "sun"],
                effects: [
                    (level, star) => 8 + level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    sunGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    moonGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4e": {
                faction: "moon",
                pMult: 0.5,
                levelCost: [10, 1.2, "moon"],
                effects: [
                    (level, star) => 8 + level * [0, 2, 3, 5, 8, 12][star],
                ],
                effectors: {
                    sunGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    moonGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n5a": {
                faction: "fire",
                condition: () => hasCard("standard", "ex", "skills2") && hasCard("standard", "ssr", "s_fire"),
                pMult: 0.1,
                levelCost: [2e5, 2, "fire"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 25,
                effects: [
                    (level, star) => 1 + level * [0, 0.01, 0.02, 0.03, 0.05, 0.08][star],
                ],
                effectors: {
                    skillFireCooldown: [priority.multiplicative, (x) => x / fx(0)],
                }
            },
            "n5b": {
                faction: "water",
                condition: () => hasCard("standard", "ex", "skills2") && hasCard("standard", "ssr", "s_water"),
                pMult: 0.1,
                levelCost: [2e5, 1.5, "water"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 25,
                effects: [
                    (level, star) => 1 + level * [0, 0.01, 0.02, 0.04, 0.07, 0.12][star],
                ],
                effectors: {
                    skillWaterCooldown: [priority.multiplicative, (x) => x / fx(0)],
                }
            },
            "n5c": {
                faction: "leaf",
                condition: () => hasCard("standard", "ex", "skills2") && hasCard("standard", "ssr", "s_leaf"),
                pMult: 0.1,
                levelCost: [2e5, 1.2, "leaf"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 25,
                effects: [
                    (level, star) => 1 + level * [0, 0.01, 0.02, 0.04, 0.08, 0.16][star],
                ],
                effectors: {
                    skillLeafCooldown: [priority.multiplicative, (x) => x / fx(0)],
                }
            },
            "n5d": {
                faction: "sun",
                condition: () => hasCard("standard", "ex", "skills2") && hasCard("standard", "ssr", "s_sun"),
                pMult: 0.1,
                levelCost: [2e5, 1.3, "sun"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 25,
                effects: [
                    (level, star) => 1 + level * [0, 0.01, 0.02, 0.04, 0.07, 0.12][star],
                ],
                effectors: {
                    skillSunCooldown: [priority.multiplicative, (x) => x / fx(0)],
                }
            },
            "n5e": {
                faction: "moon",
                condition: () => hasCard("standard", "ex", "skills2") && hasCard("standard", "ssr", "s_moon"),
                pMult: 0.1,
                levelCost: [2e5, 1.2, "moon"],
                starCost: x => cardStarCost.standard.sr(x, 3) * 25,
                effects: [
                    (level, star) => 1 + level * [0, 0.01, 0.02, 0.04, 0.08, 0.16][star],
                ],
                effectors: {
                    skillMoonCooldown: [priority.multiplicative, (x) => x / fx(0)],
                }
            },
            "n6a": {
                available: () => flags.unlocked.ad,
                pMult: 0.1,
                levelCost: [10, 10, "points"],
                starCost: x => cardStarCost.standard.r(x, 1),
                effects: [
                    (level, star) => (level ** (0.9 + star * 0.1) + 4) * (2 ** star) * 5,
                ],
                effectors: {
                    adDrawDurationMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n6b": {
                available: () => flags.unlocked.ad,
                pMult: 0.1,
                levelCost: [100, 100, "shreds"],
                starCost: x => cardStarCost.standard.r(x, 1),
                effects: [
                    (level, star) => (level + 4) * (star) * 5,
                ],
                effectors: {
                    adTimeDurationMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "c1": {
                available: () => !hasCard("standard_legacy", "ex", "pickit"),
                condition: () => flags.unlocked.faction,
                crown: true,
                effects: [],
                effectors: {}
            },
        },
        ssr: {
            "n0": {
                pMult: 2,
                levelCost: [1e9, 10],
                starDiff: 1,
                effects: [
                    (level, star) => level * [0, 1.2, 1.5, 1.8, 2.2, 2.6][star],
                ],
                effectors: {
                    bulkMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "n0b": {
                faction: "water",
                condition: () => flags.unlocked.shreds,
                levelCost: [1e6, 5, "shreds"],
                starDiff: 1,
                effects: [
                    (level, star) => level * star * 2,
                ],
                effectors: {
                    shredRMult: [priority.multiplicative, (x) => x * fx(0)]
                }
            },
            "n0c": {
                faction: "fire",
                condition: () => flags.unlocked.shreds,
                levelCost: [1e9, 10, "shreds"],
                starDiff: 1,
                effects: [
                    (level, star) => level * star * 2,
                ],
                effectors: {
                    shredSRMult: [priority.multiplicative, (x) => x * fx(0)]
                }
            },
            "n0d": {
                faction: "sun",
                condition: () => flags.unlocked.skills,
                levelCost: [10000, 2, "moon"],
                starDiff: 1,
                effects: [
                    (level, star) => level * star * 2,
                ],
                effectors: {
                    shredSSRMult: [priority.multiplicative, (x) => x * fx(0)]
                }
            },
            "n1a": {
                faction: "sun",
                starDiff: 0.6,
                effects: [
                    (level, star) => 1 + star * 2,
                    (level, star) => { let count = getTotalStars("standard"); return count.stars + count.crowns * fx(0); },
                    (level, star) => fx(1) ** (star * .1 + .9),
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(2) / 100)]
                }
            },
            "n1b": {
                condition: () => flags.unlocked.shreds,
                starDiff: 0.5,
                effects: [
                    (level, star) => { let count = getTotalStars("standard"); return count.crowns; },
                    (level, star) => fx(0) ** (star * .2 + 1) * 15,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n1b2": {
                faction: "leaf",
                condition: () => flags.unlocked.shreds,
                starDiff: 0.5,
                effects: [
                    (level, star) => Object.keys(game.badges).length,
                    (level, star) => fx(0) ** (star * 0.1 + 0.9) * 5,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n1c": {
                starDiff: 0.2,
                effects: [
                    (level, star) => Object.keys(game.cards.standard.ex).length,
                    (level, star) => fx(0) ** (star * .2 + 1) * 40,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n1d": {
                faction: "moon",
                condition: () => flags.unlocked.infobook,
                effects: [
                    (level, star) => Object.values(game.flags.statUnlocks).map(x => Object.keys(x).length).reduce((x, y) => x + y, 0),
                    (level, star) => fx(0) ** (star * .1 + .9) * 5,
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n1d2": {
                faction: "moon",
                available: () => game.stats.accountsSold > 0,
                condition: () => game.stats.autobuyBought > 0,
                starDiff: 0.5,
                effects: [
                    (level, star) => game.stats.autobuyBought,
                    (level, star) => fx(0) ** (star * .1 + .9),
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n1e": {
                condition: () => flags.unlocked.skills && game.flags.statUnlocks.skills?.reaction,
                pMult: 0.7,
                starDiff: 0.2,
                effects: [
                    (level, star) => game.stats.reactionCount,
                    (level, star) => fx(0) ** (star * .1 + .9) * 4 * (1.25 ** star),
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "n2": {
                available: () => flags.unlocked.ad,
                pMult: 0.7,
                starDiff: 1.2,
                effects: [
                    (level, star) => 60 - star * 10,
                    (level, star) => effects.adCooldown * fx(0) / 100,
                ],
                effectors: {
                    adRerollCost: [priority.multiplicative, (x) => x * fx(0) / 100]
                }
            },
            "s_fire": {
                faction: "fire",
                pMult: 5,
                crown: true,
                condition: () => flags.unlocked.skills,
                effects: [],
                effectors: {}
            },
            "s_fire_1": {
                faction: "fire",
                pMult: 0.5,
                condition: () => hasCard("standard", "ssr", "s_fire"),
                levelCost: [1000, 1.4, "fire"],
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star],
                ],
                effectors: {
                    skillFireSkip: [priority.additive, (x) => x + fx(0)]
                }
            },
            "s_fire_2": {
                faction: "fire",
                pMult: 0.3,
                starDiff: 0.5,
                condition: () => hasCard("standard", "ssr", "s_fire") && game.flags.statUnlocks.skills?.fireUse,
                effects: [
                    (level, star) => [0, 2, 3, 5, 7, 10][star],
                    (level, star) => game.stats.skillsUsed.fire ?? 0,
                    (level, star) => fx(0) * fx(1)
                ],
                effectors: {
                    skillFireSkip: [priority.additive, (x) => x + fx(0) * (game?.stats?.skillsUsed?.fire ?? 0)]
                }
            },
            "s_water": {
                faction: "water",
                pMult: 4,
                crown: true,
                condition: () => flags.unlocked.skills,
                effects: [],
                effectors: {}
            },
            "s_water_1": {
                faction: "water",
                pMult: 0.5,
                starDiff: 0.5,
                condition: () => hasCard("standard", "ssr", "s_water"),
                levelCost: [1000, 1.3, "water"],
                effects: [
                    (level, star) => level * [0, 1, 1.5, 2, 3, 4][star],
                ],
                effectors: {
                    skillWaterCard: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)]
                }
            },
            "s_water_2": {
                faction: "water",
                pMult: 0.3,
                starDiff: 1,
                condition: () => hasCard("standard", "ssr", "s_water"),
                effects: [
                    (level, star) => 20 * star * star,
                    (level, star) => 5 * star,
                ],
                effectors: {
                    skillWaterGain: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    skillWaterCard2: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)]
                }
            },
            "s_leaf": {
                faction: "leaf",
                pMult: 3,
                crown: true,
                condition: () => flags.unlocked.skills,
                effects: [],
                effectors: {}
            },
            "s_leaf_1": {
                faction: "leaf",
                pMult: 0.5,
                condition: () => hasCard("standard", "ssr", "s_leaf"),
                levelCost: [1000, 1.4, "leaf"],
                effects: [
                    (level, star) => 1 + level * [0, 0.1, 0.15, 0.2, 0.3, 0.4][star],
                ],
                effectors: {
                    skillLeafMult: [priority.multiplicative, (x) => x * fx(0)]
                }
            },
            "s_sun": {
                faction: "sun",
                pMult: 2.5,
                crown: true,
                condition: () => flags.unlocked.skills,
                effects: [],
                effectors: {}
            },
            "s_sun_1": {
                faction: "sun",
                pMult: 0.5,
                condition: () => hasCard("standard", "ssr", "s_sun"),
                levelCost: [1000, 1.2, "sun"],
                effects: [
                    (level, star) => level * [0, 1, 1.5, 2, 3, 4][star],
                ],
                effectors: {
                    skillSunBuff: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    skillSunDebuff: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "s_moon": {
                faction: "moon",
                pMult: 2.5,
                crown: true,
                condition: () => flags.unlocked.skills,
                effects: [],
                effectors: {}
            },
            "s_moon_1": {
                faction: "moon",
                pMult: 0.5,
                condition: () => hasCard("standard", "ssr", "s_moon"),
                levelCost: [1000, 1.2, "moon"],
                effects: [
                    (level, star) => level ** ((game.cards.standard?.ssr?.s_moon_2?.stars ?? 0) * .1 + 1) ** (star * 0.1 + 0.9) * 2.5
                        * (2 ** star),
                    (level, star) => level * 5,
                ],
                effectors: {
                    skillMoonBuff: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    skillMoonDebuff: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                }
            },
            "s_moon_2": {
                faction: "moon",
                pMult: 0.3,
                starDiff: 0.5,
                condition: () => hasCard("standard", "ssr", "s_moon_1"),
                effects: [
                    (level, star) => (star * 0.1 + 1),
                ],
            },
        },
        ur: {
            "n0": {
                levelCost: [1e12, 1.5, "shreds"],
                starDiff: 1,
                pMult: 3,
                effects: [
                    (level, star) => level * [0, 1.2, 1.5, 1.8, 2.2, 2.6][star],
                    (level, star) => level * (2 ** star) * 10,
                    (level, star) => level ** (.1 * star + 0.9) * (2 ** star),
                ],
                effectors: {
                    bulk: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    bulkMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    bulkPower: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    energyCap: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(1) / 100)],
                    pointsMult: [priority.multiplicative, (x) => x * 1 * fx(2)],
                }
            },
            "n1a": {
                faction: "fire",
                condition: () => game.cards.standard?.sr?.n5a?.stars >= 2,
                pMult: 0.2,
                effects: [
                    (level, star) => 1 + star * 2,
                ],
                effectors: {
                    skillFireStack: [priority.additive, (x) => x + fx(0) - 1],
                }
            },
            "n1a1": {
                faction: "fire",
                condition: () => game.cards.standard?.sr?.n5a?.stars >= 2,
                levelCost: [1e3, 5, "water"],
                pMult: 0.2,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    skillFireSkip: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                    skillFireCooldown: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1a0": {
                faction: "fire",
                levelCost: [1e4, 3, "leaf"],
                pMult: 0.5,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    fireDrawMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1b": {
                faction: "water",
                condition: () => game.cards.standard?.sr?.n5b?.stars >= 2,
                levelCost: [1e6, 2, "water"],
                pMult: 0.2,
                effects: [
                    (level, star) => level * [0, 10, 20, 36, 55, 80][star],
                ],
                effectors: {
                    skillWaterSpeed: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1b0": {
                faction: "water",
                levelCost: [1e4, 3, "fire"],
                pMult: 0.5,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    waterDrawMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1c1": {
                faction: "leaf",
                condition: () => game.cards.standard?.sr?.n5c?.stars >= 2,
                levelCost: [1e6, 1.5, "leaf"],
                pMult: 0.4,
                effects: [
                    (level, star) => level * [0, 10, 20, 36, 55, 80][star],
                ],
                effectors: {
                    skillLeafMultCrown: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1c2": {
                faction: "leaf",
                condition: () => game.cards.standard?.sr?.n5c?.stars >= 2,
                levelCost: [2.5e6, 2.1, "leaf"],
                pMult: 0.4,
                effects: [
                    (level, star) => level * [0, 10, 20, 36, 55, 80][star],
                ],
                effectors: {
                    skillLeafMultBase: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1c0": {
                faction: "leaf",
                levelCost: [1e4, 3, "water"],
                pMult: 0.5,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    leafDrawMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1d": {
                faction: "sun",
                condition: () => game.cards.standard?.sr?.n5d?.stars >= 2,
                pMult: 0.2,
                effects: [
                    (level, star) => 20 * star,
                ],
                effectors: {
                    skillSunDup: [priority.additive, (x) => x + fx(0) / 100],
                }
            },
            "n1d0": {
                faction: "sun",
                levelCost: [1e4, 3, "moon"],
                pMult: 0.5,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    sunDrawMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1e": {
                faction: "moon",
                condition: () => game.cards.standard?.sr?.n5e?.stars >= 2 && game.cards.standard?.n?.n3,
                pMult: 0.2,
                effects: [
                    (level, star) => 0.2 * star,
                    (level, star) => (game.cards.standard.n.n3.level * game.cards.standard.n.n3.stars) ** fx(0),
                ],
                effectors: {
                    skillMoonBuff: [priority.additive, (x) => x + fx(1)],
                }
            },
            "n1e0": {
                faction: "moon",
                levelCost: [1e4, 3, "sun"],
                pMult: 0.5,
                effects: [
                    (level, star) => level * [0, 5, 7, 10, 14, 20][star] + 10,
                ],
                effectors: {
                    moonDrawMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
        },
        ex: {
            "zip": {
                available: () => !hasCard("standard_legacy", "ex", "zip"),
                crown: true,
                buyCost: [8000, "points"],
                effects: [],
                effectors: {
                    revealTime: [priority.multiplicative, (x) => x * 2]
                }
            },
            "shred": {
                condition: () => game.cards.standard?.r,
                crown: true,
                buyCost: [2500000, "points"],
                effects: [],
                effectors: {}
            },
            "offline": {
                condition: () => flags.unlocked.shreds || game.stats.accountsSold > 0,
                crown: true,
                buyCost: () => {
                    if (game.stats.accountsSold > 0) return [16000, "points"];
                    return [16000, "shreds"];
                },
                effects: [
                    () => effects.offlineLimit / 60 + (hasCard("standard", "ex", "offline") ? 0 : 30),
                    () => 30,
                ],
                effectors: {
                    offlineLimit: [priority.additive, (x) => x + fx(1) * 60],
                }
            },
            "faction": {
                condition: () => game.cards.standard?.sr && flags.unlocked.shreds,
                crown: true,
                buyCost: [2.5e9, "shreds"],
                effects: [],
                effectors: {}
            },
            "pickit": {
                condition: () => hasCard("standard", "sr", "c1") || hasCard("standard_legacy", "ex", "pickit"),
                crown: true,
                buyCost: () => {
                    if (game.stats.accountsSold > 0) return [16000, "shreds"];
                    return [250, "water"];
                },
                effects: [],
                effectors: {}
            },
            "autobuy": {
                available: () => game.stats.accountsSold > 0,
                condition: () => flags.unlocked.pickit,
                crown: true,
                buyCost: () => {
                    return [55e6, "shreds"];
                },
                effects: [
                    () => 30,
                ],
                effectors: {
                    autobuySpeed: [priority.additive, (x) => x + fx(0)],
                }
            },
            "iris": {
                available: () => !hasCard("standard_legacy", "ex", "pickit"),
                condition: () => hasCard("standard", "sr", "c1") && hasCard("standard", "ssr", "n1c"),
                crown: true,
                buyCost: [1000, "moon"],
                effects: [],
                effectors: {}
            },
            "skills": {
                condition: () => game.cards.standard?.ssr && flags.unlocked.faction,
                crown: true,
                buyCost: [1e20, "points"],
                effects: [],
                effectors: {}
            },
            "skills2": {
                condition: () => game.stats.reactionCount > 0,
                crown: true,
                buyCost: [1e30, "points"],
                effects: [],
                effectors: {}
            },
        }
    },
    standard_legacy: {
        n: {
            "n0": {
                levelCost: [50, 1.15, "exp"],
                effects: [
                    (level, star) => level ** (0.9 + 0.1 * star) * 2 ** star * 50,
                ],
                effectors: {
                    pointsMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n1": {
                levelCost: [50, 1.2, "exp"],
                effects: [
                    (level, star) => level ** (0.7 + 0.1 * star) * 2 ** star * 40,
                ],
                effectors: {
                    shredMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2": {
                levelCost: [50, 1.25, "exp"],
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * 2 ** star * 30,
                ],
                effectors: {
                    factionMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2a": {
                levelCost: [75, 1.5, "exp"],
                condition: () => hasCard("standard_legacy", "n", "n2"),
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * [0, 20, 40, 70, 100, 160][star],
                ],
                effectors: {
                    fireMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2b": {
                levelCost: [75, 1.5, "exp"],
                condition: () => hasCard("standard_legacy", "n", "n2"),
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * [0, 20, 40, 70, 100, 160][star],
                ],
                effectors: {
                    waterMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2c": {
                levelCost: [75, 1.5, "exp"],
                condition: () => hasCard("standard_legacy", "n", "n2"),
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * [0, 20, 40, 70, 100, 160][star],
                ],
                effectors: {
                    leafMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2d": {
                levelCost: [75, 1.5, "exp"],
                condition: () => hasCard("standard_legacy", "n", "n2"),
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * [0, 20, 40, 70, 100, 160][star],
                ],
                effectors: {
                    sunMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n2e": {
                levelCost: [75, 1.5, "exp"],
                condition: () => hasCard("standard_legacy", "n", "n2"),
                pMult: 0.25,
                effects: [
                    (level, star) => level ** (0.4 + 0.1 * star) * [0, 20, 40, 70, 100, 160][star],
                ],
                effectors: {
                    moonMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n3": {
                levelCost: [50, 1.4, "exp"],
                effects: [
                    (level, star) => (level * 5 + 5) * [0, 1, 2, 3, 4, 5][star],
                ],
                effectors: {
                    factionChance: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
            "n4": {
                levelCost: [50, 1.75, "exp"],
                effects: [
                    (level, star) => (level) * 2 ** star,
                    (level, star) => (level) * star,
                ],
                effectors: {
                    bulk: [priority.additive, (x) => x + fx(0)],
                    bulkMult: [priority.multiplicative, (x) => x * (1 + fx(0) / 100)],
                }
            },
        },
        ex: {
            "legacy": {
                condition: () => false,
                crown: true,
                effects: [
                    (level, star) => effects.legacyPickCount,
                    (level, star) => effects.legacyDrawCount,
                ],
                effectors: {},
            },
            "zip": {
                condition: () => false,
                crown: true,
                effects: [],
                effectors: {}
            },
            "pickit": {
                condition: () => false,
                crown: true,
                effects: [],
                effectors: {}
            },
            "ads": {
                condition: () => false,
                crown: true,
                effects: [],
                effectors: {}
            },
        }
    },
    meta: {
    },
}

const cardStarCost = {
    standard: {
        n: (x, n = 0) => Math.floor((20 + 5 * x) * (x + n) ** (x + 1)),
        r: (x, n = 0) => Math.floor((10 + 5 * x) * (x + n) ** (x + 0.5)),
        sr: (x, n = 0) => Math.floor((5 + 5 * x) * (x + n) ** (x)),
        ssr: (x, n = 0) => Math.floor((5 + 5 * x) * (x + n) ** (x)),
        ur: (x, n = 0) => Math.floor((5 + 5 * x) * (x + n) ** (x)),
    },
    standard_legacy: {
        n: (x, n = 0) => Math.floor((5 + 5 * x) * (x + n) ** (x + 1)),
    }
}
