/** @type {typeof i18nDefault} */
i18nStrings.zh = {
    /** Name of the language, in that language. Don't translate the word "English" to your language. */
    name: "简体中文",
    /** The number notation to use as the default with the language. */
    notation: "chinese",
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
            draw: "抽",
            draws: "抽卡",
            drew: "抽了",
            drawn: "抽到",
            drawing: "抽取",
        },
        pull: {
            draw: "拉",
            draws: "拉",
            drew: "拉了",
            drawn: "拉到",
            drawing: "拉取",
        },
        summon: {
            draw: "召唤",
            draws: "召唤",
            drew: "召唤了",
            drawn: "召唤到",
            drawing: "召唤",
        },
        roll: {
            _anim: "spin",
            draw: "重掷",
            draws: "重掷",
            drew: "重掷了",
            drawn: "重掷到",
            drawing: "重掷",
        },
        spin: {
            _anim: "spin",
            draw: "旋转",
            draws: "旋转",
            drew: "旋转了",
            drawn: "旋转到",
            drawing: "旋转",
        },
        gacha: {
            draw: "扭蛋",
            draws: "扭蛋",
            drew: "扭了",
            drawn: "扭到",
            drawing: "扭蛋",
        }
    },

    /**
     * Common or uncategorized strings.
     */
    common: {
        title: "万亿免费{draw}",
        title_rich: "<span class='number'>一万亿</span>次免费{draws}",

        draw: "{draws}",
        draw_inCooldown: "冷却中",
        draw_outOfDraws: "没有更多{draws}了...",
        switch: {
            no: "切换到无阵营",
            fire: "切换到火阵营",
            water: "切换到水阵营",
            leaf: "切换到叶阵营",
            sun: "切换到日阵营",
            moon: "切换到月阵营",
        },
        skills: {
            active: "激活",
        },

        new: "新!",

        hint_title: "你有{0}次免费{draws}！",
        hint_desc: "点击下方这个大“{drawing}”按钮开始{draws}吧！",
        hint_ios_title: "获得最佳体验：",
        hint_ios_desc: "点击{0} -> “添加到主屏幕” -> “添加”",
    },

    /**
     * Strings for notification popups
     */
    notifs: {
        badge_earn: "获得徽章：",
        music_needsInteract: "点击任意位置启用背景音乐",
    },

    /**
     * Strings related to formatting.
     */
    format: {
        joiner: {
            currency: "{0}{1}",
        },
        marks: {
            quote: "“{0}”",
        },
        skill: {
            cooldown: "冷却时间：{0}"
        },
        time: {
            second: "{0}秒",
            minute: "{0}分钟",
            hour: "{0}小时",
            day: "{0}天",
            joiner: "{1}{0}",
        },
        chance: {
            fraction: "{1}中的{0}",
            percent: "{0}%"
        }
    },

    /**
     * Strings related to tabs' contents.
     */
    tabs: {
        common: {
            strings: {
                nothing: "看起来这里什么都没有...",
            }
        },
        collection: {
            name: "收藏",
            filters: {
                type: {
                    regular: "普通",
                    legacy: "传承",
                },
                rarity: {
                    any: "任意稀有度",
                    n: "<rarity rarity='n'></rarity> 卡牌",
                    r: "<rarity rarity='r'></rarity> 卡牌",
                    sr: "<rarity rarity='sr'></rarity> 卡牌",
                    ssr: "<rarity rarity='ssr'></rarity> 卡牌",
                    ur: "<rarity rarity='ur'></rarity> 卡牌",
                    ex: "<rarity rarity='ex'></rarity> 卡牌",
                },
                faction: {
                    any: "任意阵营",
                    none: "无阵营",
                    fire: "火阵营",
                    water: "水阵营",
                    leaf: "叶阵营",
                    sun: "日阵营",
                    moon: "月阵营",
                },
                pickit: {
                    off: "关闭挑卡助手高级版",
                    on: "显示可升级卡牌",
                },
                iris: {
                    info1: "这里是虹彩视觉提供的数字:",
                    infoInHand: "左侧的数字表示有多少不同的卡片已经被你抽出了。",
                    infoInPool: "中间的数字表示有多少不同的卡片已经满足条件，可以被抽出或在商店内买到了。",
                    infoInGame: "右侧的数字表示有多少不同的卡片可以在本局游戏中被抽出。",
                    info2: "你可以使用卡片的过滤器来影响这些数字，从而推理出取得仍未发现的卡片所需的行动。",
                },
            }
        },
        marketplace: {
            name: "市场",
            subtabs: {
                meta: "线上市场",
                ingame: "游戏内商店",
            },
            headers: {
                accountMarket: "账号交易所",
                exCards: "<rarity rarity='ex'></rarity> 卡牌",
                boosterPacks: "助力包",
                cinema: "绝对神作影院",
            },
            strings: {
                sellAccount: "账号收购服务",
                sellAccount_desc: "我们以极具竞争力的价格购买抽卡游戏账户！",
                sellAccount_gain: "你将获得:",
                sellAccount_gain_money: "{0}<br>金钱",
                sellAccount_gain_exp: "{0}<br>经验",
                sellAccount_req: "需要{drawn}{0}张卡片 ",
                sellAccount_action: "出售账号！",
                sellAccount_actionLocked: "锁定",

                ad_title: "“广告” 加速",
                ad_effects: {
                    points_draw: "“看” 一个 “广告” 来为接下来的{1}{draws}获取{x0:1}倍更多点数！",
                    shreds_draw: "“看” 一个 “广告” 来为接下来的{1}{draws}获取{x0:1}倍更多碎片！",
                    faction_draw: "“看” 一个 “广告” 来为接下来的{1}{draws}获取{x0:1}倍更多阵营之力！",
                    energy_time: "“看” 一个 “广告” 来为接下来的{1s}获取{x0:1}倍更多批量能量！",
                },
                ad_cooldown: "新的 “广告” 在 {0} 后可用",
                ad_action: "“看” “广告”",
                ad_actionCooldown: "冷却中",
            },
        },
        infobook: {
            name: "信息册",
            subtabs: {
                stats: "统计数据",
                breakdown: "详细分析",
                gallery: "画廊",
            },
            strings: {
                badges: "徽章",
                story: "故事",
            }
        },
        options: {
            name: "选项",
            subtabs: {
                prefs: "偏好设置",
                saves: "存档管理",
                other: "其他"
            },
            headers: {
                prefs: {
                    i18n: "本地化 & 存档数据",
                    logic: "游戏行为",
                    video: "图像 & UI",
                    audio: "声音"
                },
                saves: {
                    storage: "保存"
                },
                other: {
                    info: "信息",
                    bonus: "其他"
                },
            },
            items: {
                language: "语言",
                updateRate: "图像更新频率",
                confirm: "确定弹窗",
                notation: "数字格式",
                verb: "动词",
                cardImages: "卡牌图像",
                cardSize: "卡牌大小",
                musicVolume: "背景音乐音量",
                localSave: "本地存档",
                cloudSave: "云存档",
                info: "信息",
                otherOther: "其他其他",
            },
            values: {
                updateRate: {
                    auto: "自动",
                    perSec: "{0} TPS",
                },
                items: {
                    showConfirms: "打开确定弹窗设置",
                    manualSave: "手动保存",
                    importExport: "导入/导出存档",
                    hardReset: "硬重置",
                    checkSaves: "检查存档",
                    about: "关于与鸣谢",
                    john: "约翰广告",
                },
                common: {
                    hidden: "隐藏",
                    shown: "显示",
                    disabled: "禁用",
                    enabled: "启用",
                },
                notation: {
                    default: "默认(跟随语言)",
                    common: "通用",
                    scientific: "科学计数法",
                    engineering: "工程计数法",
                    si: "SI(国际单位制)",
                    alphabet: "字母",
                    chinese: "中文",
                    korean: "韩文",
                }
            },
            strings: {
                save_recent: "(游戏已保存)",
                save_timer: "(上次保存于{0}前)",

                cloud_type_galaxy: "(已连接到galaxy)",
                cloud_loggedOut: "(已登出)",
                cloud_status_saving: "(保存中...)",
                cloud_status_loading: "(加载中...)",
                cloud_status_checking: "(检查中...)",

                language_desc: "因为该游戏频繁更新，除了英语的其他语言可能没有100%跟上进度，完成的翻译也可能充满机翻风味。中文翻译来源于chen-assert与ajchen（",
                notation_desc: "更改在游戏中大数的显示方式。 “默认”显示方式基于当前语言。",
                verb_desc: "更改与{drawing}卡牌相关的动词，如游戏标题和物品描述中的动词。",
                john_note: "(注意：链接将在此标签页中打开，按住Ctrl点击可避免意外关闭游戏)",
            },
            popups: {
                confirm: {
                    title: "确定弹窗设置界面",
                    desc: "当...时询问我是否确定:",
                    types: {
                        sellAccount: "出售账号时",
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
            title_error: "错误",

            desc_error: "发生错误：{0}",
            desc_pleaseWait: "请稍等。",

            action_continue: "继续",
            action_close: "关闭",
            action_reload: "刷新",
        },
        draw: {
            strings: {
                brand: "DTCGco.™",
                brand_full: "© DUDUCAT TRADING CARD GAME CO.",
                pack_title: "欧米伽卡牌",
                pack_subtitle: "集换式卡牌游戏",
                pack_count: "{0}<br>张卡牌包",
            },
        },
        drawLegacy: {
            title: "选 {0} 张",
        },
        currency: {
            strings: {
                amount_have: "(你拥有{0})",
                amount_drawn: "(你已{drawn} {0})",
                speed_minute: "({0}/分钟)",
                toCap: "(距离上限还有{0})",
                efficiency: "({0}效率)",
            }
        },
        confirm: {
            sellAccount: {
                title: "真的要出售账号吗？",
                desc1: "你将以一个新的账号重新开始游戏， 但你将获得 <b>金钱</b> 与 <b>经验</b> 。",
                desc2: "<strong>你不能买回你的账号</strong>——游戏将在你出售账号时保存！",
                confirm: "下次我想要出售账号的时候也询问我",

                list_lose: "你将失去：",
                list_lose1: "你的普通卡片收集进度",
                list_lose2: "点数，碎片和阵营的货币",
                list_lose3: "技能与技能的统计数据",

                list_gain: "你将获得:",
                list_gainMoney: "{0} 金钱",
                list_gainExp: "{0} 经验",


                action_no: "不，回去",
                action_yes: "好，出售账号",
            },
        },
        card: {
            factions: {
                fire: "(火阵营)",
                water: "(水阵营)",
                leaf: "(叶阵营)",
                sun: "(日阵营)",
                moon: "(月阵营)",
            },
            strings: {
                copies: "({0}额外副本)",
                stars: "({0}星)",
                crown: "(皇冠卡牌)",
                level: "(等级{0})",
                notOwned: "(尚未拥有此卡牌)",

                level_title: "升级",
                level_cost: "升级费用：",
                level_cant: "此卡牌无法升级。",
                level_cant_max: "已达到最高等级。",
                level_cant_cost: "{0}不足。",
                level_prompt: "点击升级。",
                level_button: "升级",
                level_button_cant: "无法升级",
                level_button_max: "已达最高等级",

                star_title: "融合",
                star_cost: "融合费用：",
                star_cost_copies: "“{0}”额外副本",
                star_cant: "此卡牌无法融合。",
                star_cant_max: "已达到最高星级。",
                star_cant_cost: "副本不足。",
                star_prompt: "点击融合。",
                star_button: "融合",
                star_button_cant: "无法融合",
                star_button_max: "已达最高星级",

                buy_cost: "购买需要：",
                buy_prompt: "点击以购买。",
                buy_button: "购买",
                buy_button_cant: "无法购买",

                legacyDraw_prompt: "点击以挑选这张卡片",
                legacyDraw_button: "挑",
            }
        },
        skill: {
            strings: {
                skill: "(技能)",
                skill_locked: "此技能已锁定",

                action_activate: "激活",
                action_activated: "已激活",
                action_inCooldown: "冷却中({0})"
            }
        },
        pack: {
            buy_confirm: "你想要购买 “{0}” 吗？",
            perks: "这个助力包内含：",
            
            buy_action_no: "不，回去",
            buy_action_yes: "以 {0} 的价格购买",

            strings: {
                pack: "（助力包）",
            }
        },
        buff: {
            strings: {
                buff: "(buff)",
            }
        },
        ad: {
            strings: {
                sponsored: ["“赞助”", "“宣传”", "“广告”"],
                taunts: {
                    generic: [
                        "完成这一关来提前结束广告",
                        "我打不到粉色",
                        "我为了打到粉色出售了我的灵魂",
                        "最令人放松的游戏！",
                        "比看起来的要难",
                        "你："
                    ],
                    puzzle: [
                        "如果你能解开这个谜题，你就是合法的老司机了",
                        "如果你能解开这个谜题，你就可以合法的提前关闭这个广告了",
                        "我不认为你能完成谜题",
                        "我敢打赌你完不成这个谜题",
                        "你能完成这个谜题吗？",
                        "我把魂儿都搭进去了才解出来",
                    ],
                    completed: [
                        "你做到了！",
                        "厉害！",
                        "恭喜！",
                    ],
                }
            },

            action_close: "关闭“广告”",
            action_closeIn: "“广告”剩余 {0}",
        },
        badge: {
            strings: {
                state_obtained: "(已获得徽章)",
                state_locked: "(锁定徽章)",

                lock_desc: "???",
            }
        },
        slideshow: {
            strings: {
                action_skip: "我才不看那么多",
                action_next: "下一步",
            }
        },
        save: {
            ie_title: "导入/导出存档",
            ie_desc1: "下方文本框包含你的存档数据。复制你的存档并保存在安全的地方。",
            ie_desc2: "或者，将你的存档粘贴到此处并点击“从文本框导入”来加载存档。",
            ie_action_save_text: "复制到剪贴板",
            ie_action_save_file: "下载文件",
            ie_action_load_text: "从文本框导入",
            ie_action_load_file: "上传文件",

            saved_title: "游戏已保存",
            saved_desc: "你现在可以安全的关闭该标签页了。",
            saved_noteLocal: "注意：本游戏会在上次保存后一分钟自动保存，以及在某些事件后（如{draw}后和更改设置时）自动保存",
            saved_noteCloud: "(注意：本游戏会在上次云存档后5分钟自动保存到云端)",
            saved_text_title: "已复制存档",
            saved_text_desc: "存档数据已复制到剪贴板。",
            saved_file_title: "正在下载存档...",
            saved_file_desc: "存档数据正在下载为“{0}”...",

            import_error: "无效存档",
            import_error_desc: "此存档似乎不正确或已损坏。请确保你已复制完整的存档字符串且存档字符串未被截断。",
            import_error_desc_ellipsis: "在存档字符串中检测到省略号。你的存档可能已被浏览器或操作系统截断。你可以使用下载文件选项来创建更可靠的备份。",

            import_confirm_title: "导入此存档？",
            import_confirm_desc: "你想导入此存档吗？你当前的游戏将被覆盖！",
            import_confirm_cloudcheck_title: "较旧的云存档",
            import_confirm_cloudcheck_desc: "云端的存档似乎比当前本地存档更旧。你想导入云存档吗？",
            import_confirm_cloudavail_title: "云存档可用！",
            import_confirm_cloudavail_desc: "有可用的云存档。你想导入它吗？",
            import_confirm_action_no: "不，返回",
            import_confirm_action_yes: "是，导入存档",

            reset_confirm_title: "确定要硬重置吗？",
            reset_confirm_desc1: "此操作将<strong>完全清除你的存档</strong>。你将回到游戏的最开始，<strong>且没有任何奖励</strong>。",
            reset_confirm_desc2: "游戏将复制当前存档数据到你的剪贴板，以备你改变主意。",
            reset_confirm_action_no: "不，返回",
            reset_confirm_action_yes: "是，硬重置",

            busy_saving_cloud: "正在保存到云端...",
            busy_import: "正在导入存档...",
            busy_reset: "正在硬重置...",
            busy_desc: "(游戏将在片刻后重新加载，请勿在此过程中关闭游戏)",

            error_cloudSaveCooldown: "请在云存档之间等待30秒。",
            error_cloudCheckCooldown: "请在云存档检查之间等待30秒。",
            error_copy1: "尝试将存档字符串复制到剪贴板时出错。",
            error_copy2: "你仍然可以通过选择文本框中的所有文本并复制来手动复制你的存档字符串。",
            error_loggedOut: "你尚未登录。请登录以访问云存档功能。",

            opt_keepPrefs: "保留偏好设置",
            opt_keepPrefs_noteReset: "(注意：与可解锁内容绑定的偏好设置将重置为默认值)",
            opt_keepPrefs_noteImport: "(注意：如果新存档中不存在与可解锁内容绑定的偏好设置，这些设置将重置为默认值)",
        },
        about: {
            blabs: [
                "(因为我们忍不住要夸大免费{draw}次数)",
                "(因为我们忍不住要宣传免费{draw}次数)",
                "(采用尖端网络技术，无需下载的游戏)",
                "(一款尽可能慷慨的扭蛋游戏)",
                "(你还以为一千多次已经很多了)",
                "<marquee>(妈妈快看，我在&lt;marquee&gt;标签里！)</marquee>",
                "(真是一款『量』惊四座的游戏)",
            ],
            strings: {
                game: "游戏由{0}制作",
                openSource: "这个游戏使用 <b>MIT License</b> 开源",
                viewLicense: "打开许可证",
                viewSource: "打开源代码",
                libs: "使用的库：",
                music: "音乐由{0}制作",
                music_foot: "(嘿，那是我)",
                icons: "图标来自通过{0}的各种来源",
                footer: "(这能因为是恶搞游戏而避免法律纠纷吗？<br>不到啊，我又不是律师)",
                thanks: "特别感谢：",
                thanks1: "所有的手机游戏广告",
                thanks1_foot: "(作为灵感来源)",
            }
        },
        offline: {
            title: "欢迎回来！",
            desc_time: "你离线了 {0} 。",
            desc_timeReduced: "(减少至 {0} 的离线进度)",
            desc_event: "在你不在的时候：",
            events: {
                nothing: "没什么有意思的事发生过...",
                energy: "批量能力从 {0} 变为 {1}",
                cooldown: "抽卡冷却从 {0} 变为 {1}",
                skillCooldown: "“{0}” 的冷却从 {1} 变为 {2}",
                skillStack: "“{0}” 的层数从 {1} 变为 {2}",
                pickitTime: "挑卡助手的时间从 {0} 变为 {1}",
                adCooldown: "“广告”加成的冷却从 {0} 变为 {1}",
            }
        },
        sell: {
            decor: {
                username: "用户名",
                password: "密码",
                accountSelling: "出售账号中...",
                accountSold: "账号已出售。",
                accountNew: "创建新账号中...",
                accountLogIn: "登入中...",
            },
        },
        sellResult: {
            title: "账户统计",
            pointHeaders: {
                obtained: "取得",
            },
            points: {
                money: "{0} 金钱",
                exp: "{0} 经验",
                legacyDraw: "{0} 传承卡片",
            },
            action_continue: "创建新账号",
        },
        complete: {
            strings: {
                title: "游戏完成！",
                line1: "你已成功用完了一万亿次免费{draws}！",
                line2: "你只用了{0}就做到了。",
                line3: "目前游戏到此结束，你可以等待更新或前往设置->硬重置来重新开始游戏。",
            }
        },
    },

    /**
     * Strings related to currencies, such as their names or quote texts.
     */
    currencies: {
        cards: {
            name: "卡牌",
            left: "剩余卡牌",
            quote: "为伟大的欧米伽卡牌游戏制作，这些卡牌实际上是让你在用完一万亿次免费卡牌{draws}后花更多钱来{draw}更多卡牌的诱饵...至少在你真的{drew}那么多之前。他们对发放万亿次免费{draws}的热情过头了，现在所有人都被这套路洗脑了",
        },
        energy: {
            name: "批量能量",
            quote: "用作欧米茄卡的忠诚计划货币，让你能一次性兑换多次{draws}",
        },
        points: {
            name: "点数",
            quote: "世界上最通用的货币。它足够通用，可以被分配给任何可以想象的用途",
        },
        shreds: {
            name: "碎片",
            quote: "多余卡牌的残余，已被分解成原子。多余的卡牌几乎没有交易价值(除了少数<rarity rarity='ex'></rarity>卡牌)，所以人们正在发明新的使用方法，比如将它们粉碎，当作新的升级货币",
        },
        fire: {
            name: "火之力",
            quote: "来自火阵营的力量。有些人认为发现这个是人类最伟大的成就",
        },
        water: {
            name: "水之力",
            quote: "来自水阵营的力量。总会贴心地提醒你多喝热水",
        },
        leaf: {
            name: "叶之力",
            quote: "来自叶阵营的力量。你感觉自己与自然融为一体",
        },
        sun: {
            name: "日之力",
            quote: "来自日阵营的力量。也被认为拥有控制空气的能力",
        },
        moon: {
            name: "月之力",
            quote: "来自月阵营的力量。也被认为拥有控制大地的能力",
        },

        money: {
            name: "金钱",
            quote: "这就像是世界上最通用的货币，但居然能在现实中使用！现实中几乎任何有价值的东西都离不开钱的参与！...物价上涨和购买力下降？那是什么？",
        },
        exp: {
            name: "经验",
            quote: "你通过玩抽卡游戏积累的知识量。我们原本计划让它更真实——指望你真正掌握游戏的每个细节——但如今世界上的一切都被增量游戏机制异化了，连这种东西都变成了可量化、可测量、可消耗的货币了",
        },
    },

    /**
     * Strings related to cards, such as their names or quote texts.
     */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "无奖励？",
                    desc: "无效果。",
                    quote: "那个被编程为99%几率被抽中的选项"
                },
                n1: {
                    name: "单个点",
                    desc: "每次{draw}获得{+0}点数。",
                    quote: "ここにいる(我在这里)"
                },
                n2: {
                    name: "半个点",
                    desc: "每次{draw}随机获得零到{+0}点数。",
                    quote: "要解释半个点是什么，我们需要讨论平行宇宙-"
                },
                n3: {
                    name: "卡包",
                    desc: "{+0}基础批量。基础批量增加你一次性{draws}的数量。",
                    quote: "嘛，如果你想用完那一万亿次卡牌{draws}，你需要开始一次{drawing}多张，知道吧？"
                },
                n4: {
                    name: "自填充包",
                    desc: "{+0}批量功率。批量功率被动生成批量能量。",
                    quote: "增量游戏，也被称为放置游戏"
                },
                n5: {
                    name: "更大包装",
                    desc: "{+0}批量能量上限。超过能量上限的批量能量生产会减慢。",
                    quote: "这次你可以真正地放置了"
                },
                n6: {
                    name: "剪刀",
                    desc: "{+0%}卡包拆解速度。",
                    quote: "如果你还没注意到，你可以在卡包正在拆解时点击它来加快拆解的速度"
                },
                n7: {
                    name: "快速配送",
                    desc: "{+0%}冷却速度。",
                    quote: "使用全新极速配送服务，补货更快——适用于单笔1张及以上的所有订单！",
                },
                c1: {
                    name: "游戏内商店",
                    desc: "解锁市场。",
                    quote: "寻找无法通过{drawing}获得的卡牌，然后大概会为了压过最高出价者花光所有积蓄"
                }
            },
            r: {
                n0: {
                    name: "史诗粉碎机",
                    desc: "{+0%}碎片倍率。",
                    quote: "既然能用办公室的小碎纸机，为什么不用网络ASMR视频里那种工业级的大家伙呢？"
                },
                n0b: {
                    name: "精彩粉碎时刻",
                    desc: "{+0%}碎片倍率。",
                    quote: "显然网友就爱看东西被粉碎！你发现可以录下史诗粉碎机的工作过程，上传到'管管视频'赚点甜甜的广告分成"
                },
                n1: {
                    name: "点数倍增器",
                    desc: "{+0%}点数倍率。",
                    quote: "每个增量游戏都需要指数级增长，通用货币也需要通用的倍增升级"
                },
                n1b: {
                    name: "货币印刷机",
                    desc: "{+0%}点数倍率。",
                    quote: "把你的碎片压制成点数。法定点数也是这么造的——人们根本看不出区别"
                },
                n2: {
                    name: "更大卡包",
                    desc: "{+0%}基础批量，但{+1%}抽卡冷却时间。",
                    quote: "越大越好"
                },
                n3: {
                    name: "卡牌开启工厂",
                    desc: "{+0%}批量功率，但{+1%}抽卡冷却时间。",
                    quote: "生产大量卡牌开启器"
                },
                n3b: {
                    name: "回收利用",
                    desc: "{+0%}批量功率。",
                    quote: "把抽到的卡牌回收了继续抽——仔细想想还挺环保？"
                },
                n3c: {
                    name: "堆肥机",
                    desc: "{+0%}批量能量上限。",
                    quote: "用这台能处理公吨级废卡的堆肥机回收的更大力一点"
                },
                n4: {
                    name: "耐力训练",
                    desc: "{+0%}卡牌倍率，但{+1%}抽卡冷却时间和卡包拆解时间。",
                    quote: "卡包接受了一些耐力训练！现在它们更难拆开，但内容物更多了！"
                },
                n4b: {
                    name: "反转牌",
                    desc: "{+0%}卡牌揭示速度。",
                    quote: "反转，跳过，抽四张"
                },
                n5a: {
                    name: "热门趋势",
                    desc: "{+0}基础火之力获取。",
                    quote: "啊，<br>这太火了，<br>...太火了 <br>（译注：详见BV1Pt411q7VV）"
                },
                n5b: {
                    name: "海洋",
                    desc: "{+0}基础水之力获取。",
                    quote: "我是蓝色哒叭嘀哒叭哒<br>（译注：详见BV11bsMepEop）"
                },
                n5c: {
                    name: "森林",
                    desc: "{+0}基础叶之力获取。",
                    quote: "为树木队打call<br>（译注：详见BV1QE411b71h）"
                },
                n5d: {
                    name: "空气",
                    desc: "{+0}基础日之力获取。",
                    quote: "感受呼吸"
                },
                n5e: {
                    name: "大地",
                    desc: "{+0}基础月之力获取。",
                    quote: "这是我们共同的家园"
                },
                n6a: {
                    name: "黄油爆米花",
                    desc: "{+0:1}“广告”的基础点数增幅。",
                    quote: "等会，你是说真的有人爱看广告！？"
                },
                n6b: {
                    name: "焦糖爆米花",
                    desc: "{+0:1}“广告”的基础碎片增幅。",
                    quote: "用甜蜜滋味换你的甜蜜广告收益"
                },
                n6c: {
                    name: "巧克力爆米花",
                    desc: "{+0:1}“广告”的基础阵营力量增幅。",
                    quote: "用脏手滋味换你的脏脏广告收益"
                },
                c1: {
                    name: "系统2",
                    desc: "解锁信息册。查看你的统计数据和其他内容，不过需要付出代价...",
                    quote: "呃，实际上 🤓"
                }
            },
            sr: {
                n0: {
                    name: "完美通用卡",
                    desc: "{+0%}点数倍率。",
                    quote: "一张完美通用的卡牌，提升完美通用的货币，这种通用性已经完美到令人发指"
                },
                n1: {
                    name: "一对点",
                    desc: "提升<b><rarity rarity='n'></rarity> 单个点</b>效果的等级{^0:1}",
                    quote: "两点连一线"
                },
                n2: {
                    name: "骰子提取器",
                    desc: "提升<b><rarity rarity='n'></rarity> 半个点</b>效果的等级{^0:1}",
                    quote: "让骰子上的点数指引你"
                },
                n3: {
                    name: "卡牌仓库",
                    desc: "{+0%}批量能量上限。",
                    quote: "照这个速度，你很快得专门租个仓库来堆放这些卡牌了"
                },
                n4a: {
                    name: "火之力精通",
                    desc: "{+0%}火之力、叶之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实全是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4b: {
                    name: "水之力精通",
                    desc: "{+0%}水之力、火之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实全是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4c: {
                    name: "叶之力精通",
                    desc: "{+0%}叶之力、水之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实全是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4d: {
                    name: "日之力精通",
                    desc: "{+0%}日之力、月之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实全是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4e: {
                    name: "月之力精通",
                    desc: "{+0%}月之力、日之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实全是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n5a: {
                    name: "速射模式",
                    desc: "{/0:2} <b>爆发</b>冷却时间。",
                    quote: "俺寻思火力还得再猛点"
                },
                n5b: {
                    name: "深度冻结",
                    desc: "{/0:2} <b>冻结滴落</b>冷却时间。",
                    quote: "接近绝对零度"
                },
                n5c: {
                    name: "NPK",
                    desc: "{/0:2} <b>肥料</b>冷却时间。",
                    quote: "小孩子才做选择，我全都要"
                },
                n5d: {
                    name: "夏季",
                    desc: "{/0:2} <b>光合作用</b>冷却时间。",
                    quote: "不含沙滩福利剧情"
                },
                n5e: {
                    name: "大学",
                    desc: "{/0:2} <b>简化</b>冷却时间。",
                    quote: "教导学生批判性思维"
                },
                n6a: {
                    name: "减少广告频率",
                    desc: "基于抽卡次数的“广告”增益效果持续时间延长{0%}。",
                    quote: "显然我们之前给玩家狂塞广告是有上限的——多到一定程度反而会把人吓跑。或许我们该减少让玩家看广告的频率？"
                },
                n6b: {
                    name: "延长广告增益",
                    desc: "基于时间的“广告”增益效果持续时间延长{0%}。",
                    quote: "现在我们可以从那些'看广告得10秒增益'的游戏那里挖玩家了"
                },
                c1: {
                    name: "挑卡助手",
                    desc: "解锁按条件筛选卡牌的功能。",
                    quote: "使用挑卡助手™，您可以按任何能想到的条件筛选和排序卡片！...除了按卡片人气排序功能，那个需要订阅会员"
                }
            },
            ssr: {
                n0: {
                    name: "最后冲刺",
                    desc: "{+0%}卡牌倍率。",
                    quote: "你已经抽了卡片的一半了（对数地）！如果你喜欢，请务必点赞并订阅以获取更多类似内容"
                },
                n0b: {
                    name: "废料",
                    desc: "{x0}从<rarity rarity='r'></rarity>及以上卡牌获得的碎片。",
                    quote: "嘎嘎"
                },
                n0c: {
                    name: "黄铁矿",
                    desc: "{x0}从<rarity rarity='sr'></rarity>及以上卡牌获得的碎片。",
                    quote: "尽管它是“愚人金”，但仍可作为<rarity rarity='sr'></rarity>卡牌的材料"
                },
                n0d: {
                    name: "钻石",
                    desc: "{x0}从<rarity rarity='ssr'></rarity>及以上卡牌获得的碎片。",
                    quote: "因为已经可以从煤炭中合成钻石了，实际钻石上相当常见。但合成钻石的设备太昂贵了，钻石仍被视为富人的玩具"
                },
                n1a: {
                    name: "星系",
                    desc: "根据你卡牌收藏中的总星数获得更多点数(皇冠卡牌每张算作{0}星)。<br>(当前：{1}星 ⇒ {+2%}点数获取)",
                    quote: "在一个遥远的星系中..."
                },
                n1b: {
                    name: "皇家垃圾",
                    desc: "根据你收藏中的皇冠卡牌总数获得更多碎片。<br>(当前：{0}张皇冠卡牌 ⇒ {+1%}碎片获取)",
                    quote: "比普通垃圾更有价值"
                },
                n1b2: {
                    name: "相册",
                    desc: "根据你获得的徽章数量获得更多碎片。<br>(当前：{0}个徽章 ⇒ {+1%}碎片获取)",
                    quote: "啊，这些回忆"
                },
                n1c: {
                    name: "额外点数",
                    desc: "根据你收藏中的<rarity rarity='ex'></rarity>卡牌总数获得更多点数。<br>(当前：{0}张<rarity rarity='ex'></rarity>卡牌 ⇒ {+1%}点数获取)",
                    quote: "更多点数不会有坏处，对吧？"
                },
                n1d: {
                    name: "未来计算器",
                    desc: "根据你解锁的统计条目总数获得更多点数。<br>(当前：{0}个条目 ⇒ {+1%}点数获取)",
                    quote: "1 ^ 2 + 3 = 4"
                },
                n1d2: {
                    name: "黑色星期五",
                    desc: "基于挑卡助手尊享版触发的升级次数获得更多点数<br>(当前: {0} 次 ⇒ 点数获取+{1%})",
                    quote: "趁着促销还没结束赶快买买买！"
                },
                n1e: {
                    name: "质疑现实的奇怪的AI生成的棋盘地板",
                    desc: "根据你完成的技能反应次数获得更多碎片。<br>(当前：{0}次反应 ⇒ {+1%}碎片获取)",
                    quote: "所有的技术进步，就为了这个"
                },
                s_fire: {
                    name: "爆发",
                    desc: "解锁<b>爆发</b>技能。",
                    quote: "谁又在地下城里使用爆炸魔法了！？"
                },
                s_fire_1: {
                    name: "超级爆发",
                    desc: "<b>爆发</b>技能每次触发额外跳过{+0s}。",
                    quote: "现在带有绚丽色彩"
                },
                s_fire_2: {
                    name: "爆炸精通",
                    desc: "<b>爆发</b>技能每次使用时，每次触发额外获得{+0s}时间跳过。<br>(当前：{1}次 ⇒ {+2s}时间跳过)",
                    quote: "*粒子加速器噪音*"
                },
                s_water: {
                    name: "冻结滴落",
                    desc: "解锁<b>冻结滴落</b>技能。",
                    quote: "你想堆个雪人吗？"
                },
                s_water_1: {
                    name: "慢而稳",
                    desc: "<b>冻结滴落</b>激活时{+0%}卡牌倍率。",
                    quote: "慢一点更有把握"
                },
                s_water_2: {
                    name: "山顶",
                    desc: "<b>冻结滴落</b>激活且达到能量上限时{+1%}卡牌倍率。<b>冻结滴落</b>的能量上限提升效果加强{+0%}。",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "肥料",
                    desc: "解锁<b>肥料</b>技能。",
                    quote: "更快的树木意味着更快的纸张意味着更快的碎片"
                },
                s_leaf_1: {
                    name: "培育",
                    desc: "增加<b>肥料</b>的倍率效果{x0:1}。",
                    quote: "照顾好树木"
                },
                s_sun: {
                    name: "光合作用",
                    desc: "解锁<b>光合作用</b>技能。",
                    quote: "太阳是一个不那么致命的激光"
                },
                s_sun_1: {
                    name: "额外光照",
                    desc: "增加<b>光合作用</b>的增益和减益效果{+0%}。",
                    quote: "这是闪光弹吗？"
                },
                s_moon: {
                    name: "简化",
                    desc: "解锁<b>简化</b>技能。",
                    quote: "都拿不下这么多货币"
                },
                s_moon_1: {
                    name: "抽象化",
                    desc: "增加<b>简化</b>的增益{+0%}但同时增加其减益{+1%}。",
                    quote: "这张卡牌已经被抽象到我甚至懒得为它写一个合适的风味文本"
                },
                s_moon_2: {
                    name: "抽象化^2",
                    desc: "提升<rarity rarity='ssr'></rarity><b>抽象化</b>增益效果的有效等级{^0:1}。",
                    quote: "是的，这张也一样"
                }
            },
            ur: {
                n0: {
                    name: "妈",
                    desc: "{+0%}基础批量、批量功率、能量上限和卡牌倍率。<br>{+1%}碎片获取。<br>{x2}点数获取。",
                    quote: "<rarity rarity='ur'></rarity>妈强化得太狠，成了游戏中最强的单位<br>（译注：原文<rarity rarity='ur'></rarity> mom谐音your mom）"
                },
                n1a: {
                    name: "多重发射",
                    desc: "允许叠加<b>爆发</b>技能，最多同时叠{0}层。",
                    quote: "一息三千六百转"
                },
                n1a1: {
                    name: "吸收",
                    desc: "{+0%}<b>爆发</b>技能的时间跳跃和技能冷却时间。",
                    quote: "更慢，但是更强"
                },
                n1a0: {
                    name: "尘归尘，卡归卡",
                    desc: "启用火阵营时增加{+0%}的卡牌倍率。",
                    quote: "用树木的灰烬给卡牌附魔，我们怎么没早点想到这个？"
                },
                n1b: {
                    name: "沉睡游戏",
                    desc: "当<b>冻结滴落</b>激活时，增加批量功率{+0%}，但减少<b>爆发</b>的时间跳过量相同的百分比。",
                    quote: "等等，这不是一开始的意思吗？"
                },
                n1b0: {
                    name: "防水卡",
                    desc: "启用水阵营时增加{+0%}的卡牌倍率。",
                    quote: "现在卡牌再也不会被水泡坏了———想想这能从洪水手里拯救多少的卡牌收藏吧！"
                },
                n1c1: {
                    name: "优中选种",
                    desc: "<b>肥料</b>还会{+0%}皇冠卡牌的碎片获取。",
                    quote: "对于种子的优中选优。让最好的种子胜出！"
                },
                n1c2: {
                    name: "电解质",
                    desc: "<b>肥料</b>还会{+0%}基础碎片获取。",
                    quote: "植物渴望的电解质（广告腔）"
                },
                n1c0: {
                    name: "家庭树苗作坊",
                    desc: "启用草阵营时增加{+0%}的卡牌倍率。",
                    quote: "把马里兰森林带回家"
                },
                n1d: {
                    name: "粘性卡牌",
                    desc: "在<b>光合作用</b>激活时{drawn}的阵营卡牌有{0%}几率自我复制。",
                    quote: "其实就是两张卡粘成一张啦，不过为什么这里会有这么多？"  
                },
                n1d0: {
                    name: "超亮炫彩卡纸",
                    desc: "启用日阵营时增加{+0%}的卡牌倍率。",
                    quote: "采用难以置信的99.9999%国际认证亮面处理以打造太阳系最闪亮的卡牌，保证让您的卡片成为本恒星系最耀眼的存在！"
                },
                n1e: {
                    name: "协同作用",
                    desc: "<b>简化</b>的基础增益效果获得<rarity rarity=n></rarity><b>卡包</b>效果的{^0:1}。<br>(当前：{+1})",
                    quote: "天哪，这是synergism的哏吗？？？？？"
                },
                n1e0: {
                    name: "至暗深渊墨水",
                    desc: "启用月阵营时增加{+0%}的卡牌倍率。",
                    quote: "Vantablack在这墨水面前都相形见绌"
                }
            },
            ex: {
                zip: {
                    name: "StackRAR",
                    desc: "在{draw}视图中将重复卡牌分组，尽管压缩会使你的卡牌显示速度减半。同时移除最大<span class='number'>100</span>批量{draw}限制。",
                    quote: "请注意，StackRAR不是免费卡牌。在40天试用期后，你必须购买许可证或从你的收藏中销毁此卡牌"
                },
                shred: {
                    name: "粉碎机",
                    desc: "无用的重复卡牌会被粉碎成一种叫做碎片的新货币，包括皇冠卡牌和最高星级卡牌。",
                    quote: "假装什么都没发生过"
                },
                offline: {
                    name: "真·挂机",
                    desc: "允许批量能量在离线时也继续增长，但{0}分钟离线后进度将被削减。",
                    quote: "工作忙到窒息？我这有张为你量身定制的卡片..."
                },
                faction: {
                    name: "用烂了的阵营系统",
                    desc: "解锁阵营。使用阵营{draws}获取阵营货币和特定阵营的卡牌。<br>注意：阵营货币有时会害羞地躲着不出现。",
                    quote: "很久以前，五大阵营和谐共处。直到烈火阵营发动攻击，一切都变了。"
                },
                pickit: {
                    name: "挑卡助手尊享版",
                    desc: "解锁尊享版排序功能：按最低升级成本排序并过滤不可升级卡，但有时限。",
                    quote: "直达您想看的内容，毫无阻碍。挑卡助手尊享版将拓宽并深化您的阅卡体验。"
                },
                autobuy: {
                    name: "自动购买器",
                    desc: "当挑卡助手尊享版激活时，每秒自动升级场上首张可升级卡片{0}次。",
                    quote: "这才叫不负责任的消费"
                },
                iris: {
                    name: "虹彩视觉",
                    desc: "解锁在收藏页面查看卡牌收集进度的能力。",
                    quote: "虹彩视觉的工作原理是通过搜索游戏的在线数据库来显示卡池中所有可用卡牌。你*当然可以*直接在网上查这些信息，但那样就享受不到<rarity rarity='ssr'></rarity>皇家垃圾之类的卡牌带来的加成了..."
                },
                skills: {
                    name: "连击",
                    desc: "解锁主动技能。(技能仍需通过阵营{drawing}获得相应卡牌解锁。)",
                    quote: "↑↑↓↓←→←→BA"
                },
                skills2: {
                    name: "无咒语魔法包",
                    desc: "解锁减少技能冷却时间的卡牌。",
                    quote: "你知道吗，无咒魔法这玩意越早学就越简单？"
                }
            }
        },
        standard_legacy: {
            n: {
                n0: {
                    name: "更华丽的点",
                    desc: "{+0%}点数获取。",
                    quote: "现在你的点可以戴帽子了！戴帽子的点比平常的点价值更高"
                },
                n1: {
                    name: "军工级碎纸机",
                    desc: "{+0%}碎片获取。",
                    quote: "专为粉碎绝密卡牌设计，真正实现毁尸灭迹！碎的越碎，碎片越多！"
                },
                n2: {
                    name: "祖传血统",
                    desc: "{+0%}所有阵营的货币获取。",
                    quote: "我才知道我爸是一个非常受人尊敬的欧米茄卡片玩家"
                },
                n2a: {
                    name: "烈焰卷轴",
                    desc: "火之力获取{+0%}",
                    quote: "第二章第十八节：<br>你的身体会以体内热能的形式辐射魔力。"
                },
                n2b: {
                    name: "潮涌卷轴",
                    desc: "水之力获取{+0%}",
                    quote: "第二章第二十一节：<br>把脚泡在水里。你感觉到了凉吗？那是因为水是所有物质中吸收魔力最快的。"
                },
                n2c: {
                    name: "青翠卷轴",
                    desc: "叶之力获取{+0%}",
                    quote: "第二章第二十七节：<br>感受脚下大地的脉动。再微小的颤动也值得关注。"
                },
                n2d: {
                    name: "耀光卷轴",
                    desc: "日之力获取{+0%}",
                    quote: "第二章第三十二节：<br>试着构想一个人人向往的理想世界。"
                },
                n2e: {
                    name: "宁月卷轴",
                    desc: "月之力获取{+0%}",
                    quote: "第二章第三十六节：<br>闭上眼，屏蔽周遭声响，感受灵魂深处的宁静。"
                },
                n3: {
                    name: "灵力获取器",
                    desc: "{+0%} 所有阵营的力量获取几率。",
                    quote: "从远古空间获取灵力"
                },
                n4: {
                    name: "新手卡牌包",
                    desc: "{+0}基础批量.<br>{+0}卡牌倍率。",
                    quote: "显然你需要一个更好的方式来开启集卡之旅！...你要不要考虑购买这个新手豪华礼包呢？"
                },
            },
            ex: {
                legacy: {
                    name: "欧米茄卡传承",
                    desc: "解锁可在账户间转移的传承卡牌。当你获得此卡或出售账户时，可从 {1} 张传承卡中选择 {0} 张加入收藏。",
                    quote: "将此卡撕成碎片。从至少1.5米外把碎片抛向游戏区域。碎片碰到的所有东西都将永久归你所有。把卡牌和众人同时投来的怪异目光收集起来，放进你的抽牌堆底部。"
                },
                zip: {
                    name: "7Stack",
                    desc: "在{draw}视图中将重复卡牌分组。 将 <rarity rarity='ex'></rarity> <b>StackRAR</b> 卡从商店移除。",
                    quote: "都第41天了"
                },
                pickit: {
                    name: "卡牌套房",
                    desc: "直接解锁 <rarity rarity='sr'></rarity> <b>挑卡助手</b> 和 <rarity rarity='ex'></rarity> <b>虹彩视觉</b> 的卡牌筛选与进度查看功能，但这两张卡牌将不再出现在游戏中。",
                    quote: "公告：这个广受欢迎的生活质量改善功能现已免费开放！<br/>※不过卡片人气排序功能仍需按月付费"
                },
                ads: {
                    name: "你就是商品",
                    desc: "解锁“看”“广告”获取暂时增幅的能力。",
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
            name: "爆发",
            desc: "立即获得价值{0}的批量能量。",
        },
        water: {
            name: "冻结滴落",
            desc: "增加批量能量上限{0}直到下次{draw}，但增加其冷却时间{1}。",
        },
        leaf: {
            name: "肥料",
            desc: "在下次{draw}中，每提高一级稀有度增加所有碎片倍率{0}。",
        },
        sun: {
            name: "光合作用",
            desc: "在下次{draw}中，增加阵营力量获取{0}，但减少点数和碎片获取{1}。"
        },
        moon: {
            name: "简化",
            desc: "在下次{draw}中，增加点数获取{0}，但减少阵营力量获取{1}。"
        },
    },

    packs: {
        standard: {
            legacy: {
                name: "传承扩展包",
                desc: 
                    "用全新的<strong><i>可转移卡牌</i></strong>解锁全新玩法！<br>" +
                    "包含不是一张，不是两张，而是<strong><i>整整四张</i></strong>专属<rarity rarity='ex'></rarity>卡牌！",
                perks: [
                    "四张全新<rarity rarity='ex'></rarity>卡牌"
                ]
            }
        },
    },

    /**
     * Strings related to stat entries.
     */
    stats: {
        general: {
            name: "通用",
            items: {
                timeProgress: {
                    name: "游戏时间",
                },
                timePlayed: {
                    name: "在线游戏时间",
                },
            }
        },    
        legacy: {
            name: "传承", 
            items: {
                accountsSold: {
                    name: "账号出售次数",
                },
                legacyCardsDrawn: {
                    name: "传承卡牌{drawn}",
                },
            }
        },
        cards: {
            name: "卡牌",
            items: {
                cardsDrawn: {
                    name: "已{drawn}卡牌",
                },
                bulkDraw: {
                    name: "基础批量",
                },
                bulkPower: {
                    name: "批量功率",
                },
                bulkMult: {
                    name: "卡牌倍率",
                },
                energySpeed: {
                    name: "额外能量速率",
                },
                cardRChance: {
                    name: "<rarity rarity='r'></rarity>出现几率",
                },
                cardSRChance: {
                    name: "<rarity rarity='sr'></rarity>出现几率",
                },
                cardSSRChance: {
                    name: "<rarity rarity='ssr'></rarity>出现几率",
                },
                cardURChance: {
                    name: "<rarity rarity='ur'></rarity>出现几率",
                },
            }
        },
        points: {
            name: "点数",
            items: {
                base: {
                    name: "基础获取",
                },
                extra: {
                    name: "随机获取",
                },
                mult: {
                    name: "倍率",
                },
                calc: {
                    name: "{draw}时获取",
                },
            }
        },
        shreds: {
            name: "碎片",
            items: {
                base: {
                    name: "基础获取",
                },
                crownMult: {
                    name: "皇冠卡牌倍率",
                },
                rMult: {
                    name: "<rarity rarity='r'></rarity>+卡牌倍率",
                },
                srMult: {
                    name: "<rarity rarity='sr'></rarity>+卡牌倍率",
                },
                ssrMult: {
                    name: "<rarity rarity='ssr'></rarity>+卡牌倍率",
                },
                urMult: {
                    name: "<rarity rarity='ur'></rarity>+卡牌倍率",
                },
            }
        },
        faction: {
            name: "阵营",
            items: {
                chance: {
                    name: "获得阵营之力几率",
                },
                fire: {
                    name: "单次火之力获取",
                },
                water: {
                    name: "单次水之力获取",
                },
                leaf: {
                    name: "单次叶之力获取",
                },
                sun: {
                    name: "单次日之力获取",
                },
                moon: {
                    name: "单次月之力获取",
                },
                mult: {
                    name: "所有力量倍率",
                },
                calc: {
                    name: "{draw}时预计获取",
                },
            }
        },
        skills: {
            name: "技能",
            items: {
                fireUse: {
                    name: "“爆发”使用次数",
                },
                waterUse: {
                    name: "“冻结滴落”使用次数",
                },
                leafUse: {
                    name: "“肥料”使用次数",
                },
                sunUse: {
                    name: "“光合作用”使用次数",
                },
                moonUse: {
                    name: "“简化”使用次数",
                },
                reaction: {
                    name: "技能反应",
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
                name: "点数UP",
                desc: "下 {1} 抽点数获取增加 {x0:1} ！",
            },
            shredsMult: {
                name: "碎片UP",
                desc: "下 {1} 抽碎片获取增加 {x0:1} ！",
            },
            factionMult: {
                name: "阵营之力UP",
                desc: "下 {1} 抽阵营之力获取增加 {x0:1} ！",
            },
        },
        time: {
            energySpeed: {
                name: "超充能",
                desc: "{1s} 内被动批量点数获取增加 {x0:1} ！",
            },
        },
    },

    /**
     * Strings related to badges, such as their names or descriptions.
     */
    badges: {
        11: {
            name: "又一个扭蛋游戏加入收藏",
            desc: "首次{Draw}卡牌。",
        },
        12: {
            name: "四叶幸运草",
            desc: "获得一张<rarity rarity='r'></rarity>卡牌。",
        },
        13: {
            name: "欧皇还是肝帝？",
            desc: "获得一张<rarity rarity='sr'></rarity>卡牌。",
        },
        14: {
            name: "求求求出个传说",
            desc: "获得一张<rarity rarity='ssr'></rarity>卡牌。",
        },
        15: {
            name: "超稀有还是极稀有？",
            desc: "获得一张<rarity rarity='ur'></rarity>卡牌。",
        },
        21: {
            name: "终于能看见我在做什么了！",
            desc: "在游戏中查看你的徽章。",
        },
        22: {
            name: "两极反转",
            desc: "创建一个技能反应。",
        },
        23: {
            name: "直接扔掉",
            desc: "在光合作用激活时进行无阵营{draw}。",
        },
        24: {
            name: "安全无忧",
            desc: "手动将游戏数据保存到云端，或导出你的存档。",        
        },
        25: {
            name: "整整两季",
            desc: "游玩相当于24集动画长度的时间。",
        },
        31: {
            name: "您要购买更多{draws}吗？",
            desc: "用完你的一万亿次免费{draws}。",
        },
        32: {
            name: "阴魂不散的成就",
            desc: "“看”一个“广告”。",
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
            name: "介绍",
            directives: [
                ["image", "1"],
                ["text", "今年是2078年。"],
                ["image", "2"],
                ["text", "扭蛋游戏已成为一种生活方式。"],
                ["text", "不知道你会获得什么物品的刺激体验，获得稀有{draw}时的满足感，以及将扭蛋机制轻松添加到每个现有游戏的灵活性..."],
                ["text", "人们发现扭蛋游戏是打发时间的最佳方式，无论是休闲玩家还是更具竞争意识的玩家都是如此。"],
                ["text", "不过，当人们谈论扭蛋游戏时，最重要的一点不是这个。"],
                ["text", "而是..."],
                ["image", "3"],
                ["text", "它们能赚<i>很多</i>钱。"],
                ["text", "扭蛋游戏场景已经发展成为一个价值数百万美元的行业，远超任何娱乐场景的总价值。"],
                ["text", "为了追逐金钱，每眨一次眼就有数十亿个扭蛋游戏涌现。"],
                ["text", "当然，由于市场已经被如此多的游戏稀释，它们需要一种方式向玩家介绍自己并证明它们值得花时间。"],
                ["image", "4"],
                ["text", "于是，就有了广告。"],
                ["text", "公司最初通过展示精美的图形和出色的游戏机制来宣传游戏。"],
                ["text", "但这似乎并没有吸引大量玩家。"],
                ["text", "最终，他们发现推广游戏最有效的方式是...简单的给玩家大量免费物品。"],
                ["text", "毕竟，虚拟货币和{draws}实际上是虚拟的，可以按照公司的意愿随意发放。"],
                ["text", "然而，随着玩家习惯了更大的数字，公司很快发现玩家不断要求更多。"],
                ["text", "公司不能不给更多，总会有游戏决定给予更多物品，从而获得更多玩家和金钱。"],
                ["text", "为了跟上这一趋势，游戏不断提供越来越多的免费物品，直到数字膨胀到不再具有任何现实意义。"],
                ["image", "5"],
                ["text", "你，这个社会中的一员，躺在床上，正准备尝试一款新的扭蛋游戏。"],
                ["image", "6"],
                ["text", "欧米伽卡牌，一款移动设备游戏，第一个宣传一万亿次免费卡牌{draws}的游戏。这个数字是1后面跟着12个零。"],
                ["text", "对50年前的人来说，这听起来是一个疯狂的免费{draws}数量，但这个场景发展得如此之快，现在与其他游戏相比，这只是一个较小的数字。"],
                ["text", "不过，你仍然看到互联网上的人们时不时地因为怀旧而回到这个游戏。"],
                ["image", "5"],
                ["text", "你觉得这足够有趣，于是第一次启动游戏，但游戏希望你先用完你的一万亿次{draws}。"],
                ["text", "就在这时你意识到..."],
                ["image", "7"],
                ["text", "...你肯定要在这里待上一段时间。"],
            ]
        },
        2: {
            name: "免费试用已结束",
            directives: [
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...等会，这就没了？"],
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...好吧，这就没了！"],
                ["image", "3"],
                ["text", "一万亿次免费抽卡，全用光了！"],
                ["text", "这比你想的要快得多。"],
                ["text", "一开始你还觉得，一张一张的抽，这辈子都抽不完这么多次卡。"],
                ["image", "1"],
                ["text", "...不过现在，你还能干啥呢？"],
                ["text", "既然没有抽卡次数了，游戏里也没剩多少可玩的了。"],
                ["text", "这游戏里的一切都跟抽卡挂钩，但因为你再也不能那么干了，整个游戏只剩了个索然无味的界面。"],
                ["text", "你不能就充钱买更多抽卡次数，试着交房租和晚饭就已经把你的最后一分钱花干净了！"],
                ["text", "..."],
                ["text", "除非..."],
                ["image", "4"],
                ["text", "...你去干那件事..."],
            ]
        },
        3: {
            name: "New Game+",
            directives: [
                ["image", "1"],
                ["text", "好了，现在你有点小钱了—但代价是什么？"],
                ["text", "丢掉你辛辛苦苦肝的所有进度，回到开头？"],
                ["image", "2"],
                ["text", "..."],
                ["image", "3"],
                ["text", "...仔细想想的话好像也没那么差。"],
                ["text", "至少你能重新拿到新手送的一万亿抽卡次数。"],
                ["text", "用现在这点启动资金买个新手礼包加速进度..."],
                ["text", "...就能更快挥霍完这一万亿抽，然后更快把账号卖掉套现。"],
                ["text", "多循环几次，说不定就能赚够足够钱糊口！甚至说，发家致富走向人生巅峰！"],
                ["image", "4"],
                ["text", "...你确实没预料到游戏账号黑市规模如此庞大"],
                ["text", "嘛，毕竟在法律灰色地带，倒卖抽卡账号根本没人管"],
                ["text", "听说政府还立法禁止游戏公司封禁卖号行为呢！"],
                ["text", "在这个机器人抢走所有正经工作的年代，这居然成了个新兴职业。"],
                ["image", "5"],
                ["text", "...是时候开启新一轮抽卡之旅了？"],
            ]
        },
    },

    ads: {
        minigames: {
            sort: {
                action_undo: "撤销",
                action_restart: "重置",
            }
        }
    }
}
