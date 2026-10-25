/**
 * History Unfolded / History in Focus - Website Data & Localization
 */

const SITE_DATA = {
  channel: {
    name: "History Unfolded",
    handle: "@HistoryinFocus-p3b",
    tagline: {
      en: "Every country has a past. Every empire leaves a legacy. Watch history unfold.",
      zh: "每一个国家都有其过往，每一座帝国都留下遗产。见证历史画卷徐徐展开。"
    },
    bio: {
      en: "Illustrated historical documentaries in around 15–20 minutes. From ancient Persia to modern revolutions, we follow the people, places, and turning points that shaped our world. AI-assisted visuals as illustrative reconstructions with referenced research.",
      zh: "以精美画卷与深厚考证，通过15-20分钟的精悍纪录片，探索国家、文明与帝国的史诗兴衰。从古波斯帝国到近现代变革，洞悉塑造今日世界的核心转折点。"
    },
    avatar: "https://yt3.googleusercontent.com/1vlIhzwKUqJHlmuxDtlPbtz7SdyWi_evizvBqhoxw-rr7HMsueXkPJDIm07kdwwa4r0wq2jGDg=s900-c-k-c0x00ffffff-no-rj",
    banner: "https://yt3.googleusercontent.com/aZxBMOORQA-BxdJ11neEFqDkncniSyztXGRdnbWZiEeXt8PofwjjiRWM2UVHh2pmZIc3dJ4e9Q=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    url: "https://www.youtube.com/@HistoryinFocus-p3b",
    subscribeUrl: "https://www.youtube.com/@HistoryinFocus-p3b?sub_confirmation=1",
    stats: {
      targetDuration: "15-20 Min",
      focusAreas: "Civilizations & Empires",
      episodesPlanned: "50+ Empires",
      format: "Illustrated Documentary"
    }
  },

  featuredEpisode: {
    id: "31lDgADoeH4",
    title: {
      en: "The ENTIRE History of Iran in 18 Minutes",
      zh: "18分钟一口气看懂伊朗三千年全史：从古波斯帝国到现代风云"
    },
    duration: "18:14",
    releaseDate: "2024",
    views: "Featured Premiere",
    badge: "LATEST RELEASE",
    category: "Ancient Empires",
    thumbnail: "https://i.ytimg.com/vi/31lDgADoeH4/hq720.jpg",
    description: {
      en: "From the ancient Elamites and the monumental empire of Cyrus the Great, through Alexander's conquest, the Sasanian golden age, the Islamic transformation, to the Pahlavi dynasty and the 1979 Revolution. An all-encompassing visual journey through 3,000 years of Iranian history.",
      zh: "从古埃兰文明、居鲁士大帝建立阿契美尼德波斯帝国，到亚历山大东征、萨珊王朝荣耀、伊斯兰黄金时代，再到巴列维王朝与当代转折。18分钟带你穿透波斯高原三千年的史诗风云与文明回响。"
    },
    chapters: [
      { time: "00:00", titleEn: "Prologue & The Elamite Dawn", titleZh: "序幕与埃兰文明初曙" },
      { time: "02:15", titleEn: "Cyrus the Great & Achaemenid Glory", titleZh: "居鲁士大帝与阿契美尼德盛世" },
      { time: "05:40", titleEn: "Alexander's Invasion & Parthian Rebirth", titleZh: "亚历山大远征与安息帝国复兴" },
      { time: "08:50", titleEn: "The Sasanian Empire & Clash with Rome", titleZh: "萨珊波斯与罗马帝国的世纪争霸" },
      { time: "11:30", titleEn: "Islamic Era & The Golden Age of Science", titleZh: "伊斯兰纪元与波斯文艺科学复兴" },
      { time: "14:40", titleEn: "The Safavid Renaissance & Modern Crucible", titleZh: "萨非王朝华章与走向近现代" },
      { time: "17:10", titleEn: "The Enduring Persian Legacy", titleZh: "波斯文明的恒久遗产与世界启迪" }
    ],
    sources: [
      "Cambridge History of Iran (Vol. 1-7)",
      "Herodotus: The Histories",
      "Richard N. Frye: The Heritage of Persia",
      "Archival & Scholarly Historical Chronologies"
    ]
  },

  episodes: [
    {
      id: "31lDgADoeH4",
      status: "published",
      title: {
        en: "The ENTIRE History of Iran in 18 Minutes",
        zh: "18分钟一口气看懂伊朗全史"
      },
      category: "Middle East",
      duration: "18:14",
      tag: "Civilization Chronicle",
      date: "Latest Release",
      thumbnail: "https://i.ytimg.com/vi/31lDgADoeH4/hq720.jpg",
      synopsis: {
        en: "A comprehensive illustrated breakdown of the Persian civilization from 1000 BCE to the modern era.",
        zh: "从公元前1000年到现代，全景图解波斯文明与国家兴衰史诗。"
      }
    },
    {
      id: "upcoming-1",
      status: "production",
      title: {
        en: "The Rise & Fall of the Byzantine Empire: Rome's 1,000-Year Phoenix",
        zh: "拜占庭帝国千年兴衰：罗马凤凰的涅槃与叹息"
      },
      category: "European History",
      duration: "19:30 (Est.)",
      tag: "In Production",
      date: "Coming Soon",
      thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      synopsis: {
        en: "How the Eastern Roman Empire survived the collapse of Rome, built Constantinople, and preserved classical knowledge for a millennium.",
        zh: "东罗马帝国如何在西罗马倾覆后屹立千年，筑就君士坦丁堡，守护人类古典文明灯火。"
      }
    },
    {
      id: "upcoming-2",
      status: "scripting",
      title: {
        en: "Ancient Egypt: 3,000 Years from the First Pharaoh to Cleopatra",
        zh: "古埃及三千年全景：从第一位法老到埃及艳后的绝响"
      },
      category: "Ancient Empires",
      duration: "18:45 (Est.)",
      tag: "Scripting & Storyboard",
      date: "Next Up",
      thumbnail: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
      synopsis: {
        en: "Old Kingdom pyramids, New Kingdom military might, religious rebellions under Akhenaten, and the Ptolemaic finale along the Nile.",
        zh: "古王国金字塔奇迹、新王国军事征伐、阿肯那顿宗教巨浪直至托勒密终曲的尼罗河史诗。"
      }
    },
    {
      id: "upcoming-3",
      status: "research",
      title: {
        en: "The Roman Republic to Empire: How a Democracy Fell to Caesars",
        zh: "从罗马共和国到帝国：寡头政体如何让位于独裁凯撒"
      },
      category: "European History",
      duration: "17:50 (Est.)",
      tag: "Historical Research",
      date: "In Pipeline",
      thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      synopsis: {
        en: "From the Gracchi brothers and the Marian reforms to Julius Caesar crossing the Rubicon and Augustus establishing the Principate.",
        zh: "从格拉古兄弟改革、马略军改，到凯撒跨过卢比孔河与屋大维确立元首制。"
      }
    },
    {
      id: "upcoming-4",
      status: "research",
      title: {
        en: "The Silk Road: The Arteries that Built the Medieval World",
        zh: "丝绸之路：连接欧亚大陆文明命脉的历史动脉"
      },
      category: "Global Trade & Civilization",
      duration: "16:20 (Est.)",
      tag: "Concept Phase",
      date: "In Pipeline",
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      synopsis: {
        en: "Trading spices, silk, philosophies, and plagues: how caravans connected Chang'an, Samarkand, Baghdad, and Venice.",
        zh: "香料、丝绸、哲学与商旅交织：看驼铃声如何串联长安、撒马尔罕、巴格达与威尼斯。"
      }
    },
    {
      id: "upcoming-5",
      status: "concept",
      title: {
        en: "The Ottoman Empire: 600 Years of Imperial Dominance",
        zh: "奥斯曼帝国六百年霸业：地跨三洲的征服与变革"
      },
      category: "Middle East",
      duration: "20:00 (Est.)",
      tag: "Community Favorite",
      date: "Upcoming Vote",
      thumbnail: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80",
      synopsis: {
        en: "From Anatolian beylik to conquering Constantinople, expanding into the gates of Vienna, and transforming Mediterranean trade.",
        zh: "从安纳托利亚部落崛起，攻克君士坦丁堡，兵临维也纳城下，重塑地中海格局。"
      }
    }
  ],

  timelineEras: [
    {
      id: "era-1",
      era: "3000 BCE – 500 BCE",
      title: {
        en: "The Cradle of Empires: Mesopotamia & Persia",
        zh: "帝国摇篮：美索不达米亚与古波斯"
      },
      desc: {
        en: "The birth of writing, code of laws, city states, and the monumental rise of the first multicultural empire under Cyrus the Great.",
        zh: "文字萌芽、汉谟拉比法典、城邦雏形，以及居鲁士大帝开创的世界首个跨越亚非欧的大帝国。"
      },
      featuredLocation: "Persepolis, Babylon",
      relatedEpisodeId: "31lDgADoeH4"
    },
    {
      id: "era-2",
      era: "500 BCE – 31 BCE",
      title: {
        en: "Classical Antiquity & The Republic",
        zh: "古典鼎盛与共和国黄昏"
      },
      desc: {
        en: "Greco-Persian wars, the golden age of Athens, Alexander's rapid Eurasian conquest, and Rome's transition from Senate rule to civil strife.",
        zh: "希波战争、雅典黄金时代、亚历山大极速东征，以及罗马从元老院共和走向军阀内战。"
      },
      featuredLocation: "Athens, Rome, Alexandria",
      relatedEpisodeId: "upcoming-3"
    },
    {
      id: "era-3",
      era: "330 CE – 1453 CE",
      title: {
        en: "The Millennium of Byzantium & The Silk Trade",
        zh: "拜占庭千年长歌与丝路商道"
      },
      desc: {
        en: "Constantine's new capital, Justinian's architectural triumphs, the emergence of the Islamic Golden Age, and cross-continental caravan trade.",
        zh: "君士坦丁堡建都、查士丁尼法典与圣索菲亚大教堂、伊斯兰黄金时代与欧亚陆路商脉繁荣。"
      },
      featuredLocation: "Constantinople, Baghdad, Chang'an",
      relatedEpisodeId: "upcoming-1"
    },
    {
      id: "era-4",
      era: "1300 CE – 1918 CE",
      title: {
        en: "Gunpowder Empires & The Ottoman Epoch",
        zh: "火药帝国与奥斯曼浪潮"
      },
      desc: {
        en: "Cannons breach Constantinople's walls; the Ottoman, Safavid, and Mughal empires shape Eurasian geopolitics while Europe turns toward ocean navigation.",
        zh: "巨炮轰碎君士坦丁堡城墙，奥斯曼、萨非与莫卧儿三大火药帝国鼎立，世界迈向大航海时代。"
      },
      featuredLocation: "Istanbul, Isfahan, Delhi",
      relatedEpisodeId: "upcoming-5"
    }
  ],

  votingTopics: [
    {
      id: "vote-byzantium",
      titleEn: "The Byzantine Empire: 1,000 Years of Survival",
      titleZh: "拜占庭帝国：罗马文明的一千年坚守",
      category: "European History",
      votes: 1420,
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "vote-egypt",
      titleEn: "Ancient Egypt: 3,000 Years from Pharaohs to Cleopatra",
      titleZh: "古埃及文明：从法老金字塔到埃及艳后",
      category: "Ancient Near East",
      votes: 1180,
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "vote-mongol",
      titleEn: "The Mongol Conquests: How the Steppe Reshaped Eurasia",
      titleZh: "蒙古远征：铁骑与欧亚地缘政治剧变",
      category: "Eurasian Empires",
      votes: 940,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "vote-ottoman",
      titleEn: "The Ottoman Empire: 600 Years of Imperial Dominance",
      titleZh: "奥斯曼帝国：六百年跨洲巨擘全景",
      category: "Middle East",
      votes: 810,
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=400&q=80"
    }
  ],

  creatorPhilosophy: [
    {
      icon: "fas fa-feather-pointed",
      titleEn: "Concise 15–20 Minute Formats",
      titleZh: "15-20分钟精炼叙事",
      descEn: "No fluff, no filler. We distill complex multi-century imperial chronicles into fast-paced, coherent narratives that respect your time.",
      descZh: "告别冗长拖沓。我们将跨越数世纪的皇皇巨著提炼为节奏明快、脉络清晰的视听叙事，高效吸收文明精华。"
    },
    {
      icon: "fas fa-compass-drafting",
      titleEn: "Visual Reconstructions",
      titleZh: "生动图解与视觉复原",
      descEn: "We pair historical manuscripts, authentic maps, and AI-assisted visual reconstructions to make forgotten eras palpable and visually arresting.",
      descZh: "结合珍贵历史图册、高精度手绘地图与AI辅助古迹视觉复原，让湮灭在风沙中的帝国壮景重获新生。"
    },
    {
      icon: "fas fa-book-bookmark",
      titleEn: "Rigorous Sources & Bibliography",
      titleZh: "扎实严谨的文献考证",
      descEn: "Every video lists reputable academic references, primary sources, and peer-reviewed chronologies in its description and website companion page.",
      descZh: "每一集皆基于主流学术文献与权威历史专著严谨考校，并在网站与视频描述中公开全部参考书目以供研读。"
    },
    {
      icon: "fas fa-earth-americas",
      titleEn: "The Bigger Geopolitical Picture",
      titleZh: "宏观全球地缘视野",
      descEn: "We don't just ask 'what happened'—we explore 'why it mattered', examining climate, trade routes, cultural exchanges, and systemic fallouts.",
      descZh: "不仅讲述发生了什么，更探究为何如此。从气候变迁、贸易动脉到思想碰撞，剖析文明盛衰的深层逻辑。"
    }
  ],

  faqs: [
    {
      qEn: "How often are new historical documentaries published?",
      qZh: "频道多久更新一部新的历史纪录片？",
      aEn: "Because each episode requires in-depth archival research, custom scriptwriting, illustration sourcing, and meticulous editing, we release new deep-dive episodes every 2 to 3 weeks.",
      aZh: "由于每一期视频都需要进行深入的历史史料研读、结构化文案撰写、大量视觉素材与地图制作及高规格剪辑，我们通常每2至3周上线一部深度纪录片。"
    },
    {
      qEn: "Where do you find historical sources and references?",
      qZh: "视频中的历史考证与参考资料来自哪里？",
      aEn: "We draw primarily from university press publications (Cambridge, Oxford, Harvard), translated primary sources (such as Herodotus, ancient inscriptions, dynastic chronicles), and consensus modern historical research.",
      aZh: "主要来源于世界顶尖大学出版社（如剑桥、牛津、哈佛历史专著）、一手文献翻译（如希罗多德历史、石碑铭文、正史纪传）以及现代学术界公认的研究成果。"
    },
    {
      qEn: "Can I suggest or vote on which country history to cover next?",
      qZh: "观众可以建议或投票决定下一期制作哪个国家的历史吗？",
      aEn: "Absolutely! You can cast your vote in the Community Voting section right on this website, or leave a comment on our latest YouTube video. We prioritize the most requested civilizations.",
      aZh: "当然可以！您可以直接在本文档的“选题票选”版块投出宝贵一票，或在YouTube最新视频评论区留言。我们会优先根据观众呼声最高的选题推进制作。"
    },
    {
      qEn: "Are you open to sponsorships, voiceover collaborations, or translations?",
      qZh: "是否接受商业赞助、配音合作或多语言翻译合作？",
      aEn: "Yes! We welcome relevant educational, publishing, gaming, and documentary sponsorships, as well as creative collaborations. Please reach out via the Contact Form below.",
      aZh: "非常欢迎！我们欢迎契合的文化、教育、出版、历史策略游戏及高品质工具类品牌合作，亦欢迎学术考证与多语言传播合作，请通过下方联系表单与我们取得联系。"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
