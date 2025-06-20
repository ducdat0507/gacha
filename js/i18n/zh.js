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
            draw: "抽卡",
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
        title: "一万亿次免费{Draws}",
        title_rich: "<span class='number'>一万亿</span>次免费{Draws}",

        draw: "{Draw}",
        draw_inCooldown: "冷却中",
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

        hint_title: "你有{0}次免费{draws}！",
        hint_desc: "点击下方这个大“{Draw}”按钮开始{drawing}吧！",
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
            minute: "{0}分",
            hour: "{0}时",
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
                    off: "关闭pick-it高级版",
                    on: "显示可升级卡牌",
                },
            }
        },
        marketplace: {
            name: "市场",
            headers: {
                exCards: "<rarity rarity='ex'></rarity> 卡牌",
            }
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
            headers: {
                prefs: "偏好设置",
                saves: "存档管理",
                other: "其他"
            },
            items: {
                language: "语言",
                notation: "数字格式",
                verb: "动词",
                cardImages: "卡牌图像",
                music: "背景音乐",
                localSave: "本地存档",
                cloudSave: "云存档",
                info: "信息",
                otherOther: "其他其他",
            },
            values: {
                items: {
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
                cloud_state_saving: "(保存中...)",
                cloud_state_loading: "(加载中...)",
                cloud_state_checking: "(检查中...)",

                verb_desc: "更改与{drawing}卡牌相关的动词，如游戏标题和物品描述中的动词。",
                john_note: "(注意：链接将在此标签页中打开，按住Ctrl点击可避免意外关闭游戏)",
            },
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

            action_close: "关闭",
            action_continue: "继续",
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
        currency: {
            strings: {
                amount_have: "(你拥有{0})",
                amount_drawn: "(你已{drawn} {0})",
                speed_minute: "({0}/分钟)",
                toCap: "(距离上限还有{0})",
                efficiency: "({0}效率)",
            }
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
            saved_desc: "现在可以安全关闭此标签页。",
            saved_noteLocal: "(注意：本游戏会在上次保存后一分钟自动保存，以及在某些事件后如{draw}后和设置更改时自动保存)",
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
            reset_confirm_desc1: "此操作将<strong>完全清除你的存档</strong>。你将回到游戏的最开始，<strong>没有任何奖励回报</strong>。",
            reset_confirm_desc2: "游戏将复制当前存档数据到你的剪贴板，以防你改变主意。",
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
                "(无需下载的游戏，采用尖端网络技术)",
                "(一款尽可能慷慨的扭蛋游戏)",
                "(你以为一千多次已经很多了)",
                "<marquee>(看妈妈，我在&lt;marquee&gt;标签里！)</marquee>",
            ],
            strings: {
                game: "游戏由{0}制作",
                libs: "使用的库：",
                music: "音乐由{0}制作",
                music_foot: "(嘿，那是我)",
                icons: "图标来自通过{0}的各种来源",
                footer: "(这游戏算是恶搞，因此符合合理使用吗？<br>不知道，我又不是律师)"
            }
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
            quote: "为伟大的欧米伽卡牌游戏制作，这些卡牌实际上是让你在用完一万亿次免费卡牌{draws}后花更多钱来{draw}更多卡牌的凭证...至少在那之前。他们对给人们提供万亿次免费卡牌{draws}感到非常高兴，事实上，每个人都是",
        },
        energy: {
            name: "批量能量",
            quote: "作为欧米伽卡牌忠诚计划的货币，允许你一次性交换多次卡牌{draws}",
        },
        points: {
            name: "点数",
            quote: "世界上最通用的货币。它足够通用，可以被分配给任何可以想象的用途",
        },
        shreds: {
            name: "碎片",
            quote: "多余卡牌的残余，已被分解成原子。这些卡牌几乎没有交易价值(除了少数<rarity rarity='ex'></rarity>卡牌)，所以人们正在发明新的使用方法，比如将它们粉碎用作新的升级货币",
        },
        fire: {
            name: "火之力",
            quote: "来自火阵营的力量。有些人认为发现这个是人类最伟大的成就",
        },
        water: {
            name: "水之力",
            quote: "来自水阵营的力量。总是提醒你保持水分充足",
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
    },

    /**
     * Strings related to cards, such as their names or quote texts.
     */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "无效方块",
                    desc: "无效果。",
                    quote: "那个被编程为99%几率被抽中的方块"
                },
                n1: {
                    name: "单点",
                    desc: "每次{draw}获得{+0}点数。",
                    quote: "ここにいる(我在这里)"
                },
                n2: {
                    name: "半点",
                    desc: "每次{draw}随机获得零到{+0}点数。",
                    quote: "要解释半点是什么，我们需要讨论平行宇宙-"
                },
                n3: {
                    name: "卡包",
                    desc: "{+0}基础批量。基础批量增加你一次性{draws}的数量。",
                    quote: "嗯，如果你想用完那一万亿次卡牌{draws}，你需要开始一次{drawing}多张，你知道吗？"
                },
                n4: {
                    name: "自填充包",
                    desc: "{+0}批量功率。批量功率被动生成批量能量。",
                    quote: "增量游戏，也称为放置游戏"
                },
                n5: {
                    name: "更大包装",
                    desc: "{+0}批量能量上限。超过能量上限的批量能量生产会减慢。",
                    quote: "这次你可以真正地放置了"
                },
                n6: {
                    name: "剪刀",
                    desc: "{+0%}包裹拆解速度。",
                    quote: "如果你还没注意到，你可以在包裹拆解时点击它来加快拆解速度"
                },
                n7: {
                    name: "快速配送",
                    desc: "{+0%}冷却速度。",
                    quote: "使用我们的新快速配送服务补货更快——适用于所有1张及以上的订单！",
                },
                c1: {
                    name: "游戏内商店",
                    desc: "解锁市场。",
                    quote: "寻找无法通过{drawing}获得的卡牌，并可能花光你所有的钱试图超过最高出价者"
                }
            },
            r: {
                n0: {
                    name: "史诗粉碎机",
                    desc: "{+0%}碎片倍数。",
                    quote: "与其使用小型办公室粉碎机，为何不使用互联网ASMR视频中的大型粉碎机呢？"
                },
                n0b: {
                    name: "精彩粉碎时刻",
                    desc: "{+0%}碎片倍数。",
                    quote: "显然互联网上的人喜欢看东西被粉碎成碎片！你发现可以录下你的史诗粉碎机粉碎卡牌的过程并上传到管道视频网站，在此过程中赚取一些甜蜜的广告收入"
                },
                n1: {
                    name: "点数倍增器",
                    desc: "{+0%}点数倍数。",
                    quote: "每个增量游戏都需要指数增长，通用货币需要通用倍增升级"
                },
                n1b: {
                    name: "货币印刷机",
                    desc: "{+0%}点数倍数。",
                    quote: "将一些碎片压制成钱。这也正是合法货币的制作方式，人们甚至无法察觉区别"
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
                    quote: "重复使用卡牌来开更多卡牌实际上是个好主意"
                },
                n3c: {
                    name: "堆肥机",
                    desc: "{+0%}批量能量上限。",
                    quote: "使用这个堆肥机进行更强力的回收，设计用来制作大量卡牌"
                },
                n4: {
                    name: "耐力训练",
                    desc: "{+0%}卡牌倍数，但{+1%}抽卡冷却时间和卡包拆解时间。",
                    quote: "卡包接受了一些耐力训练！现在它们更难拆开，但内容增加了！"
                },
                n5a: {
                    name: "热门趋势",
                    desc: "每次获得{+0}火之力。",
                    quote: "啊，<br>好热，<br>...，好热"
                },
                n5b: {
                    name: "海洋",
                    desc: "每次获得{+0}水之力。",
                    quote: "我是蓝色的da be dee da be die"
                },
                n5c: {
                    name: "森林",
                    desc: "每次获得{+0}叶之力。",
                    quote: "团队树木万岁"
                },
                n5d: {
                    name: "空气",
                    desc: "每次获得{+0}日之力。",
                    quote: "感受呼吸"
                },
                n5e: {
                    name: "大地",
                    desc: "每次获得{+0}月之力。",
                    quote: "这是我们的家园"
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
                    desc: "{+0%}点数倍数。",
                    quote: "一张完美通用的卡牌，提升完美通用的货币，通用性太完美难以处理"
                },
                n1: {
                    name: "点对",
                    desc: "提升<b><rarity rarity='n'></rarity> 单点</b>效果的等级{^0:1}",
                    quote: "这叫做一条线"
                },
                n2: {
                    name: "骰子提取器",
                    desc: "提升<b><rarity rarity='n'></rarity> 半点</b>效果的等级{^0:1}",
                    quote: "让骰子上的点数指引你"
                },
                n3: {
                    name: "卡牌仓库",
                    desc: "{+0%}批量能量上限。",
                    quote: "按照这个速度，你需要一个更大的房间来存放所有卡牌"
                },
                n4a: {
                    name: "火之力精通",
                    desc: "{+0%}火之力、叶之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4b: {
                    name: "水之力精通",
                    desc: "{+0%}水之力、火之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4c: {
                    name: "叶之力精通",
                    desc: "{+0%}叶之力、水之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4d: {
                    name: "日之力精通",
                    desc: "{+0%}日之力、月之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n4e: {
                    name: "月之力精通",
                    desc: "{+0%}月之力、日之力和点数获取。",
                    quote: "是的，这些<rarity rarity='sr'></rarity>卡牌确实是复制粘贴的，你不会以为每个扭蛋游戏不都是这样吧？"
                },
                n5a: {
                    name: "急速火焰",
                    desc: "{/0:2} <b>爆发</b>冷却时间。",
                    quote: "需要更多火力"
                },
                n5b: {
                    name: "深度冻结",
                    desc: "{/0:2} <b>冻结滴落</b>冷却时间。",
                    quote: "接近绝对零度"
                },
                n5c: {
                    name: "NPK",
                    desc: "{/0:2} <b>肥料</b>冷却时间。",
                    quote: "为什么只做一种，当你可以全部做到时"
                },
                n5d: {
                    name: "夏季",
                    desc: "{/0:2} <b>光合作用</b>冷却时间。",
                    quote: "不包含沙滩剧情"
                },
                n5e: {
                    name: "大学",
                    desc: "{/0:2} <b>简化</b>冷却时间。",
                    quote: "教导学生批判性思维"
                },
                c1: {
                    name: "强迫症",
                    desc: "解锁按某些标准筛选卡牌的能力。",
                    quote: "必须...保持...整齐..."
                }
            },
            ssr: {
                n0: {
                    name: "最后冲刺",
                    desc: "{+0%}卡牌倍数。",
                    quote: "感谢你在游戏中走到这一步！如果你喜欢，请务必点赞并订阅以获取更多类似内容"
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
                    quote: "钻石实际上相当常见，因为已经有了从煤炭中合成钻石的发现，但设备太昂贵，可能被视为富人的玩具"
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
                n1e: {
                    name: "质疑现实的奇怪棋盘地板",
                    desc: "根据你完成的技能反应总数获得更多碎片。<br>(当前：{0}次反应 ⇒ {+1%}碎片获取)",
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
                    desc: "<b>冻结滴落</b>激活时{+0%}卡牌倍数。",
                    quote: "慢一点更有把握"
                },
                s_water_2: {
                    name: "山顶",
                    desc: "{+0%}<b>冻结滴落</b>的能量上限提升，但<b>冻结滴落</b>激活时达到能量上限时{+1%}卡牌倍数。",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "肥料",
                    desc: "解锁<b>肥料</b>技能。",
                    quote: "更快的树木意味着更快的纸张意味着更快的碎片"
                },
                s_leaf_1: {
                    name: "培育",
                    desc: "增加<b>肥料</b>的倍数效果{x0:1}。",
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
                    quote: "拿不下这么多货币"
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
                    name: "妈妈",
                    desc: "{+0%}基础批量、批量功率、能量上限和卡牌倍数。<br>{+1%}碎片获取。<br>{x2}点数获取。",
                    quote: "<rarity rarity='ur'></rarity>妈妈太强了，她是游戏中最强的单位"
                },
                n1a: {
                    name: "多重火焰",
                    desc: "允许<b>爆发</b>技能叠加，最多同时使用{0}次。",
                    quote: "每秒超过9000转"
                },
                n1b: {
                    name: "沉睡游戏",
                    desc: "当<b>冻结滴落</b>激活时，增加批量功率{+0%}，但减少<b>爆发</b>的时间跳过量相同的百分比。",
                    quote: "等等，这不是缩写的意思吗？"
                },
                n1c1: {
                    name: "种子挑选",
                    desc: "<b>肥料</b>还会增加皇冠卡牌的碎片获取{+0%}。",
                    quote: "挑选樱桃但用种子。让最好的种子胜出！"
                },
                n1c2: {
                    name: "电解质",
                    desc: "<b>肥料</b>还会增加基础碎片获取{+0%}。",
                    quote: "这是植物渴望的东西"
                },
                n1d: {
                    name: "粘性卡牌",
                    desc: "在<b>光合作用</b>激活时{drawn}的阵营卡牌有{0%}几率复制自身。",
                    quote: "实际上是两张卡牌粘在一起，为什么这里有这么多？"
                },
                n1e: {
                    name: "协同作用",
                    desc: "<b>简化</b>的基础增益效果获得<rarity rarity=n></rarity><b>卡包</b>效果的{^0:1}。<br>(当前：{+1})",
                    quote: "天哪，这是协同作用的引用吗？？？？？"
                }
            },
            ex: {
                zip: {
                    name: "StackRAR",
                    desc: "在{draw}视图中将重复卡牌分组，尽管压缩会使你的卡牌显示速度减半。同时移除<span class='number'>100</span>批量{draw}限制。",
                    quote: "请注意，StackRAR不是免费卡牌。在40天试用期后，你必须购买许可证或从你的收藏中销毁此卡牌"
                },
                shred: {
                    name: "粉碎机",
                    desc: "无用的重复卡牌会被粉碎成一种叫做碎片的新货币，包括皇冠卡牌和最高星级卡牌。",
                    quote: "假装什么都没发生过"
                },
                faction: {
                    name: "过度使用的阵营系统",
                    desc: "解锁阵营。使用阵营{draws}获取阵营货币和特定阵营的卡牌。(阵营货币有小概率出现。)",
                    quote: "很久以前，五大阵营和谐共处。然后，一切都因火阵营的进攻而改变。"
                },
                pickit: {
                    name: "pick-it高级版",
                    desc: "解锁筛选可升级卡牌的能力，尽管只能使用有限时间。",
                    quote: "你可以直接找到你想看的内容。没有任何阻碍。pick-it高级版将拓宽并深化你的卡牌浏览热情。"
                },
                skills: {
                    name: "连击",
                    desc: "解锁主动技能。(单独技能通过阵营{drawing}解锁。)",
                    quote: "↑↑↓↓←→←→BA"
                },
                skills2: {
                    name: "无咒语魔法包",
                    desc: "解锁减少技能冷却时间的卡牌。",
                    quote: "你知道吗，越早学习无咒语魔法越容易掌握？"
                }
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
            desc: "在下次{draw}中，每提高一级稀有度增加所有碎片倍数{0}。",
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

    /**
     * Strings related to stat entries.
     */
    stats: {
        general: {
            name: "通用",
            items: {
                timePlayed: {
                    name: "游戏时间",
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
                    name: "卡牌倍数",
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
                    name: "倍数",
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
                    name: "皇冠卡牌倍数",
                },
                rMult: {
                    name: "<rarity rarity='r'></rarity>+卡牌倍数",
                },
                srMult: {
                    name: "<rarity rarity='sr'></rarity>+卡牌倍数",
                },
                ssrMult: {
                    name: "<rarity rarity='ssr'></rarity>+卡牌倍数",
                },
                urMult: {
                    name: "<rarity rarity='ur'></rarity>+卡牌倍数",
                },
            }
        },
        faction: {
            name: "阵营",
            items: {
                chance: {
                    name: "力量几率",
                },
                fire: {
                    name: "火之力获取",
                },
                water: {
                    name: "水之力获取",
                },
                leaf: {
                    name: "叶之力获取",
                },
                sun: {
                    name: "日之力获取",
                },
                moon: {
                    name: "月之力获取",
                },
                mult: {
                    name: "所有力量倍数",
                },
                calc: {
                    name: "{draw}时获取",
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
     * Strings related to badges, such as their names or descriptions.
     */
    badges: {
        11: {
            name: "又一个扭蛋游戏加入收藏",
            desc: "首次{Draw}卡牌。",
        },
        12: {
            name: "四叶草",
            desc: "获得一张<rarity rarity='r'></rarity>卡牌。",
        },
        13: {
            name: "运气还是坚持？",
            desc: "获得一张<rarity rarity='sr'></rarity>卡牌。",
        },
        14: {
            name: "求求求传说卡",
            desc: "获得一张<rarity rarity='ssr'></rarity>卡牌。",
        },
        15: {
            name: "超稀有还是极稀有？",
            desc: "获得一张<rarity rarity='ur'></rarity>卡牌。",
        },
        21: {
            name: "终于能看清我在做什么了！",
            desc: "在游戏中查看你的徽章。",
        },
        22: {
            name: "截然相反",
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
        31: {
            name: "想购买更多{draws}吗？",
            desc: "用完你的一万亿次免费{draws}。",
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
                ["text", "时间是2078年。"],
                ["image", "2"],
                ["text", "扭蛋游戏已成为一种生活方式。"],
                ["text", "不知道你会获得什么物品的刺激体验，获得稀有{draw}时的满足感，以及将扭蛋机制轻松添加到每个现有游戏的灵活性..."],
                ["text", "人们发现扭蛋游戏是打发时间的最佳方式，无论是休闲玩家还是更具竞争意识的玩家都是如此。"],
                ["text", "不过，当人们谈论扭蛋游戏时，最重要的一点不是这个。"],
                ["text", "而是事实上..."],
                ["image", "3"],
                ["text", "它们能赚<i>很多</i>钱。"],
                ["text", "扭蛋游戏场景已经发展成为一个价值数百万美元的行业，远超任何娱乐场景的总价值。"],
                ["text", "为了追逐金钱，每眨一次眼就有数十亿扭蛋游戏涌现。"],
                ["text", "当然，由于市场已经被如此多的游戏稀释，它们需要一种方式向玩家介绍自己并证明它们值得花时间。"],
                ["image", "4"],
                ["text", "进入广告场景。"],
                ["text", "公司最初通过展示精美的图形和出色的游戏机制来宣传游戏。"],
                ["text", "但这似乎并没有吸引大量玩家。"],
                ["text", "最终，他们发现推广游戏最有效的方式是...只需给玩家大量免费物品。"],
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
        }
    },
}