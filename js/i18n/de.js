let i18nDefault = i18nStrings.en = {
    /** Name of the language, in that language. Don't translate the word "English" to your language. */
    name: "Deutsch",
    /** The number notation to use as the default with the language. */
    notation: "common",
    /** The primary verb. See the comment for `verbs` for more info. */
    primaryVerb: "ziehen",

    /** 
     * A list of verbs for the player to choose from. Each verb contains a list of forms
     * that are used to be inserted into strings. For example: In English, `"free {draws}"` can be replaced 
     * into "free draws", "free pulls", or "free summons" based on the verb the player selected in Settings.
     * 
     * Because a language might have different verbs to refer to the act of drawing, this is not a hard list.
     * Feel free to add or remove verbs as fit for your language.
     * 
     * Each verb can contain different forms of the same verb needed for the language, i.e. in English a verb
     * can have a past tense (drew), a present participle (drawing), and a past participle (drawn).
     * Keys of forms are used to be referenced in the string so it's recommended to be translated. You can 
     * declare as much verb forms as your language needs.
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
            draw: "Zug",
            draws: "Züge",
            drew: "zog",
            drawn: "gezogen",
            drawing: "ziehend",
        }/*,
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
        }*/
    },

    /** 
     * Common or uncategorized strings.
    */
    common: {
        title: "Eine Milliarde Freie {Draws}",
        title_rich: "<span class='number'>Eine Milliarde</span> Freie {Draws}",

        draw: "{Draw}",
        draw_inCooldown: "Auf Abklingzeit",
        draw_outOfDraws: "Keine {draws} mehr...",
        switch: {
            no: "Zu keine Faktion ändern",
            fire: "Zu Feuer Faktion ändern",
            water: "Zu Wasser Faktion ändern",
            leaf: "Zu Blatt Faktion ändern",
            sun: "Zu Sonne Faktion ändern",
            moon: "Zu Mond Faktion ändern",
        },
        skills: {
            active: "Aktiv",
        },

        new: "NEU!",

        hint_title: "Du hast {0} freie {draws}!",
        hint_desc: "Dieser großer “{Draw}” Knopf unten klicken um {drawing} anzufangen!",
        hint_ios_title: "Für die beste Erfahrung:",
        hint_ios_desc: "Presse {0} -> “Add to Home Screen” -> “Add”",
    },

    /** 
     * Strings for notification popups
    */
    notifs: {
        badge_earn: "Abzeichen erhaltet:",
        music_needsInteract: "Irgendwo anklicken um Hintergrundmusik anzufangen",
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
            cooldown: "Abklingzeit: {0}"
        },
        time: {
            second: "{0}s",
            minute: "{0}m",
            hour: "{0}st",
            day: "{0}t",
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
                nothing: "Sieht aus wie nichts da ist...",
            }
        },
        collection: {
            name: "Sammlung",
            filters: {
                type: {
                    regular: "Regulär",
                    legacy: "Vermächtnis",
                },
                rarity: {
                    any: "Irgendwelche Seltenheit",
                    n: "<rarity rarity='n'></rarity> Karten",
                    r: "<rarity rarity='r'></rarity> Karten",
                    sr: "<rarity rarity='sr'></rarity> Karten",
                    ssr: "<rarity rarity='ssr'></rarity> Karten",
                    ur: "<rarity rarity='ur'></rarity> Karten",
                    ex: "<rarity rarity='ex'></rarity> Karten",
                },
                faction: {
                    any: "Irgendwelche Faktion",
                    none: "Keine Faktion",
                    fire: "Feuer Faktion",
                    water: "Wasser Faktion",
                    leaf: "Blatt Faktion",
                    sun: "Sonne Faktion",
                    moon: "Mond Faktion",
                },
                pickit: {
                    off: "pick-it Premium abschalten",
                    on: "Erweiterbare Karten zeigen",
                },
                iris: {
                    info1: "Heir liegt die Nummern vorgestellt von irisVision:",
                    infoInHand: "Die linke Nummer zeigt die Menge von einzigartige Karten Variationen in dein Sammlung.",
                    infoInPool: "Die mittlere Nummer zeigt die Menge von einzigartige Karten Variationen die ihren Kondition gereicht haben um im Ziehepool oder Marktplatz zu erscheinen.",
                    infoInGame: "Die rechte Nummer zeigt die Menge von einzigartige Karten Variationen die in dieser Spielablauf verfügbar sind.",
                    info2: "Du kann Karte Filtern benutzen um diesen Nummern zu beeinflussen und Aktionen deduzieren zu nicht entdeckende Karten erhalten.",
                },
            }
        },
        marketplace: {
            name: "Marktplatz",
            subtabs: {
                meta: "Online Marktplatz",
                ingame: "In-Game Shop",
            },
            headers: {
                accountMarket: "Konto Marktplatz",
                exCards: "<rarity rarity='ex'></rarity> Karten",
                boosterPacks: "Booster Packs",
                cinema: "Absolute Cinema",
            },
            strings: {
                sellAccount: "Konto Adoption Dienst",
                sellAccount_desc: "Wir kaufen gacha Spiel Kontos für wettbewerbsfähig Preise!",
                sellAccount_gain: "Du wird bekommen:",
                sellAccount_gain_money: "{0}<br>Geld",
                sellAccount_gain_exp: "{0}<br>Erfahrungspunkte",
                sellAccount_req: "Benötigt {0} Karte {drawn}",
                sellAccount_action: "Konto verkaufen!",
                sellAccount_actionLocked: "Verschlossen",

                ad_title: "“Werbung” Booster",
                ad_effects: {
                    points_draw: "“Siehe” eine “Werbung” an und bekomme {x0:1} mehr Punkte für die nächste {1} {draws}!",
                    shreds_draw: "“Siehe” eine “Werbung” an und bekomme {x0:1} mehr Schnipseln für die nächste {1} {draws}!",
                    faction_draw: "“Siehe” eine “Werbung” an und bekomme {x0:1} mehr Faktion Power für die nächste {1} {draws}!",
                    energy_time: "“Siehe” eine “Werbung” an und bekomme passiv Massenenergie {x0:1} schneller für {1s}!",
                },
                ad_cooldown: "Neue “Werbungen” will verfügbar sein in {0}",
                ad_action: "“Werbung” “Ansehen”",
                ad_actionCooldown: "Auf Aufklingzeit",
                ad_reroll: "Offerte erneut rollen",
            },
        },
        infobook: {
            name: "Infobuch",
            subtabs: {
                stats: "Statistik",
                breakdown: "Aufschlüsselung",
                gallery: "Gallerie",
            },
            strings: {
                badges: "Abzeichen",
                story: "Geschichte",
            }
        },
        options: {
            name: "Einstellungen",
            subtabs: {
                prefs: "Vorlieben",
                saves: "Speicher",
                other: "Anderes"
            },
            headers: {
                prefs: {
                    i18n: "Lokalisierung & Datei Ausdruck",
                    logic: "Spiel Verhaltung",
                    video: "Visual & Nutzer Interface",
                    audio: "Audio"
                },
                saves: {
                    storage: "Speicher"
                },
                other: {
                    info: "Info",
                    bonus: "Bonus"
                },
            },
            items: {
                language: "Sprache",
                updateRate: "Aktualisierung Geschwindigkeit",
                confirm: "Bestätigung",
                notation: "Nummer Format",
                verb: "Verb",
                cardImages: "Karte Bild",
                cardSize: "Karte Größe",
                musicVolume: "HGM Lautstärke",
                localSave: "Lokal Speicher",
                cloudSave: "Cloudspeicher",
                info: "Info",
                otherOther: "Anderes anderes",
            },
            values: {
                updateRate: {
                    auto: "Automatisch",
                    perSec: "{0} TPS",
                },
                items: {
                    showConfirms: "Bestätigung Einstellungen Zeigen",
                    manualSave: "Manualle Speicher",
                    importExport: "Import/Export Speicher",
                    hardReset: "Feste Zurücksetzung",
                    checkSaves: "Speichern Checken",
                    about: "Über & Quelle",
                    john: "johnvertisement",
                },
                common: {
                    hidden: "Verschwinden",
                    shown: "Zeigen",
                    disabled: "Deaktiviert",
                    enabled: "Aktiviert",
                },
                notation: {
                    default: "Standard",
                    common: "Gewöhnlich",
                    scientific: "Wissenschaftlich",
                    engineering: "Techniknische",
                    si: "SI Präfixen",
                    alphabet: "Alphabet",
                    chinese: "Chinesisch",
                    korean: "Koreanisch",
                }
            },
            strings: {
                save_recent: "(spiel gespeichert)",
                save_timer: "(letzt gespeichert {0} vorher)",

                cloud_type_galaxy: "(zum galaxy verbindet)",
                cloud_loggedOut: "(Abgemeldet)",
                cloud_status_saving: "(speichern...)",
                cloud_status_loading: "(lädt...)",
                cloud_status_checking: "(checken...)",

                language_desc: "Sprachen außer Englisch sind vielleicht nicht 100% fertig oder richtig.",
                notation_desc: "Wie größe Nummer im Spiel ausgedruckt werden ändern. Die “Standard” Nummernform is von aktuellen Sprache basiert.",
                verb_desc: "Verb assoziiert mit {drawing} Karten ändern, in Plätzen wie das Spieltitel und Karte Beschreibungen.",
                john_note: "(Notiz: Links öffnen dieses Tab, ctrl+click um nicht versehentlich das Spiel schließen)",
            },
            popups: {
                confirm: {
                    title: "Bestätigung Einstellungen",
                    desc: "Frag mich für Bestätigung:",
                    types: {
                        sellAccount: "Wenn ich meine Konto verkaufe",
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
            title_error: "Fehler",

            desc_error: "Da war ein Fehler: {0}",
            desc_pleaseWait: "Bitte warte.",

            action_continue: "Weitergehen",
            action_close: "Schließen",
            action_reload: "Neu laden",
        },
        draw: {
            strings: {
                brand: "DTCGco.™",
                brand_full: "© DUDUCAT TRADING CARD GAME CO.",
                pack_title: "OMEGA KARTEN",
                pack_subtitle: "KARTENHANDEL SPEIL",
                pack_count: "PACKET VON<br>{0} KARTEN",
            },
        },
        drawLegacy: {
            title: "Wähle {0} aus",
        },
        currency: {
            strings: {
                amount_have: "(du hast {0})",
                amount_drawn: "(du has {0} {drawn})",
                speed_minute: "({0}/min)",
                toCap: "({0} bis maximum)",
                efficiency: "({0} effizienz)",
            }
        },
        confirm: {
            sellAccount: {
                title: "Wirklich Konto verkaufen?",
                desc1: "Du will wiederstarten mit einem neuen Konto, aber du wirst <b>Geld</b> and <b>Erfahrungspunkte</b> basiert auf deiner Erfolgreichen verdienen.",
                desc2: "<strong>Da gibt kein Zurückkaufen</strong>—das Spiel will speichen, wenn du deinem Konto verkaufst!",
                confirm: "Mich fragen nächsten mal ich meiner Konto verkaufe",

                list_lose: "Du wirst verlieren:",
                list_lose1: "Dein normale Kartensammlung ",
                list_lose2: "Punkte, Schnipseln, und Faktion Power",
                list_lose3: "Fähigkeiten und Nutzungsstatistik",

                list_gain: "Dur wirst bekommen:",
                list_gainMoney: "{0} Geld",
                list_gainExp: "{0} Erfahrungspunkte",


                action_no: "Nein, zurückgehen",
                action_yes: "Ja, Konto verkaufen",
            },
        },
        card: {
            factions: {
                fire: "(feuer faktion)",
                water: "(wasser faktion)", 
                leaf: "(blatt faktion)", 
                sun: "(sonne faktion)", 
                moon: "(mond faktion)", 
            },
            strings: {
                copies: "({0} extra kopien)",
                stars: "({0} sterne)",
                crown: "(gekronte karten)",
                level: "(level {0})",
                notOwned: "(karte noch nicht im Besitz)",

                level_title: "Erweitern",
                level_cost: "Erweitern Preis:",
                level_cant: "Dieser Karte kann nicht erweitert sein.",
                level_cant_max: "Maximum level erreicht.",
                level_cant_cost: "Nicht genug {0}.",
                level_prompt: "Clicken um erweitern.",
                level_button: "Upgrade",
                level_button_cant: "Kann nicht erweitern",
                level_button_max: "Maximum level erreicht",

                star_title: "Zusammenfügen",
                star_cost: "Zusammenfügung Preis:",
                star_cost_copies: "“{0}” extra Kopien",
                star_cant: "Dieser Karte kann nicht zusammengefügt werden.",
                star_cant_max: "Maximum Stern erreicht.",
                star_cant_cost: "Nicht genug Kopien.",
                star_prompt: "Clicke zu zusammenfügen.",
                star_button: "Zusammenfügen",
                star_button_cant: "Kann nicht zusammenfügen",
                star_button_max: "Maximum Stern erreicht",

                buy_cost: "Kaufpreis:",
                buy_prompt: "Clicke zu kaufen.",
                buy_button: "Kaufen",
                buy_button_cant: "Kann nicht kaufen",

                legacyDraw_prompt: "Clicke um dieser Karte zu auswählen",
                legacyDraw_button: "Auswählen",
            }
        },
        skill: {
            strings: {
                skill: "(Fähigkeit)",
                skill_locked: "Diese Fähigkeit ist verschlossen",

                action_activate: "Aktivieren",
                action_activated: "Aktiviert",
                action_inCooldown: "In Abklingzeit ({0})"
            }
        },
        pack: {
            buy_confirm: "Würdest du “{0}” kaufen?",
            perks: "Diese Booster Pack erhält:",
            
            buy_action_no: "Nein, zurückgehen",
            buy_action_yes: "Kaufen für {0}",

            strings: {
                pack: "(booster pack)",
            }
        },
        buff: {
            strings: {
                buff: "(stärkung)",
            }
        },
        ad: {
            strings: {
                sponsored: ["“Gesponsert”", "“Promotet”", "“werbung”"],
                taunts: {
                    generic: [
                        "Schließe diese Level ab um Werbung früh zu beenden",
                        "Ich kann die Rosafarbe nicht erreichen",
                        "Ich habe mein Seele verkauft um die Rosafarbe zu erreichen",
                        "Meist relaxierende Spiel",
                        "Schwerer als es aussieht",
                        "Du:"
                    ],
                    puzzle: [
                        "Wenn du dieses Rätsel macht, bist du rechtens toll",
                        "Wenn du dieses Rätsel macht, bist du rechtens erlaubt es früh zu schließen",
                        "Ich finde du kann diese Rätsel nicht lösen",
                        "Ich wette dieses Rätsel kannst du nicht lösen",
                        "Kann du dieses Rätsel lösen?",
                        "Ich habe mein Seele verkauft um dieses Level abzuschließen",
                    ],
                    completed: [
                        "Du hast es gemacht!",
                        "Toll!",
                        "Alles gute!",
                    ],
                }
            },

            action_close: "“Werbung” schließen",
            action_closeIn: "Schließen in {0}",
        },
        badge: {
            strings: {
                state_obtained: "(erhaltende Abzeichen)",
                state_locked: "(geschlossene Abzeichen)",

                lock_desc: "???",
            }
        },
        slideshow: {
            strings: {
                action_skip: "Ich lese all das nicht",
                action_next: "Nächste",
            }
        },
        save: {
            ie_title: "Import/Export Speicher",
            ie_desc1: "In den Textbox unten erhält du dein Speicherdatei. Dein Speicher kopieren und irgendwo sicher halten.",
            ie_desc2: "Alternativ, deiner Speicher einfügen und “Importieren von Textbox” um zu laden.",
            ie_action_save_text: "Kopieren zu Zwischenablage",
            ie_action_save_file: "Datei Herunterladen",
            ie_action_load_text: "Importieren von Textbox",
            ie_action_load_file: "Datei Hochladen",

            saved_title: "Spiel gespeichert",
            saved_desc: "Es ist jetzt sicher dieses Tab zu schließen",
            saved_noteLocal: "(Anmerkung: dieses Spiel auto-speichert einer Minute nach den letztes Speicher und bei spezifische Ereignisse, z.B. nach einer {draw} und nach Einstellungen verändert seien)",
            saved_noteCloud: "(Anmerkung: dieses Spiel auto-speichert zu Cloud 5 minuten nach den letztes Cloudspeicher)",
            saved_text_title: "Speicher kopiert",
            saved_text_desc: "Speicherdatei zu Zwischenablage kopiert",
            saved_file_title: "Speicher herunterladen...",
            saved_file_desc: "Speicherdatei herunterladen als “{0}”...",

            import_error: "Ungültige Speicher",
            import_error_desc: "Dieses Speicher erscheint als falsch oder korrupt. Lege fest das du den ganze Speichertext kopiert hat und das Speichertext nicht abgekürzt ist.",
            import_error_desc_ellipsis: "Auslassungspunkte im Speichertext entdeckt. Deiner Speicher wird vielleicht von der Browser oder das Betriebssystem abgekürzt. Du kann das Datei Herunterladen Option wählen für mehr Zuverlässigkeit.",

            import_confirm_title: "Dieses Speicher importieren?",
            import_confirm_desc: "Möchtest du dieses Speicher importieren? Deiner aktuelles Spiel wird überschreibt!",
            import_confirm_cloudcheck_title: "Ältere Cloudspeicher",
            import_confirm_cloudcheck_desc: "Das Cloudspeicher erscheint älter als die aktuelle Lokalspeicher. Möchtest du das Cloudspeicher importieren?",
            import_confirm_cloudavail_title: "Cloudspeicher ist verfügbar!",
            import_confirm_cloudavail_desc: "Ein Cloudspeicher is verfügbar. Möchtest du es importieren?",
            import_confirm_action_no: "Nein, zurückgehen",
            import_confirm_action_yes: "Ja, Speicherung importieren",

            reset_confirm_title: "Wirklich total zurücksetzen?",
            reset_confirm_desc1: "Diese Aktion wird <strong>DEIN SPEICHER TOTAL WEGWISCHEN.</strong> Du wirst zurück zum ganz Anfang des Spiels gehen mit <strong>KEIN BONUSEN ZURÜCKGEKRIEGT.</strong>",
            reset_confirm_desc2: "Das Spiel wird die aktuelles Speicherdatei zu Zwischenablage kopieren falls du deine Meinung verändert.",
            reset_confirm_action_no: "Nein, zurückgehen",
            reset_confirm_action_yes: "Ja, total zurücksetzen",

            busy_saving_cloud: "Speichert zu Cloud...",
            busy_import: "Speicher importieren...",
            busy_reset: "Total zurücksetzen...",
            busy_desc: "(das spiel wird in einen moment neu geladet, zwischen dem, schließe das spiel nicht)",

            error_cloudSaveCooldown: "Bitte 30 Sekunden warten zwischen Cloudspeichern.",
            error_cloudCheckCooldown: "Bitte 30 Sekunden warten zwischen Cloudspeicherchecken.",
            error_copy1: "Ein Fehler ist erscheint während das Kopieren von das Speichertext zu Zwischenablage.",
            error_copy2: "Du kann dein Speichertext von den Textbox noch manuell kopieren indem du den ganzen Text auswählt und es kopiert.",
            error_loggedOut: "Du bist nicht angemeldet. Bitte melde sich an um Cloudspeicherfunktionen zu benutzen.",

            opt_keepPrefs: "Einstellungen behalten",
            opt_keepPrefs_noteReset: "(Anmerkung: Einstellungen die zu ein Entsperrbar verbunden sind wird zu Standard zurückgesetzt)",
            opt_keepPrefs_noteImport: "(Anmerkung: Einstellungen die zu ein Entsperrbar verbunden sind wird zu Standard zurückgesetzt ob solche Entsperrbarren nicht im neuen Speicher erscheinen)",
        },
        about: {
            blabs: [
                "(weil wir uns nicht von freier {draw} nummern aufblasen weglassen kann)",
                "(weil wir uns nicht von freier {draw} nummern bewerben weglassen kann)",
                "(kein-herunterladen spiel mit innovativen netz technologien)",
                "(so generös als ein gacha spiel sein könnte)",
                "(und du dachte ein-tausend-ish war zu viel)",
                "<marquee>(schau mamma, ich bin ein &lt;marquee&gt; tag!)</marquee>",
                "(ehrlich ein bulktastic spiel)",
            ],
            strings: {
                game: "Spiel von {0}",
                openSource: "Dieses Spiel is unter <b>MIT License</b> lizenziert",
                viewLicense: "Lizenz ansehen",
                viewSource: "Quellcode ansehen",
                libs: "Büchereien benutzt:",
                music: "Musik von {0}",
                music_foot: "(ach, das ist ich)",
                icons: "Symbole von variierende quellen, gegeben von {0}",
                footer: "(wird dieses spiel as parodie zählen und dann als faire verwendung berichtigt?<br>weiß nicht, ich bin nicht anwalt)",
                thanks: "Vielen dank zu:",
                thanks1: "Alle die Mobilspiel Werbungen",
                thanks1_foot: "(für die Inspiration)",
            }
        },
        endgame: {
            title: "Herzlichen Glückwunsch",
            strings: {
                body1: "Du hast alle die Abzeichen verdient und dann das Spiel abgeschlossen! Sei bereit für neues Inhalt!",
                body2: "Inzwischen, du kannst {0} oder Kontos weiterspielen.",
                body2_link0: "meine andere sachen versuchen",
                time: "Spielzeit: {0}",
            }
        },
        offline: {
            title: "Willkommen zurück!",
            desc_time: "Du war für {0} weg.",
            desc_timeReduced: "(reduziert zu {0} von offline Fortschritt)",
            desc_event: "Während du weg war:",
            events: {
                nothing: "Nichts besonders interessant hat passiert...",
                energy: "Massenenergie von {0} zu {1} verändert",
                cooldown: "{Draw} Abklingzeit von {0} zu {1} verändert",
                skillCooldown: "“{0}” Abklingzeit von {1} zu {2} verändert",
                skillStack: "“{0}” Menge von {1} zu {2} verändert",
                pickitTime: "pick-it Zeit von {0} zu {1} verändert",
                adCooldown: "“Werbung” Booster Abklingzeit von {0} zu {1} verändert",
            }
        },
        sell: {
            decor: {
                username: "Benutzername",
                password: "Passwort",
                accountSelling: "Konto verkaufen...",
                accountSold: "Konto verkauft.",
                accountNew: "Neues Konto herstellen...",
                accountLogIn: "Anmelden...",
            },
        },
        sellResult: {
            title: "Konto Zusammenfassung",
            pointHeaders: {
                obtained: "Erhält",
            },
            points: {
                money: "{0} Geld",
                exp: "{0} Erfahrungspunkte",
                legacyDraw: "{0} Vermächtniskarten",
            },
            action_continue: "Neues Konto erstellen",
        },
        complete: {
            strings: {
                title: "Spiel abgeschlossen!",
                line1: "Du hast erfolgreich alle von deinen ein Billiarden freie {draws} benutzt!",
                line2: "Es hat nur {0} gebraucht.",
                line3: "Hier ist das Ende für jetzt, du kann für ein Aktualisierung waten oder du kann zu Einstellungen -> Total Zurücksetzen um das Spiel nochmal spielen.",
            }
        },
    },

    /** 
     * Strings related to currencies, such as their names or quote texts.
    */
    currencies: {
        cards: {
            name: "Karten",
            left: "Karten übrig",
            quote: "Produziert für die allmächtigen Omega Cards Spiel, diese Karten sich wirklich Gutscheine um mehr Geld zu ausgeben um mehr Karten zu {draw}... nachdem du alle deiner ein Billiarden freie {draws} benutzt hat, zumindest. Sie sind zu fröhlich Leute Billiarden von freie {draws} zu spenden, tatsächlich, alle sind",
        },
        energy: {
            name: "Massenenergie",
            quote: "Benutzt als Omega Cards Loyalität Programm Währung um dich erlaubt mehrere Karten {draws} an einmal einhandeln",
        },
        points: {
            name: "Punkte",
            quote: "Die meist generische Währung des Welts. Es ist generisch genug zu irgendwelche Anwendungsfall gewiesen werden könnte",
        },
        shreds: {
            name: "Schnipseln",
            quote: "Reste von übrigen Karten, zu Atomen reduziert. Diese Karten halten fast kein Handelswert (außer die wenige <rarity rarity='ex'></rarity> Karten), so Leute erfinden neue Methode die zu nutzen, z.B. sie zerfetzen um als neues Erweiterungswährung",
        },
        fire: {
            name: "Feuerpower",
            quote: "Power von den Feuer Faktion. Machen halten dieses entdeckung die höchste menschliche Leistung",
        },
        water: {
            name: "Wasserpower",
            quote: "Power von den Wasser Faktion. Erinnerst dich immer Wasser zu trinken",
        },
        leaf: {
            name: "Blattpower",
            quote: "Power von den Blatt Faktion. Du fühlst sich um ein mit die Natur zu sein",
        },
        sun: {
            name: "Sonnenpower",
            quote: "Power von den Sonne Faktion. Wird auch angenommen als die Fähigkeit Luft zu kontrollieren",
        },
        moon: {
            name: "Mondpower",
            quote: "Power von den Mond Faktion. Wird auch angenommen als die Fähigkeit Erde zu kontrollieren",
        },

        money: {
            name: "Geld",
            quote: "Es ist wie die meist generische Währung des Welts, aber du kann es echt nutzen! So fast wie alles dass echt Wert hat hat auch die Beteiligung von Geld!... Preisinflation und die Reduktion von Kaufkraft? Was ist das?",
        },
        exp: {
            name: "Erfahrungspunkte",
            quote: "Die Menge von Wissen du von Gachaspiele gesammelt hat. Um es mehr realistisch zu machen, wir haben auf dir erwartet dass du wirklich jeder kleines Stück des Spiels lernst geplant, aber alles in das Welt ist so zu Spiel gemacht dass mit Inkrementellspielmechanik sogar dies ist als greifbar, messbar, und verbrauchsfertig Währung behandelt",
        },
    },

    /** 
     * Strings related to cards, such as their names or quote texts.
    */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "Keine Belohnungen?",
                    desc: "Keine Wirkung.",
                    quote: "Die Option die mit 99% Wahrscheinlichkeit ausgewählt sei programmiert ist"
                },
                n1: {
                    name: "Ein einziges Punkt",
                    desc: "Erhalte {+0} Punkte pro {draw}.",
                    quote: "ここにいる"
                },
                n2: {
                    name: "Halb ein Punkt",
                    desc: "Erhalte zufällig Null bis {+0} Punkte pro {draw}.",
                    quote: "Um was ein halbes Punkt ist zu erklären, müssen wir parallele Universen besprechen"
                },
                n3: {
                    name: "Kartenpack",
                    desc: "{+0} Grundmenge. Grundmenge vergrößert die Menge von {draws} dass du auf einmal machen kann.",
                    quote: "Nja, ob du alle von die ein Billiarden Karten {draws} du muss anfangen mehrere auf einmal zu {drawing}, weißt du?"
                },
                n4: {
                    name: "Selbst-Vergrößernde Packen",
                    desc: "{+0} Massenpower. Massenpower generiert passiv Massenenergie.",
                    quote: "Inkrementellspiele, auch bewusst als Leerlaufspiele"
                },
                n5: {
                    name: "Größere Packen",
                    desc: "{+0} Massenenergiegrenze. Massenenergieproduktionen über die Grenze sind reduziert.",
                    quote: "Jetzt kannst du echt leerlaufen"
                },
                n6: {
                    name: "Schere",
                    desc: "{+0%} Packenbremsgeschwindigkeit.",
                    quote: "Wenn du es noch nicht mitbekommen hast, du kann clicken um packen schneller zu öffnen"
                },
                n7: {
                    name: "Schnelle Lieferungen",
                    desc: "{+0%} Packenabklingszeitgeschwindigkeit.",
                    quote: "Schneller auffüllen mit unsere schnelle Lieferungen — appliziert zu alle Bestellungen 1 Karte oder mehr!",
                },
                c1: {
                    name: "In-Game Shop",
                    desc: "Schalte der Marktplatz frei.",
                    quote: "Karten die nicht durch {drawing} gefunden werden finden, and probably spend all of your money trying to out-bid the highest bidder"
                }
            },
            r: {
                n0: {
                    name: "Epische Zerfetzenmaschine",
                    desc: "{+0%} shred multiplier.",
                    quote: "Instead of using a small shredder made for the offices, why not use those industrial ones made for ASMR videos on the internet?"
                },
                n0b: {
                    name: "Tolle Zerfetzenmomenten",
                    desc: "{+0%} Schnipselmultiplikator.",
                    quote: "Es sieht doch aus als ob Leute im Internet sachen in kleine Stücke zerfetzen schauen lieben! Du kriegst mit dass du deine Epische Zerfetzenmaschine Karten aufnehmen kann und zu PipeTube hochladen um etwas süße, süße Werbeeinnahmen bekommen im prozess"
                },
                n1: {
                    name: "Punktmultiplikator",
                    desc: "{+0%} Punktmultiplikator.",
                    quote: "Jeder Inkrementellspiel verbraucht irgendwelches form von exponentielles Wachstum, eine generische Wahrung verbraucht ein generische Multiplikatorerweiterung"
                },
                n1b: {
                    name: "Punktpresse",
                    desc: "{+0%} Punktmultiplikator.",
                    quote: "Presse sonstige Schnipseln zu Punkte. Das ist auch genau wie gesetzliche Punkte produziert wird, Leute werden nicht die Differenz erkennen kann"
                },
                n2: {
                    name: "Massenkartenpacken",
                    desc: "{+0%} Grundmenge, aber {+1%} Abklingzeitlauf.",
                    quote: "So mehr massig, so besser"
                },
                n3: {
                    name: "Kartenöffnungsfabrik",
                    desc: "{+0%} Massenpower, aber {+1%} Abklingzeitlauf.",
                    quote: "Produziert größe Nummern von Kartenöffnungen"
                },
                n3b: {
                    name: "Recycling",
                    desc: "{+0%} Massenpower.",
                    quote: "Wiederwendung von Karten um mehr Karten zu öffnen ist echt ein gutes Idee"
                },
                n3c: {
                    name: "Komposter",
                    desc: "{+0%} Massenenergiegrenze.",
                    quote: "Recycle noch härter mit dieses Komposter gemacht um ein tonnenweise Schnipsel von Karten zu produzieren"
                    //Pun translation courtesy of ChatGPT
                    //Prompt:
                    /*
                    I am translating this card description to german
                    Recycle even harder with this composter designed to make a metric-scrap-ton of cards
                    And I am wondering if there is any way to include the pun while preserving the scrap part of it.
                    The scrap part of the pun is referring to an in game currency named shreds,
                    I have been calling shreds Schnipsel in german and the process of shredding them zerfetzen
                     */
                    //1/4/2025
                },
                n4: {
                    name: "Ausdauertraining",
                    desc: "{+0%} Kartenmultiplikator, aber {+1%} Abklingzeitlauf und Packenöffnungszeitlauf.",
                    quote: "Die Kartenpacken haben jetzt ein bisschen Ausdauertraining! Jetzt sind sie schwerer zu öffen, aber die Inhalte sind mehr!"
                },
                n4b: {
                    name: "Umdrehenangriff",
                    desc: "{+0%} Kartenaufdeckengeschwindigkeit.",
                    quote: "Umkehrkarte, blockieren, ziehe 4"
                },
                n5a: {
                    name: "Trending",
                    desc: "{+0} Grundfeuerpowererhaltung.",
                    quote: "ah,<br>das ist heiß,<br>..., das ist heiß"
                },
                n5b: {
                    name: "Ozean",
                    desc: "{+0} Grundwasserpowererhaltung.",
                    quote: "i'm blue da be dee da be die"
                },
                n5c: {
                    name: "Wald",
                    desc: "{+0} Grundblattpowererhaltung.",
                    quote: "team trees für den sieg"
                },
                n5d: {
                    name: "Luft",
                    desc: "{+0} Grundsonnenpowererhaltung.",
                    quote: "fühl das atmen"
                },
                n5e: {
                    name: "Erde",
                    desc: "{+0} Grundmondpowererhaltung.",
                    quote: "es ist unsere heimat"
                },
                n6a: {
                    name: "Gebuttertes Popcorn",
                    desc: "{+0:1} Grundpunktboost von “Werbung” Booster.",
                    quote: "Warte, du sagst mir leute genießen echt Werbungen schauen!?"
                },
                n6b: {
                    name: "Karamell Popcorn",
                    desc: "{+0:1} Grundschnipselboost von “Werbung” Booster.",
                    quote: "Süßes Geschmack für dein süßes Werbeeinnahme"
                },
                n6c: {
                    name: "Schokopopcorn",
                    desc: "{+0:1} Grundfaktionpower boost von “Werbung” Booster.",
                    quote: "Schmutziges Geschmack für dein schmutziges Werbeeinnahme"
                },
                c1: {
                    name: "System 2",
                    desc: "Schalte die Infobook frei. Schaue deine Statistik und andere sachen, aber durch ein Preis...",
                    quote: "Erm ackstually 🤓"
                }
            },
            sr: {
                n0: {
                    name: "Perfekt Allgemein Karte",
                    desc: "{+0%} Punkt Multiplikator.",
                    quote: "Ein perfekt allgemein Karte das die perfekt allgemein Wahrung boostet, die Allgemeinheit bekommt zu perfekt zu handeln"
                },
                n1: {
                    name: "Eine Paar Punkte",
                    desc: "Erhört das Level in den Effekt von <b><rarity rarity='n'></rarity> Ein Einziges Punkt</b> durch {^0:1}",
                    quote: "Das heißt eine Linie"
                },
                n2: {
                    name: "Dice Extractor",
                    desc: "Erhört das Level in den Effekt von <b><rarity rarity='n'></rarity> Halb ein Punkt</b> durch {^0:1}",
                    quote: "Lass die Pips auf der Würfel dich leiten"
                },
                n3: {
                    name: "Kartenlager",
                    desc: "{+0%} Massenenergiegrenze.",
                    quote: "Mit dieser Tempo verbrauchst du ein größeres Zimmer um alle deine Karten zu lagern"
                },
                n4a: {
                    name: "Feuerpowermeisterschaft",
                    desc: "{+0%} Feuerpower, Blattpower, und Punkterhaltung.",
                    quote: "Ja, unsere Kommentare für diesen <rarity rarity='sr'></rarity> Karten sind wirklich copy-und-paste voneinander, glaubst du nicht das jeder Gachaspiel das macht?"
                },
                n4b: {
                    name: "Wasserpowermeisterschaft",
                    desc: "{+0%} Wasserpower, Feuerpower, und Punkterhaltung.",
                    quote: "Ja, unsere Kommentare für diesen <rarity rarity='sr'></rarity> Karten sind wirklich copy-und-paste voneinander, glaubst du nicht das jeder Gachaspiel das macht?"
                },
                n4c: {
                    name: "Blattpowermeisterschaft",
                    desc: "{+0%} Blattpower, Wasserpower, und Punkterhaltung.",
                    quote: "Ja, unsere Kommentare für diesen <rarity rarity='sr'></rarity> Karten sind wirklich copy-und-paste voneinander, glaubst du nicht das jeder Gachaspiel das macht?"
                },
                n4d: {
                    name: "Sonnenpowermeisterschaft",
                    desc: "{+0%} Sonnenpower, Mondpower, und Punkterhaltung.",
                    quote: "Ja, unsere Kommentare für diesen <rarity rarity='sr'></rarity> Karten sind wirklich copy-und-paste voneinander, glaubst du nicht das jeder Gachaspiel das macht?"
                },
                n4e: {
                    name: "Mondpowermeisterschaft",
                    desc: "{+0%} Mondpower, Sonnenpower, und Punkterhaltung.",
                    quote: "Ja, unsere Kommentare für diesen <rarity rarity='sr'></rarity> Karten sind wirklich copy-und-paste voneinander, glaubst du nicht das jeder Gachaspiel das macht?"
                },
                n5a: {
                    name: "Schnellfeuer",
                    desc: "{/0:2} <b>Platzen</b> Abklingzeit.",
                    quote: "Braucht mehr dakka"
                },
                n5b: {
                    name: "Tieffrieren",
                    desc: "{/0:2} <b>Frierenabfall</b> Abklingzeit.",
                    quote: "Fast-absolut Null"
                },
                n5c: {
                    name: "NPK",
                    desc: "{/0:2} <b>Dünger</b> Abklingzeit.",
                    quote: "Warum nur ein wenn du alle machen kann_"
                },
                n5d: {
                    name: "Sommer",
                    desc: "{/0:2} <b>Photosynthesis</b> Abklingzeit.",
                    quote: "Standfolge nicht dabei"
                },
                n5e: {
                    name: "Kolleg",
                    desc: "{/0:2} <b>Vereinfachung</b> Abklingzeit.",
                    quote: "Berichtet Studenten über kritisches Denken"
                },
                n6a: {
                    name: "Seltener Werbungen",
                    desc: "“Werbung” Booster Stärkungen basiert auf Ziehennummer dauern {0%} länger.",
                    quote: "Scheinbar da gibt ein Grenze auf wie viel wir Werbungen zu Speiler zeigen könnten bevor es kontraproduktiv wird und weg von unsere Spiel leiten. Vielleicht probieren wie die Reduktion von die Frequenz das Spieler Werbungen schauen?"
                },
                n6b: {
                    name: "Längere Werbungboosts",
                    desc: "“Werbung” Booster Stärkungen basiert auf Zeit dauern {0%} länger.",
                    quote: "Wir können jetzt von Speiler von die “Watch ads for 10 seconds of boost” games aussaugen"
                },
                c1: {
                    name: "pick-it",
                    desc: "Schalte die Fähigkeit frei um Karten bei spezifische Kriterien zu ordnen.",
                    quote: "Mit pick-it™ du kann Karten sortieren und filtern nach alle die Kriterien das du denken könntest!... außer die sortieren nach Popularität, das verbraucht ein monatliche Abonnierung"
                }
            },
            ssr: {
                n0: {
                    name: "Hauptgerat",
                    desc: "{+0%} Kartenmultiplikator.",
                    quote: "Du hast jetzt die Hälfte von deine Ziehen (logarithmisch) erreicht! Wenn du dieses Spiel magst, bitte "
                },
                n0b: {
                    name: "Abfall",
                    desc: "{x0} Schnipselerhaltung von <rarity rarity='r'></rarity> Karten und besser.",
                    quote: "quak"
                },
                n0c: {
                    name: "Pyrit",
                    desc: "{x0} Schnipselerhaltung von <rarity rarity='sr'></rarity> Karten und besser.",
                    quote: "Obwohl es „Katzengold“ ist, es kann immer noch als Zutat für die <rarity rarity='sr'></rarity> Karten"
                },
                n0d: {
                    name: "Diamant",
                    desc: "{x0} Schnipselerhaltung von <rarity rarity='ssr'></rarity> Karten und besser.",
                    quote: "Diamanten sind echt häufig weil da schon Entdeckungen auf wie man sie von Kohle fusionieren, aber die Geräte sind so teuer das sich vielleicht als die Spielzeuge von reiche Leute erhalten sei"
                },
                n1a: {
                    name: "Galaxie",
                    desc: "Bekomme mehr Punkte basiert auf die Menge Sterne in deiner Sammlung (gekronte Karten zählen als {0} Sterne pro Karte).<br>(Jetzt: {1} Sterne ⇒ {+2%} Punktbekommen)",
                    quote: "Es war einmal vor langer Zeit in einer weit, weit entfernten Galaxis..."
                },
                n1b: {
                    name: "Königliche Kram",
                    desc: "Bekomme mehr Schnipseln basiert auf die Menge gekronte Karten in deiner Sammlung.<br>(Jetzt: {0} gekronte Karten ⇒ {+1%} Schnipselbekommen)",
                    quote: "Mehr wertvoll als normale Kram"
                },
                n1b2: {
                    name: "Fotoalbum",
                    desc: "Bekomme mehr Schipseln basiert auf die Menge Abzeichen in deiner Sammlung.<br>(Jetzt: {0} Abzeichen ⇒ {+1%} Schnipselbekommen)",
                    quote: "Ach die Erinnerungen"
                },
                n1c: {
                    name: "Extra Punkten",
                    desc: "Bekomme mehr Punkte basiert auf die Menge <rarity rarity='ex'></rarity> Karten in deiner Sammlung.<br>(Jetzt: {0} <rarity rarity='ex'></rarity> Karten ⇒ {+1%} Punktbekommen)",
                    quote: "Mehr Punkte scheidet niemand, oder?"
                },
                n1d: {
                    name: "Zukunftrechner",
                    desc: "Bekomme mehr Punkte basiert auf die Menge Statistik Einträge in deiner Sammlung.<br>(Jetzt: {0} Einträge ⇒ {+1%} Punktsammlung)",
                    quote: "1 ^ 2 + 3 = 4"
                },
                n1d2: {
                    name: "Black Fridays",
                    desc: "Bekomme mehr Punkte basiert auf die Menge Level-Ups gemacht mit pick-it Premium.<br>(Jetzt: {0} Mal ⇒ {+1%} Punktbekommen)",
                    quote: "Kaufen sie während die Angebot noch da ist"
                },
                n1e: {
                    name: "Seltsam KI-Generiert Schachbrettfußboden damit Realität zu Befragen",
                    desc: "Bekomme mehr Schnipseln basiert auf die Menge Fähigkeitreaktionen gemacht.<br>(Jetzt: {0} Reaktionen ⇒ {+1%} Schnipselbekommen)",
                    quote: "Alle von diese technologische Erweiterungen, nur für das"
                },
                n2: {
                    name: "“Nein” sagen Lizenz",
                    desc: "Erlaubt die neu generieren von die jetzige Werbung, mit dem Preis von {0%} des Abklingzeits ({1s}).",
                    quote: "Es ist nicht so schwer"
                },
                s_fire: {
                    name: "Explosion",
                    desc: "Schalte die <b>Explosion</b> Fähigkeit frei.",
                    quote: "Wer hat Explosionszauber im Verlies schon wieder benutzt!?"
                },
                s_fire_1: {
                    name: "Mega Explosion",
                    desc: "<b>Explosion</b> Fähigkeit überspringt eine weitere {+0s} pro Auslösung.",
                    quote: "Jetzt mit fliegende Farben"
                },
                s_fire_2: {
                    name: "Explosionsmeisterschaft",
                    desc: "<b>Explosion</b> skill gains an additional {+0s} time skip per trigger every time you use this skill.<br>(Currently: {1} times ⇒ {+2s} time skip)",
                    quote: "*particle accelerator noises*"
                },
                s_water: {
                    name: "Einfrierungsfall",
                    desc: "Schalte die <b>Einfrierungsfall</b> Fähigkeit frei.",
                    quote: "Willst du ein Schneemann bauen?"
                },
                s_water_1: {
                    name: "Langsam, aber Stetig",
                    desc: "{+0%} bonus Kartenmultiplikator während <b>Einfrierungsfall</b> aktiv ist.",
                    quote: "Besser langsam damit sicher zu sein"
                },
                s_water_2: {
                    name: "Gipfel des Berges",
                    desc: "Du ziehst {+1%} mehr Karten wenn Energie begrenzt ist während <b>Einfrierungsfall</b> aktiv ist.<br>{+0%} <b>Einfrierungsfall</b> Energiegrenze Boost.",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "Düngemittel",
                    desc: "Schalte die <b>Düngemittel</b> Fähigkeit frei.",
                    quote: "Schneller Bäumen meint schneller Papier meint schneller Schnipseln"
                },
                s_leaf_1: {
                    name: "Ernähren",
                    desc: "Erhöhe den Multiplikatoreffekt von <b>Düngemittel</b> mit {x0:1}.",
                    quote: "Kümmer sich um die Bäumen"
                },
                s_sun: {
                    name: "Fotosynthese",
                    desc: "Schalte die <b>Fotosynthese</b> Fähigkeit frei.",
                    quote: "The sun is a not-so-deadly lazer"
                },
                s_sun_1: {
                    name: "Extra Licht",
                    desc: "Erhöhe den Buff und Debuff von <b>Photosynthesis</b> mal {+0%}.",
                    quote: "Ist das ein Blendgranate?"
                },
                s_moon: {
                    name: "Vereinfachung",
                    desc: "Schalte die <b>Vereinfachung</b> Fähigkeit frei.",
                    quote: "Kann nicht alle diese Währungen halten"
                },
                s_moon_1: {
                    name: "Abstrahieren",
                    desc: "Erhöhe den Buff von <b>Vereinfachung</b> mal {+0%} aber auch die Debuff mal {+1%}.",
                    quote: "Dieses Karte hat so viel Abstrahiert dass ich nicht ein echtes Flavour-Text schreiben kann"
                },
                s_moon_2: {
                    name: "Abstrahieren^2",
                    desc: "Erhöhe den effektive level von den Buff von <rarity rarity='ssr'></rarity><b> Abstrahieren</b> mal {^0:1}.",
                    quote: "Nja, dieses auch"
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
