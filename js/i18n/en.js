let i18nDefault = i18nStrings.en = {
    /** Name of the language, in that language. Don't translate the word "English" to your language. */
    name: "English",
    /** The number notation to use as the default with the language. */
    notation: "common",
    /** The primary verb. See `verb` for more info. */
    primaryVerb: "draw",

    /** 
     * A list of verbs for the player to choose from. Each verb contains a list of forms
     * that are used to be inserted into strings. 
     * 
     * For example: In English, `"free {draws}"` can be replaced into "free draws", "free pulls",
     * or "free summons" based on the verb the player selected in Settings.
     * 
     * You can declare as much verb forms as your language needs.
     * 
     * `_anim` is used to determine per-verb special card opening animation. For example: `_anim: "spin"`
     * makes the card pack spin while it is opened and should be used on verbs that are near in meaning
     * to the word "spin".
     * 
     * `_equiv` declares a verb's equivalent verb in English and is used to determine which verb to change to
     * when the player changes the game's language.
     * 
     * @type {{[verb: string]: { _equiv?: string, _anim?: string, [form: string]: string }}} 
    */
    verbs: {
        draw: {
            draw: "draw",
            draws: "draws",
            drew: "drew",
            drawn: "drawn",
            drawing: "drawing",
        },
        pull: {
            draw: "pull",
            draws: "pulls",
            drew: "pulled",
            drawn: "pulled",
            drawing: "pulling",
        },
        summon: {
            draw: "summon",
            draws: "summons",
            drew: "summoned",
            drawn: "summoned",
            drawing: "summoning",
        },
        roll: {
            _anim: "spin",
            draw: "roll",
            draws: "rolls",
            drew: "rolled",
            drawn: "rolled",
            drawing: "rolling",
        },
        spin: {
            _anim: "spin",
            draw: "spin",
            draws: "spins",
            drew: "spun",
            drawn: "spun",
            drawing: "spinning",
        },
        gacha: {
            draw: "gacha",
            draws: "gacha",
            drew: "gacha'd",
            drawn: "gacha'd",
            drawing: "gacha'ing",
        }
    },

    /** 
     * Common or uncategorized strings.
    */
    common: {
        title: "One Trillion Free {Draws}",
        title_rich: "<span class='number'>One Trillion</span> Free {Draws}",

        draw: "{Draw}",
        draw_inCooldown: "In cooldown",
        draw_outOfDraws: "Out of {draws}...",
        switch: {
            no: "Switch to no faction",
            fire: "Switch to fire faction",
            water: "Switch to water faction",
            leaf: "Switch to leaf faction",
            sun: "Switch to sun faction",
            moon: "Switch to moon faction",
        },
        skills: {
            active: "Active",
        },

        new: "NEW!",

        hint_title: "You've got {0} free {draws}!",
        hint_desc: "Click this big “{Draw}” button below to start {drawing} some of them!",
        hint_ios_title: "For the best experience:",
        hint_ios_desc: "Press {0} -> “Add to Home Screen” -> “Add”",
    },

    /** 
     * Strings for notification popups
    */
    notifs: {
        badge_earn: "Badge obtained:",
        music_needsInteract: "Click anywhere to enable background music",
    },

    /** 
     * Strings related to formatting.
    */
    format: {
        joiner: {
            currency: "{0} {1}",
        },
        marks: {
            quote: "“{0}”",
        },
        skill: {
            cooldown: "Cooldown: {0}"
        },
        time: {
            second: "{0}s",
            minute: "{0}m",
            hour: "{0}h",
            day: "{0}d",
            joiner: "{1} {0}",
        },
        chance: {
            fraction: "{0} in {1}",
            percent: "{0}%"
        }
    },

    /** 
     * Strings related to tabs' contents.
    */
    tabs: {
        common: {
            strings: {
                nothing: "Seems like there isn't anything here...",
            }
        },
        collection: {
            name: "Collection",
            filters: {
                type: {
                    regular: "Regular",
                    legacy: "Legacy",
                },
                rarity: {
                    any: "Any rarity",
                    n: "<rarity rarity='n'></rarity> cards", 
                    r: "<rarity rarity='r'></rarity> cards", 
                    sr: "<rarity rarity='sr'></rarity> cards", 
                    ssr: "<rarity rarity='ssr'></rarity> cards", 
                    ur: "<rarity rarity='ur'></rarity> cards",
                    ex: "<rarity rarity='ex'></rarity> cards",
                },
                faction: {
                    any: "Any faction", 
                    none: "No faction",
                    fire: "Fire faction", 
                    water: "Water faction", 
                    leaf: "Leaf faction", 
                    sun: "Sun faction", 
                    moon: "Moon faction",
                },
                pickit: {
                    off: "Disable pick-it Premium",
                    on: "Show upgradeable cards",
                },
                iris: {
                    info1: "Here lies numbers that are provided by irisVision:",
                    infoInHand: "The left number shows the amount of unique card variations you have in your collection.",
                    infoInPool: "The middle number shows the amount of unique card variations that have met its condition to be in the draw pool or appear in the Marketplace.",
                    infoInGame: "The right number shows the amount of unique card variations that is available in the current game run.",
                    info2: "You can use card filters to influence these numbers and deduce actions needed to obtain cards that are not yet discovered.",
                },
            }
        },
        marketplace: {
            name: "Marketplace",
            subtabs: {
                meta: "Online Marketplace",
                ingame: "In-Game Shop",
            },
            headers: {
                accountMarket: "Account Marketplace",
                exCards: "<rarity rarity='ex'></rarity> Cards",
                boosterPacks: "Booster Packs",
                cinema: "Absolute Cinema",
            },
            strings: {
                sellAccount: "Account Adoption Service",
                sellAccount_desc: "We buy gacha game accounts for competitive prices!",
                sellAccount_gain: "You'll gain:",
                sellAccount_gain_money: "{0}<br>Money",
                sellAccount_gain_exp: "{0}<br>Experience",
                sellAccount_req: "Requires {0} card {drawn}",
                sellAccount_action: "Sell Account!",
                sellAccount_actionLocked: "Locked",

                ad_title: "“Ad” Booster",
                ad_effects: {
                    points_draw: "“Watch” an “ad” and gain {x0:1} more points for the next {1} {draws}!",
                    shreds_draw: "“Watch” an “ad” and gain {x0:1} more shreds for the next {1} {draws}!",
                    faction_draw: "“Watch” an “ad” and gain {x0:1} more faction power for the next {1} {draws}!",
                    energy_time: "“Watch” an “ad” and gain passive Bulk Energy {x0:1} faster for {1s}!",
                },
                ad_cooldown: "New “ads” will become available in {0}",
                ad_action: "“Watch” “Ad”",
                ad_actionCooldown: "On cooldown",
                ad_reroll: "Reroll offer",
            },
        },
        infobook: {
            name: "Infobook",
            subtabs: {
                stats: "Statistics",
                breakdown: "Breakdown",
                gallery: "Gallery",
            },
            strings: {
                badges: "Badges",
                story: "Story",
            }
        },
        options: {
            name: "Options",
            subtabs: {
                prefs: "Preferences",
                saves: "Storage",
                other: "Other"
            },
            headers: {
                prefs: {
                    i18n: "Localization & Data Expression",
                    logic: "Game Behavior",
                    video: "Visual & User Interface",
                    audio: "Audio"
                },
                saves: {
                    storage: "Storage"
                },
                other: {
                    info: "Info",
                    bonus: "Bonus"
                },
            },
            items: {
                language: "Language",
                updateRate: "Update Rate",
                confirm: "Confirmations",
                notation: "Number Format",
                verb: "Verb",
                cardImages: "Card Images",
                cardSize: "Card Size",
                musicVolume: "BGM Volume",
                localSave: "Local Save",
                cloudSave: "Cloud Save",
                info: "Info",
                otherOther: "Other other",
            },
            values: {
                updateRate: {
                    auto: "Auto",
                    perSec: "{0} TPS",
                },
                items: {
                    showConfirms: "Show Confirmation Settings",
                    manualSave: "Manual Save",
                    importExport: "Import/Export Save",
                    hardReset: "Hard Reset",
                    checkSaves: "Check Saves",
                    about: "About & Credits", 
                    john: "johnvertisement",
                },
                common: {
                    hidden: "Hidden",
                    shown: "Shown",
                    disabled: "Disabled",
                    enabled: "Enabled",
                },
                notation: {
                    default: "Default",
                    common: "Common",
                    scientific: "Scientific",
                    engineering: "Engineering",
                    si: "SI Prefixes",
                    alphabet: "Alphabet",
                    chinese: "Chinese",
                    korean: "Korean",
                }
            },
            strings: {
                save_recent: "(game saved)",
                save_timer: "(last saved {0} ago)",

                cloud_type_galaxy: "(connected to galaxy)",
                cloud_loggedOut: "(logged out)",
                cloud_status_saving: "(saving...)",
                cloud_status_loading: "(loading...)",
                cloud_status_checking: "(checking...)",

                language_desc: "Languages other than English may not be 100% finished or accurate.",
                notation_desc: "Change how large numbers are expressed in the game. The “Default” number format is based on the current language.",
                verb_desc: "Change the verb associated with {drawing} cards, in places such as the game title and item descriptions.",
                john_note: "(Note: links open in this tab, ctrl+click to not accidentally close the game)",
            },
            popups: {
                confirm: {
                    title: "Confirmation Settings",
                    desc: "Ask me for confirmation:",
                    types: {
                        sellAccount: "When I sell my account",
                    }
                }
            }
        },
    },

    /** 
     * Strings related to popups or tooltips' contents.
    */
    popups: {
        common: {
            title_error: "Error",

            desc_error: "There was an error: {0}",
            desc_pleaseWait: "Please wait.",

            action_continue: "Continue",
            action_close: "Close",
            action_reload: "Reload",
        },
        draw: {
            strings: {
                brand: "DTCGco.™",
                brand_full: "© DUDUCAT TRADING CARD GAME CO.",
                pack_title: "OMEGA CARDS",
                pack_subtitle: "TRADING CARD GAME",
                pack_count: "PACK OF<br>{0} CARDS",
            },
        },
        drawLegacy: {
            title: "Pick {0}",
        },
        currency: {
            strings: {
                amount_have: "(you have {0})",
                amount_drawn: "(you've {drawn} {0})",
                speed_minute: "({0}/min)",
                toCap: "({0} until cap)",
                efficiency: "({0} efficiency)",
            }
        },
        confirm: {
            sellAccount: {
                title: "Really sell account?",
                desc1: "You will start over with a new game account, however you'll earn <b>Money</b> and <b>Experience</b> based on your performance.",
                desc2: "<strong>There's no buying back</strong>—the game will save when you sell your account!",
                confirm: "Ask me to confirm the next time I sell my account",

                list_lose: "You'll lose:",
                list_lose1: "Your regular card collection",
                list_lose2: "Points, shreds, and faction currencies",
                list_lose3: "Skills and usage statistics",

                list_gain: "You'll gain:",
                list_gainMoney: "{0} Money",
                list_gainExp: "{0} Experience",


                action_no: "No, go back",
                action_yes: "Yes, sell account",
            },
        },
        card: {
            factions: {
                fire: "(fire faction)", 
                water: "(water faction)", 
                leaf: "(leaf faction)", 
                sun: "(sun faction)", 
                moon: "(moon faction)", 
            },
            strings: {
                copies: "({0} extra copies)",
                stars: "({0} stars)",
                crown: "(crowned card)",
                level: "(level {0})",
                notOwned: "(card not yet owned)",

                level_title: "Upgrade",
                level_cost: "Upgrade cost:",
                level_cant: "This card can not be upgraded.",
                level_cant_max: "Max level reached.",
                level_cant_cost: "Insufficient {0}.",
                level_prompt: "Click to upgrade.",
                level_button: "Upgrade",
                level_button_cant: "Can't upgrade",
                level_button_max: "Max level reached",

                star_title: "Fusion",
                star_cost: "Fusion cost:",
                star_cost_copies: "“{0}” extra copies",
                star_cant: "This card can not be fused.",
                star_cant_max: "Max star reached.",
                star_cant_cost: "Insufficient copies.",
                star_prompt: "Click to fuse.",
                star_button: "Fuse",
                star_button_cant: "Can't fuse",
                star_button_max: "Max star reached",

                buy_cost: "Purchase cost:",
                buy_prompt: "Click to purchase.",
                buy_button: "Purchase",
                buy_button_cant: "Can't purchase",

                legacyDraw_prompt: "Click to pick this card.",
                legacyDraw_button: "Pick",
            }
        },
        skill: {
            strings: {
                skill: "(skill)",
                skill_locked: "This skill is locked",

                action_activate: "Activate",
                action_activated: "Activated",
                action_inCooldown: "In cooldown ({0})"
            }
        },
        pack: {
            buy_confirm: "Would you like to purchase “{0}”?",
            perks: "This booster pack contains:",
            
            buy_action_no: "No, go back",
            buy_action_yes: "Purchase for {0}",

            strings: {
                pack: "(booster pack)",
            }
        },
        buff: {
            strings: {
                buff: "(buff)",
            }
        },
        ad: {
            strings: {
                sponsored: ["“Sponsored”", "“Promoted”", "“Advertisement”"],
                taunts: {
                    generic: [
                        "Complete this level to end ad early",
                        "I can't reach pink color",
                        "I sold my soul to reach pink color",
                        "Most relaxing game!",
                        "Harder than it looks",
                        "You:"
                    ],
                    puzzle: [
                        "If you complete this puzzle, you're legally skilled",
                        "If you solve this puzzle, you're legally allowed to close this ad early",
                        "I don't think you can complete this puzzle",
                        "I bet you can't solve this puzzle",
                        "Can you solve this puzzle?",
                        "I sold my soul to complete this puzzle",
                    ],
                    completed: [
                        "You did it!",
                        "Amazing!",
                        "Congratulations!",
                    ],
                }
            },

            action_close: "Close “Ad”",
            action_closeIn: "Close in {0}",
        },
        badge: {
            strings: {
                state_obtained: "(obtained badge)",
                state_locked: "(locked badge)",

                lock_desc: "???",
            }
        },
        slideshow: {
            strings: {
                action_skip: "I ain't reading allat",
                action_next: "Next",
            }
        },
        save: {
            ie_title: "Import/Export Save",
            ie_desc1: "The text box below contains your save data. Copy your save and keep it somewhere safe.",
            ie_desc2: "Alternatively, paste your save there and press “Import from Text Box” to load the save.",
            ie_action_save_text: "Copy to Clipboard",
            ie_action_save_file: "Download File",
            ie_action_load_text: "Import from Text Box",
            ie_action_load_file: "Upload File",

            saved_title: "Game saved",
            saved_desc: "It is now safe to close this tab.",
            saved_noteLocal: "(Note: this game auto-saves after a minute since the last save and on certain events such as after a {draw} and when a setting is changed)",
            saved_noteCloud: "(Note: this game auto-saves to the cloud after 5 minutes since the last cloud save)",
            saved_text_title: "Copied save",
            saved_text_desc: "Save data copied to clipboard.",
            saved_file_title: "Downloading save...",
            saved_file_desc: "Save data downloading as “{0}”...",

            import_error: "Invalid Save",
            import_error_desc: "This save appears to be incorrect or corrupted. Make sure you have copied the entire save string and the save string is not truncated.",
            import_error_desc_ellipsis: "Ellipsis detected in save string. Your save might have been truncated by the browser or the operating system. You can use the Download File option instead to make a more reliable backup.",

            import_confirm_title: "Import this save?",
            import_confirm_desc: "Would you like to import this save? Your current game will be overridden!",
            import_confirm_cloudcheck_title: "Older cloud save",
            import_confirm_cloudcheck_desc: "The save on the cloud seems to be older than the current local save. Would you like to import the cloud save?",
            import_confirm_cloudavail_title: "Cloud save available!",
            import_confirm_cloudavail_desc: "There is a cloud save available. Would you like to import it?",
            import_confirm_action_no: "No, go back",
            import_confirm_action_yes: "Yes, import save",

            reset_confirm_title: "Really hard reset?",
            reset_confirm_desc1: "This action will <strong>COMPLETELY WIPE YOUR SAVE CLEAN.</strong> You'll go back to the very beginning of the game with <strong>NO BONUSES IN RETURN.</strong>",
            reset_confirm_desc2: "The game will copy the current save data to your clipboard in case you change your mind.",
            reset_confirm_action_no: "No, go back",
            reset_confirm_action_yes: "Yes, hard reset",

            busy_saving_cloud: "Saving to cloud...",
            busy_import: "Importing save...",
            busy_reset: "Hard resetting...",
            busy_desc: "(the game will reload in a moment, don't close the game in the process)",

            error_cloudSaveCooldown: "Please wait 30 seconds between cloud saves.",
            error_cloudCheckCooldown: "Please wait 30 seconds between cloud save checks.",
            error_copy1: "There was an error trying to copy your save string into the clipboard.",
            error_copy2: "You can still manually copy your save string from the text box by selecting all the text and copy it.",
            error_loggedOut: "You are not logged in. Please log in in order to access cloud save functionalities.",

            opt_keepPrefs: "Keep preferences",
            opt_keepPrefs_noteReset: "(Note: preferences that are bound to an unlockable will be reset to default values)",
            opt_keepPrefs_noteImport: "(Note: preferences that are bound to an unlockable will be reset to default values if said unlockable is not present in the new save)",
        },
        about: {
            blabs: [
                "(because we can't help ourselves from inflating free {draw} counts)",
                "(because we can't help ourselves from advertising free {draw} counts)",
                "(no-download game with cutting-edge web technologies)",
                "(about as generous a gacha game could be)",
                "(and you thought a-thousand-ish was too much)",
                "<marquee>(look ma, i'm in a &lt;marquee&gt; tag!)</marquee>",
                "(truly a bulktastic game)",
            ],
            strings: {
                game: "Game by {0}",
                openSource: "This game is licensed under <b>MIT License</b>",
                viewLicense: "View license",
                viewSource: "View source code",
                libs: "Libraries used:",
                music: "Music by {0}",
                music_foot: "(hey that's me)",
                icons: "Icons from various sources, provided via {0}",
                footer: "(would the game count as parody and thus eligible for fair use?<br>idk, i'm not a lawyer)",
                thanks: "Special thanks to:",
                thanks1: "All those mobile game ads",
                thanks1_foot: "(for the inspiration)",
            }
        },
        offline: {
            title: "Welcome back!",
            desc_time: "You were away for {0}.",
            desc_timeReduced: "(reduced to {0} of offline progress)",
            desc_event: "While you're away:",
            events: {
                nothing: "Nothing particularly interesting happened...",
                energy: "Bulk energy changed from {0} to {1}",
                cooldown: "{Draw} cooldown changed from {0} to {1}",
                skillCooldown: "“{0}” cooldown changed from {1} to {2}",
                skillStack: "“{0}” stack changed from {1} to {2}",
                pickitTime: "pick-it time changed from {0} to {1}",
                adCooldown: "“Ad” Booster cooldown changed from {0} to {1}",
            }
        },
        sell: {
            decor: {
                username: "Username",
                password: "Password",
                accountSelling: "Selling account...",
                accountSold: "Account sold.",
                accountNew: "Creating new account...",
                accountLogIn: "Logging in...",
            },
        },
        sellResult: {
            title: "Account Summary",
            pointHeaders: {
                obtained: "Obtained",
            },
            points: {
                money: "{0} Money",
                exp: "{0} Experience",
                legacyDraw: "{0} Legacy cards",
            },
            action_continue: "Create New Account",
        },
        complete: {
            strings: {
                title: "Game completed!",
                line1: "You've successfully used up all of your one trillion free {draws}!",
                line2: "It only took you {0} to do it.",
                line3: "This is the end for now, you can wait for an update or you can go to Settings -> Hard Reset to play the game again.",
            }
        },
    },

    /** 
     * Strings related to currencies, such as their names or quote texts.
    */
    currencies: {
        cards: {
            name: "Cards",
            left: "Cards left",
            quote: "Produced for the almighty Omega Cards game, these cards are actually vouchers for you to spend more money to {draw} more cards... after you use up all your one trillion free card {draws}, at least. They are too happy about giving people trillions of free card {draws}, in fact, everyone are",
        },
        energy: {
            name: "Bulk Energy",
            quote: "Used as Omega Cards' loyalty program currency to allow you to trade in multiple card {draws} at once",
        },
        points: {
            name: "Points",
            quote: "The world's most generic currency. It is generic enough to be assigned any use case imaginable",
        },
        shreds: {
            name: "Shreds",
            quote: "Remains of excess cards, reduced to atoms. These cards almost have no trade value (except for the few <rarity rarity='ex'></rarity> cards), so people are inventing new ways to use them, such as shredding them to use as a new upgrade currency",
        },
        fire: {
            name: "Fire Power",
            quote: "Power from the fire faction. Some consider discovering this humans' greatest achievement",
        },
        water: {
            name: "Water Power",
            quote: "Power from the water faction. Always reminds you to keep yourself hydrated",
        },
        leaf: {
            name: "Leaf Power",
            quote: "Power from the leaf faction. You feel yourself to be one with nature",
        },
        sun: {
            name: "Sun Power",
            quote: "Power from the sun faction. Also believed to also have the power to control air",
        },
        moon: {
            name: "Moon Power",
            quote: "Power from the moon faction. Also believed to also have the power to control earth",
        },

        money: {
            name: "Money",
            quote: "It's like the world's most generic currency, but actually usable in real life! Just about anything that has value in real life also has money's involvement!... Price inflation and the reduction of buying power? What's that?",
        },
        exp: {
            name: "Experience",
            quote: "The amount of knowledge you have gathered by playing gacha games. We planned on making it more realistic by relying on you actually learning every bit of nuances of the games but everything in the world has been so gamified with incremental game mechanics even this kind of stuff are now treated as a tangible, measurable, and consumable currency",
        },
    },

    /** 
     * Strings related to cards, such as their names or quote texts.
    */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "No Rewards?",
                    desc: "No effect.",
                    quote: "That one option that is programmed to be picked 99% of the time"
                },
                n1: {
                    name: "A Single Dot",
                    desc: "Gain {+0} points per {draw}.",
                    quote: "ここにいる"
                },
                n2: {
                    name: "Half A Dot",
                    desc: "Randomly gain zero to {+0} points per {draw}.",
                    quote: "To explain what half a dot even is, we'll need to talk about parallel universes-"
                },
                n3: {
                    name: "Card Pack",
                    desc: "{+0} base bulk. Base bulk increase the amount of {draws} you make at once.",
                    quote: "Well, if you want to use up all of those one trillion card {draws} you'll need to start {drawing} multiple of them at once, you know?"
                },
                n4: {
                    name: "Self-Filling Pack",
                    desc: "{+0} bulk power. Bulk power passively generates bulk energy.",
                    quote: "Incremental games, also known as idle games"
                },
                n5: {
                    name: "Bigger Wrap",
                    desc: "{+0} bulk energy cap. Bulk energy production past the energy cap are reduced.",
                    quote: "You can idle for real this time"
                },
                n6: {
                    name: "Scissors",
                    desc: "{+0%} pack breaking speed.",
                    quote: "If you haven't noticed it yet, you can click the pack while it's breaking to break it faster"
                },
                n7: {
                    name: "Fast Delivery",
                    desc: "{+0%} pack cooldown speed.",
                    quote: "Restock faster with our new fast delivery service — applied to all orders 1 card and above!",
                },
                c1: {
                    name: "In-Game Shop",
                    desc: "Unlock the Marketplace.",
                    quote: "Find cards that can't be found from {drawing}, and probably spend all of your money trying to out-bid the highest bidder"
                }
            },
            r: {
                n0: {
                    name: "Epic Shredding Machine",
                    desc: "{+0%} shred multiplier.",
                    quote: "Instead of using a small shredder made for the offices, why not use those industrial ones made for ASMR videos on the internet?"
                },
                n0b: {
                    name: "Amazing Shredding Moments",
                    desc: "{+0%} shred multiplier.",
                    quote: "Apparently people on the internet love watching things being shredded to pieces! You figure out you could record your Epic Shredding Machines shredding cards and upload it to PipeTube to earn some sweet, sweet ad revenue in the process"
                },
                n1: {
                    name: "Point Multiplier",
                    desc: "{+0%} point multiplier.",
                    quote: "Every incremental game needs exponential growth, a generic currency needs a generic multiplier upgrade"
                },
                n1b: {
                    name: "Point Press",
                    desc: "{+0%} point multiplier.",
                    quote: "Press some of your shreds into points. This is precisely how legal points are made too, people won't even be able to notice a difference"
                },
                n2: {
                    name: "Bulkier Card Packs",
                    desc: "{+0%} base bulk, but {+1%} cooldown duration.",
                    quote: "The bulkier, the better"
                },
                n3: {
                    name: "Card Opener Factory",
                    desc: "{+0%} bulk power, but {+1%} cooldown duration.",
                    quote: "Produces large quantity of card openers"
                },
                n3b: {
                    name: "Recycling",
                    desc: "{+0%} bulk power.",
                    quote: "Reusing cards to open more cards is a good idea actually"
                },
                n3c: {
                    name: "Composter",
                    desc: "{+0%} bulk energy cap.",
                    quote: "Recycle even harder with this composter designed to make a metric-scrap-ton of cards"
                },
                n4: {
                    name: "Endurance Training",
                    desc: "{+0%} card multiplier, but {+1%} cooldown duration and pack breaking duration.",
                    quote: "The card packs got some endurance training! Now they are harder to break into, but the contents are increased!"
                },
                n4b: {
                    name: "Flip Attack",
                    desc: "{+0%} card revealing speed.",
                    quote: "Reverse card, block, draw 4"
                },
                n5a: {
                    name: "Trending",
                    desc: "{+0} base fire power gain.",
                    quote: "ah,<br>that's hot,<br>..., that's hot"
                },
                n5b: {
                    name: "Ocean",
                    desc: "{+0} base water power gain.",
                    quote: "i'm blue da be dee da be die"
                },
                n5c: {
                    name: "Forest",
                    desc: "{+0} base leaf power gain.",
                    quote: "team trees ftw"
                },
                n5d: {
                    name: "Air",
                    desc: "{+0} base sun power gain.",
                    quote: "feel the breath"
                },
                n5e: {
                    name: "Earth",
                    desc: "{+0} base moon power gain.",
                    quote: "it is our home"
                },
                n6a: {
                    name: "Buttered Popcorn",
                    desc: "{+0:1} base point boost from “Ad” Booster.",
                    quote: "Wait, you're telling me people actually enjoy watching ads!?"
                },
                n6b: {
                    name: "Caramel Popcorn",
                    desc: "{+0:1} base shred boost from “Ad” Booster.",
                    quote: "Sweet taste for your sweet ad revenue"
                },
                n6c: {
                    name: "Chocolate Popcorn",
                    desc: "{+0:1} base faction power boost from “Ad” Booster.",
                    quote: "Dirty taste for your dirty money"
                },
                c1: {
                    name: "System 2",
                    desc: "Unlock the Infobook. View your stats and other things, though with a price...",
                    quote: "Erm ackstually 🤓"
                }
            },
            sr: {
                n0: {
                    name: "Perfectly Generic Card",
                    desc: "{+0%} point multiplier.",
                    quote: "A perfectly generic card that boosts the perfectly generic currency, the genericness is getting too perfect to handle"
                },
                n1: {
                    name: "A Pair of Points",
                    desc: "Raise the level in <b><rarity rarity='n'></rarity> A Single Dot</b>'s effect by {^0:1}",
                    quote: "This is called a line"
                },
                n2: {
                    name: "Dice Extractor",
                    desc: "Raise the level in <b><rarity rarity='n'></rarity> Half a Dot</b>'s effect by {^0:1}",
                    quote: "Let the pips on the die guide you"
                },
                n3: {
                    name: "Card Warehouse",
                    desc: "{+0%} bulk energy cap.",
                    quote: "At this rate you will need to get yourself a bigger room just so you can store all your cards"
                },
                n4a: {
                    name: "Fire Power Mastery",
                    desc: "{+0%} fire power, leaf power, and point gains.",
                    quote: "Yes, our commentary for these <rarity rarity='sr'></rarity> cards really are just copy-and-pasted from each other, you don't think every gacha game does this all the time?"
                },
                n4b: {
                    name: "Water Power Mastery",
                    desc: "{+0%} water power, fire power, and point gains.",
                    quote: "Yes, our commentary for these <rarity rarity='sr'></rarity> cards really are just copy-and-pasted from each other, you don't think every gacha game does this all the time?"
                },
                n4c: {
                    name: "Leaf Power Mastery",
                    desc: "{+0%} leaf power, water power, and point gains.",
                    quote: "Yes, our commentary for these <rarity rarity='sr'></rarity> cards really are just copy-and-pasted from each other, you don't think every gacha game does this all the time?"
                },
                n4d: {
                    name: "Sun Power Mastery",
                    desc: "{+0%} sun power, moon power, and point gains.",
                    quote: "Yes, our commentary for these <rarity rarity='sr'></rarity> cards really are just copy-and-pasted from each other, you don't think every gacha game does this all the time?"
                },
                n4e: {
                    name: "Moon Power Mastery",
                    desc: "{+0%} moon power, sun power, and point gains.",
                    quote: "Yes, our commentary for these <rarity rarity='sr'></rarity> cards really are just copy-and-pasted from each other, you don't think every gacha game does this all the time?"
                },
                n5a: {
                    name: "Rapid Fire",
                    desc: "{/0:2} <b>Burst</b> cooldown.",
                    quote: "Needs more dakka"
                },
                n5b: {
                    name: "Deep Freeze",
                    desc: "{/0:2} <b>Freeze Drop</b> cooldown.",
                    quote: "Near-absolute zero"
                },
                n5c: {
                    name: "NPK",
                    desc: "{/0:2} <b>Fertilizer</b> cooldown.",
                    quote: "Why do one when you can do all of them?"
                },
                n5d: {
                    name: "Summer",
                    desc: "{/0:2} <b>Photosynthesis</b> cooldown.",
                    quote: "Beach episode not included"
                },
                n5e: {
                    name: "College",
                    desc: "{/0:2} <b>Simplification</b> cooldown.",
                    quote: "Teaches students about critical thinking"
                },
                n6a: {
                    name: "Less Frequent Ads",
                    desc: "“Ad” Booster buffs based on draw count last {0%} longer.",
                    quote: "Apprarently there was a limit on how much we could spam ads to players before it starts being counter-productive and drive people away from our game. Maybe we should try reducing the frequency where player watch ads?"
                },
                n6b: {
                    name: "Longer Ad Boosts",
                    desc: "“Ad” Booster buffs based on time last {0%} longer.",
                    quote: "We can now leech off players from those “Watch ads for 10 seconds of boost” games"
                },
                c1: {
                    name: "pick-it",
                    desc: "Unlock the ability to filter cards by some criteria.",
                    quote: "With pick-it™ you can sort and filter cards by all criterias you can think of!... except for the sorting by card popularity one, that one requires a monthly subscription"
                }
            },
            ssr: {
                n0: {
                    name: "Homestretch",
                    desc: "{+0%} card multiplier.",
                    quote: "You've made it into half of your draws (logarithmically)! If you like this game be sure to leave a like and subscribe for more content like this"
                },
                n0b: {
                    name: "Scrap",
                    desc: "{x0} Shred gain from <rarity rarity='r'></rarity> and above cards.",
                    quote: "quack"
                },
                n0c: {
                    name: "Pyrite",
                    desc: "{x0} Shred gain from <rarity rarity='sr'></rarity> and above cards.",
                    quote: "Despite it's being “fool's gold”, it can still be used as an ingredient for the <rarity rarity='sr'></rarity> cards"
                },
                n0d: {
                    name: "Diamond",
                    desc: "{x0} Shred gain from <rarity rarity='ssr'></rarity> and above cards.",
                    quote: "Diamonds are actually quite common since there are already discoveries on how to fuse them from coal, but the equipments are so expensive that they might be considered rich people's toys"
                },
                n1a: {
                    name: "Galaxy",
                    desc: "Gain more Points based on the total amount of stars you have in your card collection (crowned cards count as {0} stars each).<br>(Currently: {1} stars ⇒ {+2%} point gain)",
                    quote: "In a galaxy, far, far away..."
                },
                n1b: {
                    name: "Royal Junk",
                    desc: "Gain more Shreds based on the total amount of crowned cards you have in your collection.<br>(Currently: {0} crowned cards ⇒ {+1%} shred gain)",
                    quote: "More valuable than regular junk"
                },
                n1b2: {
                    name: "Photo Book",
                    desc: "Gain more Shreds based on the amount of badges you've got.<br>(Currently: {0} badges ⇒ {+1%} shred gain)",
                    quote: "Ahhh the memories"
                },
                n1c: {
                    name: "Extra Points",
                    desc: "Gain more Points based on the total amount of <rarity rarity='ex'></rarity> cards you have in your collection.<br>(Currently: {0} <rarity rarity='ex'></rarity> cards ⇒ {+1%} point gain)",
                    quote: "More points doesn't hurt, right?"
                },
                n1d: {
                    name: "Future Calculator",
                    desc: "Gain more Points based on the total amount of stat entries you've unlocked.<br>(Currently: {0} entries ⇒ {+1%} point gain)",
                    quote: "1 ^ 2 + 3 = 4"
                },
                n1d2: {
                    name: "Black Fridays",
                    desc: "Gain more Points based on the total amount of level ups made with pick-it Premium.<br>(Currently: {0} times ⇒ {+1%} point gain)",
                    quote: "Buy them while the sale still lasts!"
                },
                n1e: {
                    name: "Weirdly AI-Generated Checkerboard Floor to Question Reality to",
                    desc: "Gain more Shreds based on the total amount of skill reactions you've done.<br>(Currently: {0} reactions ⇒ {+1%} shred gain)",
                    quote: "All the technological advancements, just for this"
                },
                n2: {
                    name: "Saying “No” Permit",
                    desc: "Allow rerolling the current ad offer, at the cost of {0%} of the watch cooldown ({1s}).",
                    quote: "It isn't that hard"
                },
                s_fire: {
                    name: "Burst",
                    desc: "Unlock the <b>Burst</b> skill.",
                    quote: "Who used explosion magic inside the dungeon again!?"
                },
                s_fire_1: {
                    name: "Mega Burst",
                    desc: "<b>Burst</b> skill skips an additional {+0s} per trigger.",
                    quote: "Now with flying colors"
                },
                s_fire_2: {
                    name: "Explosion Mastery",
                    desc: "<b>Burst</b> skill gains an additional {+0s} time skip per trigger every time you use this skill.<br>(Currently: {1} times ⇒ {+2s} time skip)",
                    quote: "*particle accelerator noises*"
                },
                s_water: {
                    name: "Freeze Drop",
                    desc: "Unlock the <b>Freeze Drop</b> skill.",
                    quote: "Do you wanna build a snowman?"
                },
                s_water_1: {
                    name: "Slow, but Steady",
                    desc: "{+0%} bonus card multiplier while <b>Freeze Drop</b> is active.",
                    quote: "Better be slow to be sure"
                },
                s_water_2: {
                    name: "Top of the Mountain",
                    desc: "You draw {+1%} more cards when energy cap is reached while <b>Freeze Drop</b> is active.<br>{+0%} <b>Freeze Drop</b>'s energy cap boost.",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "Fertilizer",
                    desc: "Unlock the <b>Fertilizer</b> skill.",
                    quote: "Faster trees means faster papers means faster shreds"
                },
                s_leaf_1: {
                    name: "Nurture",
                    desc: "Increase <b>Fertilizer</b>'s multiplier effect by {x0:1}.",
                    quote: "Take care of the trees"
                },
                s_sun: {
                    name: "Photosynthesis",
                    desc: "Unlock the <b>Photosynthesis</b> skill.",
                    quote: "The sun is a not-so-deadly lazer"
                },
                s_sun_1: {
                    name: "Extra Light",
                    desc: "Increase <b>Photosynthesis</b>'s buff and debuff effect by {+0%}.",
                    quote: "Is this a flashbang?"
                },
                s_moon: {
                    name: "Simplification",
                    desc: "Unlock the <b>Simplification</b> skill.",
                    quote: "Can't hold all these currencies"
                },
                s_moon_1: {
                    name: "Abstractify",
                    desc: "Increase <b>Simplification</b>'s buff by {+0%} but also its debuff by {+1%}.",
                    quote: "This card has been abstracted so much that I can't even bother to write a proper flavor text for it"
                },
                s_moon_2: {
                    name: "Abstractify^2",
                    desc: "Raise the effective level in <rarity rarity='ssr'></rarity><b> Abstractify</b>'s buff effect by {^0:1}.",
                    quote: "Yeah, and this one either"
                }
            },
            ur: {
                n0: {
                    name: "mom",
                    desc: "{+0%} base bulk, bulk power, energy cap, and card multiplier.<br>{+1%} shred gain.<br>{x2} point gain.",
                    quote: "<rarity rarity='ur'></rarity> mom's so buffed she's the strongest unit in the game"
                },
                n1a: {
                    name: "Multi-Fire",
                    desc: "Allow stacking of <b>Burst</b> skills, up to {0} uses at once.",
                    quote: "Over 9000 revolutions per second"
                },
                n1a1: {
                    name: "Absorption",
                    desc: "{+0%} <b>Burst</b> skill's time skip and cooldown.",
                    quote: "Slow, but strong"
                },
                n1a0: {
                    name: "Ash to Cards",
                    desc: "{+0%} card multiplier when fire faction is active.",
                    quote: "Use ashes of trees to infuse them into cards, why didn't we thought of this sooner?"
                },
                n1b: {
                    name: "The Sleeping Game",
                    desc: "While <b>Freeze Drop</b> is active, increase bonus Bulk Energy speed by {+0%}.",
                    quote: "Wait, that isn't what the initials mean?"
                },
                n1b0: {
                    name: "Waterproof Cards",
                    desc: "{+0%} card multiplier when water faction is active.",
                    quote: "Now cards can't be destroyed by getting wet—just think of how many card collections that could be saved from floods!"
                },
                n1c1: {
                    name: "Seed-Picking",
                    desc: "<b>Fertilizer</b> also multiply shred gains from crowned cards by {+0%}.",
                    quote: "Cherry-picking but with seeds. Let the best seed wins!"
                },
                n1c2: {
                    name: "Electrolytes",
                    desc: "<b>Fertilizer</b> also multiply base shred gains by {+0%}.",
                    quote: "It's got what plants crave"
                },
                n1c0: {
                    name: "Home-grown Tree Farm",
                    desc: "{+0%} card multiplier when leaf faction is active.",
                    quote: "Bring Maryland to your home"
                },
                n1d: {
                    name: "Sticky Cards",
                    desc: "Factioned cards {drawn} while <b>Photosynthesis</b> is active have a {0%} chance to duplicate oneself.",
                    quote: "It's actually two cards stuck into one, why are there so many of them here?"
                },
                n1d0: {
                    name: "Ultra-Bright Papers",
                    desc: "{+0%} card multiplier when sun faction is active.",
                    quote: "With our unbelivably bright papers rated 99.9999% ISO, you can make the most light-reflecting cards for the most special cards on the solar system!"
                },
                n1e: {
                    name: "Synergism",
                    desc: "<b>Simplification</b>'s base buff effect gains {^0:1} of <rarity rarity=n></rarity> <b>Card Pack</b>'s effect.<br>(Currently: {+1})",
                    quote: "Oh my god is that a synergism reference?????"
                },
                n1e0: {
                    name: "Ultra-Dark Ink",
                    desc: "{+0%} card multiplier when moon faction is active.",
                    quote: "Vantablack ain't got nothing with this"
                },
            },
            ex: {
                zip: {
                    name: "StackRAR",
                    desc: "Group together duplicate cards in the {draw} view, though the compression halves your card revealing speed in the process. Also remove the <span class='number'>100</span> bulk {draw} limit.",
                    quote: "Please note that StackRAR is not a free card. After a 40 day trial period you must either buy a license or burn this card off of your collection"
                },
                shred: {
                    name: "Shredder",
                    desc: "Unlocks the ability to gain Shreds by obtaining card copies that do not count toward a fusable card, including crowned cards and cards with max stars.",
                    quote: "Act as if nothing has ever happened"
                },
                offline: {
                    name: "Truly Idle",
                    desc: "Allow the game to progress while the game is not open, with reduced speed after {0} minutes of offline time.",
                    quote: "Drowning at work? I've got just the perfect card for you..."
                },
                faction: {
                    name: "Overused Faction System",
                    desc: "Unlock Factions. Use factioned {draws} to get factioned currencies and faction-specific cards.<br>Note: Faction currencies can sometimes shy away from appearing.",
                    quote: "Long ago, the five factions lived together in harmony. Then, everything changed when the fire faction attacked."
                },
                pickit: {
                    name: "pick-it Premium",
                    desc: "Unlock the ability to turn on pick-it Premium sorting, albeit for a limited time.<br/>"
                        + "pick-it Premium sorting filters out non-upgradable cards and sorts cards by cheapest upgrade price first.",
                    quote: "You can go right to what you want to see. Nothing to get in your way. pick-it Premium will widen and deepen your card-browsing passions."
                },
                autobuy: {
                    name: "Auto-Buyer",
                    desc: "While pick-it Premium is active, automatically upgrade the first upgradeable card in the collection {0} times per second.",
                    quote: "Talk about irresponsible spending"
                },
                iris: {
                    name: "irisVision",
                    desc: "Unlock the ability to view your card collection progress on the Collection tab.",
                    quote: "The irisVision works by searching the online database of the game for any cards that is available in the object pool. You *could* just look these info up on the internet yourself but you wouldn't get any side-effect bonuses from <rarity rarity='ssr'></rarity> Royal Junk and similar cards that way so..."
                },
                skills: {
                    name: "Combo",
                    desc: "Unlock active skills. (Individual skills are unlocked through factioned {drawing}.)",
                    quote: "↑↑↓↓←→←→BA"
                },
                skills2: {
                    name: "Incantation-less Magic Pack",
                    desc: "Unlock cards that reduce cooldowns of skills.",
                    quote: "Did you know that the earlier you learn incantation-less magic the easier it is to do it?"
                }
            }
        },
        standard_legacy: {
            n: {
                n0: {
                    name: "Fancier Dots",
                    desc: "{+0%} point gains.",
                    quote: "Now your dots can wear hats! Dots that wear hats are worth more than regular dots"
                },
                n1: {
                    name: "Military-Grade Shredders",
                    desc: "{+0%} shred gains.",
                    quote: "Leave no traces with this specially-designed shredder that are efficient at shredding top-secret cards! Smaller shred particles means more inflated shred counts!"
                },
                n2: {
                    name: "Generational Inheritage",
                    desc: "{+0%} all faction currency gains.",
                    quote: "TIL my father is a very respected Omega Cards player"
                },
                n2a: {
                    name: "Scroll of Flame",
                    desc: "{+0%} fire power gains.",
                    quote: "Chapter 2, Section 18:<br>Your body radiates magic in the form of heat inside your body."
                },
                n2b: {
                    name: "Scroll of Waves",
                    desc: "{+0%} water power gains.",
                    quote: "Chapter 2, Section 21:<br>Soak your feet in water. Do you feel colder? That's because water can absorb magic faster than any other materials."
                },
                n2c: {
                    name: "Scroll of Plants",
                    desc: "{+0%} leaf power gains.",
                    quote: "Chapter 2, Section 27:<br>Feel the movement of the ground below you. Tiny little movement does matter."
                },
                n2d: {
                    name: "Scroll of Light",
                    desc: "{+0%} sun power gains.",
                    quote: "Chapter 2, Section 32:<br>Try to think about your idea of a world everybody would like to live in."
                },
                n2e: {
                    name: "Scroll of Tranquillity",
                    desc: "{+0%} moon power gains.",
                    quote: "Chapter 2, Section 36:<br>Close your eyes. Try to ignore all surrounding sounds. Feel the calmness from the soul inside you."
                },
                n3: {
                    name: "Mana Gatherer",
                    desc: "{+0%} faction power chance.",
                    quote: "Collects mana power from ambient space"
                },
                n4: {
                    name: "Starting Deck",
                    desc: "{+0} base bulk.<br>{+1%} card multiplier.",
                    quote: "Obviously you need a way to properly start your card collecting journey!... Would you like to buy this starter deck?"
                },
            },
            ex: {
                legacy: {
                    name: "Omega Cards Legacy",
                    desc: "Unlock Legacy cards that are transferrable between accounts. When you obtain this card or sell an account, choose {0} out of {1} Legacy cards to add to your collection.",
                    quote: "Tear this card into pieces. Throw the pieces into the playing area from a distance of at least five feet. Everything the pieces touch now permanently belongs to you. Collect the cards and put them into the bottom of your draw pile while everyone looks at you in a weird way"
                },
                zip: {
                    name: "7Stack",
                    desc: "Group together duplicate cards in the {draw} view. Remove the <rarity rarity='ex'></rarity> <b>StackRAR</b> card from the Marketplace.",
                    quote: "It's day 41 already"
                },
                pickit: {
                    name: "Card Suite",
                    desc: "Unlocks the card filtering and progress viewing features from <rarity rarity='sr'></rarity> <b>pick-it</b>, and <rarity rarity='ex'></rarity> <b>irisVision</b>; but remove the cards from appearing in the game.",
                    quote: "Announcement: The popular Quality of Life feature everyone is enjoying is now free!<br/>※Except for the card popularity sorting feature, a monthly fee is still required"
                },
                ads: {
                    name: "You're the Product",
                    desc: "Unlock the ability to gain temporary boosts by “watching” “advertisements”.",
                    quote: "T̴̡̅̓ḧ̵̩́͌e̴̪̼̐͌r̴̼̉é̶͚'̷͎͗s̵̗̎̿ ̸̩͝ń̴̹̣̓o̴̜͒ ̶͙̪̐ȅ̶͔̰s̴̡̨͋c̷̪͑̄a̵̢̞̐́p̴͕̟̈́̊e̸͖̫̋͠"
                },
            }
        }
    },

    /** 
     * Strings related to skill, such as their names or descriptions.
    */
    skills: {
        fire: {
            name: "Burst",
            desc: "Instantly gain {0} worth of bulk energy.",
        },
        water: {
            name: "Freeze Drop",
            desc: "Increase the bulk energy cap by {0} until the next {draw}, but increase its cooldown by {1}.",
        },
        leaf: {
            name: "Fertilizer",
            desc: "Increase all shred multiplier per rarity increase by {0} for the next {draw}.",
        },
        sun: {
            name: "Photosynthesis",
            desc: "Increase faction power gain by {0} for the next {draw}, but decrease point and shred gain by {1}."
        },
        moon: {
            name: "Simplification",
            desc: "Increase point gain by {0} for the next {draw}, but decrease faction power gain by {1}."
        },
    },

    packs: {
        standard: {
            legacy: {
                name: "Legacy Expansion Pack",
                desc: 
                    "Unlock new ways to play with all-new <strong><i>transferrable cards</i></strong>!<br>" +
                    "Comes with not one, not two, but <strong><i>four</i></strong> exclusive <rarity rarity='ex'></rarity> cards!",
                perks: [
                    "Four new <rarity rarity='ex'></rarity> cards"
                ]
            },
            starter: {
                name: "Starter Pack",
                desc: 
                    "Obtain <rarity rarity='ex'></rarity> <b>Truly Idle</b>, <rarity rarity='ex'></rarity> <b>Shredder</b>, and <rarity rarity='ex'></rarity> <b>pick-it Premium</b> right at the start of the game!<br>" +
                    "Also includes a whopping {0} bonus points and {1} bonus shreds!",
                perks: [
                    "<rarity rarity='ex'></rarity> Truly Idle",
                    "<rarity rarity='ex'></rarity> Shredder",
                    "<rarity rarity='ex'></rarity> pick-it Premium",
                    "{0} points",
                    "{1} shreds",
                ]
            }
        },
    },
    
    /** 
     * Strings related to stat entries.
    */
    stats: {
        general: {
            name: "General", 
            items: {
                timeProgress: {
                    name: "Game time",
                },
                timePlayed: {
                    name: "Active play time",
                },
            }
        },    
        legacy: {
            name: "Legacy", 
            items: {
                accountsSold: {
                    name: "Accounts sold",
                },
                legacyCardsDrawn: {
                    name: "Legacy cards {drawn}",
                },
            }
        },    
        cards: {
            name: "Cards",
            items: {
                cardsDrawn: {
                    name: "Cards {drawn}",
                },
                bulkDraw: {
                    name: "Base bulk",
                },
                bulkPower: {
                    name: "Bulk power",
                },
                bulkMult: {
                    name: "Card multiplier",
                },
                energySpeed: {
                    name: "Bonus energy speed",
                },
                cardRChance: {
                    name: "<rarity rarity='r'></rarity> appear chance",
                },
                cardSRChance: {
                    name: "<rarity rarity='sr'></rarity> appear chance",
                },
                cardSSRChance: {
                    name: "<rarity rarity='ssr'></rarity> appear chance",
                },
                cardURChance: {
                    name: "<rarity rarity='ur'></rarity> appear chance",
                },
            }
        },
        points: {
            name: "Points",
            items: {
                base: {
                    name: "Base gain",
                },
                extra: {
                    name: "Random gain",
                },
                mult: {
                    name: "Multiplier",
                },
                calc: {
                    name: "Gain on {draw}",
                },
            }
        },
        shreds: {
            name: "Shreds",
            items: {
                base: {
                    name: "Base gain",
                },
                crownMult: {
                    name: "Crowned card mult",
                },
                rMult: {
                    name: "<rarity rarity='r'></rarity>+ card mult",
                },
                srMult: {
                    name: "<rarity rarity='sr'></rarity>+ card mult",
                },
                ssrMult: {
                    name: "<rarity rarity='ssr'></rarity>+ card mult",
                },
                urMult: {
                    name: "<rarity rarity='ur'></rarity>+ card mult",
                },
            }
        },
        faction: {
            name: "Faction",
            items: {
                chance: {
                    name: "Power chance",
                },
                fire: {
                    name: "Fire Power gain",
                },
                water: {
                    name: "Water Power gain",
                },
                leaf: {
                    name: "Leaf Power gain",
                },
                sun: {
                    name: "Sun Power gain",
                },
                moon: {
                    name: "Moon Power gain",
                },
                mult: {
                    name: "All Power mult",
                },
                calc: {
                    name: "Gain on {draw}",
                },
            }
        },
        skills: {
            name: "Skills",
            items: {
                fireUse: {
                    name: "“Burst” uses",
                },
                waterUse: {
                    name: "“Freeze Drop” uses",
                },
                leafUse: {
                    name: "“Fertilizer” uses",
                },
                sunUse: {
                    name: "“Photosynthesis” uses",
                },
                moonUse: {
                    name: "“Simplification” uses",
                },
                reaction: {
                    name: "Skill reactions",
                },
            }
        }
    },

    /** 
     * Strings related to buffs, such as their names or descriptions.
    */
    buffs: {
        draw: {
            pointsMult: {
                name: "Point UP",
                desc: "Point gains are multiplied by {x0:1} for the next {1} draws!",
            },
            shredsMult: {
                name: "Shred UP",
                desc: "Shred gains are multiplied by {x0:1} for the next {1} draws!",
            },
            factionMult: {
                name: "Power UP",
                desc: "Faction power gains are multiplied by {x0:1} for the next {1} draws!",
            },
        },
        time: {
            energySpeed: {
                name: "Supercharged",
                desc: "Passive Bulk Energy gain is {x0:1} faster for {1s}!",
            },
        },
    },

    /** 
     * Strings related to badges, such as their names or descriptions.
    */
    badges: {
        11: {
            name: "Another Gacha Game to the Pile",
            desc: "{Draw} cards for the first time.",
        },
        12: {
            name: "Four-Leaf Clover",
            desc: "Obtain an <rarity rarity='r'></rarity> card.",
        },
        13: {
            name: "Luck or Dedication?",
            desc: "Obtain an <rarity rarity='sr'></rarity> card.",
        },
        14: {
            name: "Plz plz plz Legendary",
            desc: "Obtain an <rarity rarity='ssr'></rarity> card.",
        },
        15: {
            name: "Ultra Rare or Uber Rare?",
            desc: "Obtain an <rarity rarity='ur'></rarity> card.",
        },
        21: {
            name: "Finally I can see what I'm doing!",
            desc: "View your badges in-game.",
        },
        22: {
            name: "Polar Opposites",
            desc: "Create a skill reaction.",
        },
        23: {
            name: "Just throw it away",
            desc: "Make a no faction {draw} with Photosynthesis active.",
        },
        24: {
            name: "Safe and Sound",
            desc: "Manually save your game data to the cloud, or export your save.",
        },
        25: {
            name: "Two whole cours",
            desc: "Play the game for 24 anime episodes.",
        },
        31: {
            name: "Would you like to buy more {draws}?",
            desc: "Use all of your one trillion free {draws}.",
        },
        32: {
            name: "Everywhere I go, I see this achievement",
            desc: "“Watch” an “ad”.",
        },
    },

    /** 
     * Strings to use in slideshows.
     * 
     * The `directive` list in each slideshow entries are used to control the slideshow's image and texts.
     * - `["image", x]` sets the banner image to that found in `/res/slideshow/{show id}/{x}.png/, or a
     * placeholder image if the destination image is not found.
     * - `["text", x]` plays a scrolling text at the bottom of the banner image.
     * 
     * You may add or remove text entries if if makes the translation better, 
     * but the order of image entries should stay the same.
    */
    slideshows: {
        1: {
            name: "Intro",
            directives: [
                ["image", "1"],
                ["text", "The year is 2078."],
                ["image", "2"],
                ["text", "Gacha gaming has become a way of life."],
                ["text", "The thrilling experience of not knowing what items you'll get, the satisfying feeling when you get a rare {draw}, the flexibility and easiness to add gacha mechanics to every game in existence..."],
                ["text", "People have found gacha games to be the best way to pass time, for casual players and the more competitive-minded players alike."],
                ["text", "Though, when people talk about gacha games, that's not the most significant point to keep in mind."],
                ["text", "It's the fact that..."],
                ["image", "3"],
                ["text", "They make a <i>lot</i> of money."],
                ["text", "The gacha gaming scene has grown into a multi-millillion-dollar worth industry, far greater than any entertainment scene's worth, combined."],
                ["text", "To chase the money, billions of gacha games are coming out every single blink of an eye."],
                ["text", "Of course, since the market has become diluted with so many games, they need a way to introduce itself to players and prove that they're worth their time."],
                ["image", "4"],
                ["text", "Enter the advertising scene."],
                ["text", "Companies initially advertised their games by showing them good graphics and great gameplay mechanics."],
                ["text", "But, that didn't seem to attract lots of players."],
                ["text", "Eventually, they discovered that the most effective way to market a game is... to just give them lots of free stuff."],
                ["text", "After all, virtual currencies and {draws} are in fact, virtual and can be given as much as the company wants."],
                ["text", "As players get used to the larger numbers though, as soon as companies know it, players kept asking for more."],
                ["text", "Companies can't afford to not give more, there will always be a game that decides to give more stuff and thus get more players and money."],
                ["text", "In order to keep up with this, games kept giving more and more free stuff, until the numbers are so inflated they no longer has any real life meaning."],
                ["image", "5"],
                ["text", "You, a person in this society, lying in bed, are about to pick up a new gacha game."],
                ["image", "6"],
                ["text", "Omega Cards, for the mobile devices, the first game of its kind to advertise a trillion free card {draws}. The number that's one followed by twelve zeroes."],
                ["text", "To people 50 years ago, that sounded like a crazy amount of free {draws} to give, but the scene has caught up so fast that it's now just a lesser number compared to other games."],
                ["text", "Though, you still see people on the internet come back to it from time to time for the nostalgia values."],
                ["image", "5"],
                ["text", "You found it interesting enough to start the game for the first time, though the game wants you to use up your one trillion {draws} first."],
                ["text", "And that's when you realize..."],
                ["image", "7"],
                ["text", "...you will definitely be here for a while."],
            ]
        },
        2: {
            name: "End of Free Trial",
            directives: [
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...Wait, is that it?"],
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...Well, that is it!"],
                ["image", "3"],
                ["text", "One trillion free draws, all used up!"],
                ["text", "That was faster than you expected."],
                ["text", "At first, you thought that it would take longer than your lifetime to spend all those card draws one by one."],
                ["image", "1"],
                ["text", "...But well, what are you going to do now?"],
                ["text", "Now that you no longer have any draws left, there's not that many things to do in the game anymore."],
                ["text", "Everything in the game seems to be directly linked to you drawing cards, but since you can't do that anymore, everything just grinds to a halt."],
                ["text", "You can't just buy more draws, you've just ran out of money trying to pay your apartment's rent and today's dinner!"],
                ["text", "..."],
                ["text", "Unless..."],
                ["image", "4"],
                ["text", "...you do that thing..."],
            ]
        },
        3: {
            name: "New Game+",
            directives: [
                ["image", "1"],
                ["text", "Okay, you've got some money now, but at what cost?"],
                ["text", "Losing all of your hard earned progress and going back to the beginning?"],
                ["image", "2"],
                ["text", "..."],
                ["image", "3"],
                ["text", "...Come to think about it a little bit more, it isn't that bad actually."],
                ["text", "At least you can reclaim that one trillion free draws given by freshly created accounts."],
                ["text", "With the little amount of money you now obtain, you can buy that starter pack to help you progress faster..."],
                ["text", "...which means you can spend those trillion free draws faster, and sell this account for money sooner."],
                ["text", "Just do this a few times and you can finally earn enough money for a living! Or become a trillionaire, even!"],
                ["image", "4"],
                ["text", "...The underground account trading market seems to be bigger than you originally think."],
                ["text", "Well, maybe that's because selling gacha game accounts isn't that big of a deal for international gaming laws to intervene."],
                ["text", "They actually attempted to ban game developers from preventing people to sell their gacha game accounts!"],
                ["text", "Now that most of the “normal” jobs are replaced by robots, doing this is considered a niche way to earn money by some people."],
                ["image", "5"],
                ["text", "...Time to start now, shall we?"],
            ]
        },
    },

    ads: {
        minigames: {
            sort: {
                action_undo: "Undo",
                action_restart: "Restart",
            }
        }
    }
}
