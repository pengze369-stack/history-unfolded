/**
 * History Unfolded / History in Focus - Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = localStorage.getItem('hif_lang') || 'zh'; // Default to Chinese as user asked in Chinese
  let currentFilter = 'all';

  // DOM Elements
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const ytPlayerIframe = document.getElementById('ytPlayerIframe');
  const episodesGrid = document.getElementById('episodesGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const timelineFlow = document.getElementById('timelineFlow');
  const votingGrid = document.getElementById('votingGrid');
  const philosophyGrid = document.getElementById('philosophyGrid');
  const faqList = document.getElementById('faqList');
  const toastMsg = document.getElementById('toastMsg');
  const sourcesModal = document.getElementById('sourcesModal');
  const sourcesCloseBtn = document.getElementById('sourcesCloseBtn');
  const showSourcesBtn = document.getElementById('showSourcesBtn');
  const newsletterForm = document.getElementById('newsletterForm');
  const contactForm = document.getElementById('contactForm');

  // I18N DICTIONARY FOR STATIC STRINGS
  const I18N = {
    en: {
      navHome: "Home",
      navFeatured: "Latest Episode",
      navEpisodes: "Documentaries",
      navTimeline: "World Timeline",
      navVote: "Vote Topics",
      navAbout: "Philosophy",
      navContact: "Collaborate",
      subscribeBtn: "Subscribe",
      newEpisodeLive: "Latest Documentary Premiere",
      watchNowBtn: "Watch Full Documentary",
      exploreArchiveBtn: "Explore Archive",
      statTargetDuration: "15–20 Min Formats",
      statTargetLabel: "Avg Runtime",
      statFocusAreas: "Civilizations & Empires",
      statFocusLabel: "Core Focus",
      statEpisodesPlanned: "50+ Empires",
      statEpisodesLabel: "Planned Roadmap",
      statFormat: "Illustrated Chronicles",
      statFormatLabel: "Visual Craft",
      featuredBadge: "LATEST PREMIERE",
      chaptersTitle: "Episode Chapters & Milestones",
      viewSourcesBtn: "View Scholarly References",
      archiveBadge: "DOCUMENTARY ARCHIVE",
      archiveTitle: "Explore <span>Civilization</span> Chronicles",
      archiveSubtitle: "From the birth of agrarian states to world-shaping modern upheavals. Filter by production status or historical region.",
      filterAll: "All Chronicles",
      filterPublished: "Released",
      filterProduction: "In Production",
      filterAncient: "Ancient Civilizations",
      filterEurope: "European History",
      filterMideast: "Middle East",
      timelineBadge: "MACRO HISTORICAL CONTINUUM",
      timelineTitle: "The Great <span>Arcs</span> of History",
      timelineSubtitle: "Trace how each monumental epoch interlocks with the next, bridging continents through trade, conquest, and ideas.",
      voteBadge: "AUDIENCE CHOICE ROADMAP",
      voteTitle: "Vote For The Next <span>Civilization</span>",
      voteSubtitle: "We prioritize research and production based on community votes. Cast your ballot for the next deep-dive documentary.",
      voteButtonText: "Vote For This Episode",
      votedButtonText: "Voted",
      votesLabel: "Votes",
      philosophyBadge: "OUR NARRATIVE COMPASS",
      philosophyTitle: "How We Reconstruct <span>History</span>",
      philosophySubtitle: "Every episode is crafted with narrative precision, scholarly integrity, and evocative visual reconstructions.",
      faqBadge: "FREQUENT INQUIRIES",
      faqTitle: "Channel <span>FAQ</span> & Details",
      faqSubtitle: "Everything you need to know about our research pipeline, release schedule, and partnerships.",
      newsletterBadge: "THE CHRONICLER'S DISPATCH",
      newsletterTitle: "Receive Episode Releases & Bibliographies",
      newsletterDesc: "Join our dispatch to receive notifications for new documentaries, printable timeline infographics, and behind-the-scenes research notes.",
      newsletterPlaceholder: "Enter your email address...",
      newsletterSubmit: "Subscribe to Dispatch",
      contactBadge: "SPONSORSHIPS & INQUIRIES",
      contactTitle: "Partner With <span>History Unfolded</span>",
      contactSubtitle: "For brand sponsorships, academic collaborations, licensing, or media interviews, leave your message below.",
      contactEmailLabel: "Direct Email",
      contactChannelLabel: "Official Channel",
      formNameLabel: "Your Name / Organization",
      formNamePlaceholder: "e.g. Alexander Vance / Oxus Books",
      formEmailLabel: "Email Address",
      formEmailPlaceholder: "e.g. contact@example.com",
      formSubjectLabel: "Inquiry Type",
      formSubjectOption1: "Brand Sponsorship & Integration",
      formSubjectOption2: "Academic Research & Bibliography",
      formSubjectOption3: "Voiceover / Translation Collaboration",
      formSubjectOption4: "Viewer Suggestion & Other",
      formMsgLabel: "Message",
      formMsgPlaceholder: "Tell us about your proposal or project...",
      formSubmitBtn: "Send Message",
      footerTagline: "Every country has a past. Every empire leaves a legacy. Watch history unfold.",
      footerDisclaimer: "History Unfolded is an independent documentary channel. AI-assisted imagery serves as artistic, illustrative reconstructions alongside archival manuscripts. All historical research is referenced from scholarly and peer-reviewed sources.",
      footerCopyright: "© 2024–2026 History Unfolded (@HistoryinFocus-p3b). All Rights Reserved."
    },
    zh: {
      navHome: "首页",
      navFeatured: "最新纪录片",
      navEpisodes: "作品档案",
      navTimeline: "通史长廊",
      navVote: "选题票选",
      navAbout: "制作理念",
      navContact: "商业合作",
      subscribeBtn: "订阅频道",
      newEpisodeLive: "重磅深度首播",
      watchNowBtn: "立刻观看全片",
      exploreArchiveBtn: "浏览作品库",
      statTargetDuration: "15–20分钟精编",
      statTargetLabel: "平均时长",
      statFocusAreas: "文明演进与帝国史诗",
      statFocusLabel: "核心领域",
      statEpisodesPlanned: "50+ 帝国全集",
      statEpisodesLabel: "规划图谱",
      statFormat: "图文视听史诗",
      statFormatLabel: "制作形态",
      featuredBadge: "最新重磅首播",
      chaptersTitle: "本集章节与关键节点",
      viewSourcesBtn: "查看学术文献与参考书目",
      archiveBadge: "文明纪事档案库",
      archiveTitle: "探索全球 <span>文明</span> 盛衰风云",
      archiveSubtitle: "从城邦农耕文明起源，到深刻塑造近现代世界的转折关头。可按制作状态或地理区域快速筛选。",
      filterAll: "全部作品",
      filterPublished: "已上线",
      filterProduction: "正在制作",
      filterAncient: "古文明帝国",
      filterEurope: "欧洲通史",
      filterMideast: "中东与欧亚",
      timelineBadge: "宏观文明连续谱系",
      timelineTitle: "世界历史的 <span>宏伟长河</span>",
      timelineSubtitle: "洞悉各大关键历史纪元如何环环相扣，借由商贸、战火与哲学交融，铺就世界一体化的漫漫征途。",
      voteBadge: "观众共创选题规划",
      voteTitle: "票选您最期待的 <span>下一部国家史诗</span>",
      voteSubtitle: "我们依据社区与观众的投票呼声制定下一阶段的史料考证与制作优先级。快为您期待的文明投下一票！",
      voteButtonText: "为该选题投票",
      votedButtonText: "已投票支持",
      votesLabel: "票数",
      philosophyBadge: "频道创作基石",
      philosophyTitle: "我们如何 <span>重现历史</span>",
      philosophySubtitle: "以精湛剪辑、学术考据与沉浸式视觉复原，向每一位热爱历史的探索者致敬。",
      faqBadge: "常见疑问解答",
      faqTitle: "频道 <span>FAQ</span> 与常见问题",
      faqSubtitle: "关于史料来源、更新节奏、合作模式与版权说明的详细解答。",
      newsletterBadge: "编年史信件",
      newsletterTitle: "获取最新剧集提醒与高清参考史料",
      newsletterDesc: "订阅编年史邮件，第一时间接收新片上线提醒、专属高清年表壁纸及参考书目考据精编。",
      newsletterPlaceholder: "输入您的电子邮箱...",
      newsletterSubmit: "订阅信件",
      contactBadge: "商务赞助与学术联络",
      contactTitle: "与 <span>History Unfolded</span> 携手合作",
      contactSubtitle: "欢迎优质品牌赞助、文史出版联名、海内外多语言传播及观众深度反馈。",
      contactEmailLabel: "商务联络邮箱",
      contactChannelLabel: "官方YouTube频道",
      formNameLabel: "您的姓名 / 机构名称",
      formNamePlaceholder: "例如：张先生 / 某文化出版传媒",
      formEmailLabel: "电子邮箱",
      formEmailPlaceholder: "例如：contact@example.com",
      formSubjectLabel: "合作意向分类",
      formSubjectOption1: "品牌商务赞助与整合营销",
      formSubjectOption2: "学术文献支持与史料考证",
      formSubjectOption3: "多语言配音与海外译制合作",
      formSubjectOption4: "选题建议与其他商务交流",
      formMsgLabel: "详细留言",
      formMsgPlaceholder: "请详细说明您的合作意向或需求...",
      formSubmitBtn: "发送合作留言",
      footerTagline: "每一个国家都有其过往，每一座帝国都留下遗产。见证历史画卷徐徐展开。",
      footerDisclaimer: "History Unfolded 为独立历史纪录片频道。AI辅助视觉复原仅作为艺术再现形式，与历史存世手稿及地图互为印证。所有史料与时间线均以权威学术专著与同行评审文献为准绳。",
      footerCopyright: "© 2024–2026 History Unfolded (@HistoryinFocus-p3b). 保留所有权利。"
    }
  };

  // Toast Function
  function showToast(text, icon = 'fas fa-check-circle') {
    if (!toastMsg) return;
    toastMsg.innerHTML = `<i class="${icon}"></i> <span>${text}</span>`;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 3800);
  }

  // Language switcher
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hif_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'zh' ? 'EN' : '中';
      langToggleBtn.title = lang === 'zh' ? 'Switch to English' : '切换为中文';
    }

    // Update static texts
    const strings = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = strings[key];
        } else {
          el.innerHTML = strings[key];
        }
      }
    });

    // Update dynamic sections
    renderFeaturedEpisode();
    renderEpisodesGrid();
    renderTimeline();
    renderVotingGrid();
    renderPhilosophy();
    renderFAQ();
  }

  // Render Featured Video Section
  function renderFeaturedEpisode() {
    const ep = SITE_DATA.featuredEpisode;
    const titleEl = document.getElementById('featuredVideoTitle');
    const descEl = document.getElementById('featuredVideoDesc');
    const chaptersList = document.getElementById('chaptersList');

    if (titleEl) titleEl.textContent = ep.title[currentLang] || ep.title.en;
    if (descEl) descEl.textContent = ep.description[currentLang] || ep.description.en;

    if (chaptersList) {
      chaptersList.innerHTML = ep.chapters.map((ch, idx) => {
        const title = currentLang === 'zh' ? ch.titleZh : ch.titleEn;
        // calculate seconds from mm:ss
        const parts = ch.time.split(':');
        const seconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        return `
          <li class="chapter-item" data-seconds="${seconds}">
            <span class="chapter-time">${ch.time}</span>
            <span class="chapter-name">${title}</span>
          </li>
        `;
      }).join('');

      // Add click listener to chapters to seek video
      chaptersList.querySelectorAll('.chapter-item').forEach(item => {
        item.addEventListener('click', () => {
          const sec = item.getAttribute('data-seconds');
          if (ytPlayerIframe) {
            ytPlayerIframe.src = `https://www.youtube.com/embed/${ep.id}?autoplay=1&start=${sec}`;
            ytPlayerIframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
            showToast(currentLang === 'zh' ? `已跳转至 ${item.querySelector('.chapter-name').textContent}` : `Jumped to chapter: ${item.querySelector('.chapter-name').textContent}`);
          }
        });
      });
    }

    // Modal References
    const modalSourcesList = document.getElementById('modalSourcesList');
    if (modalSourcesList) {
      modalSourcesList.innerHTML = ep.sources.map(s => `
        <li style="margin-bottom:0.8rem; padding-left:1.2rem; position:relative; color:var(--text-muted);">
          <span style="position:absolute; left:0; color:var(--gold-primary);">▸</span> ${s}
        </li>
      `).join('');
    }
  }

  // Render Episodes Grid with Filter
  function renderEpisodesGrid() {
    if (!episodesGrid) return;
    const episodes = SITE_DATA.episodes;

    const filtered = episodes.filter(ep => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'published') return ep.status === 'published';
      if (currentFilter === 'production') return ep.status !== 'published';
      if (currentFilter === 'ancient') return ep.category.toLowerCase().includes('ancient');
      if (currentFilter === 'europe') return ep.category.toLowerCase().includes('european');
      if (currentFilter === 'mideast') return ep.category.toLowerCase().includes('middle east');
      return true;
    });

    episodesGrid.innerHTML = filtered.map(ep => {
      const isPublished = ep.status === 'published';
      const title = ep.title[currentLang] || ep.title.en;
      const synopsis = ep.synopsis[currentLang] || ep.synopsis.en;
      const badgeClass = ep.status;
      const badgeText = ep.tag;
      const linkHtml = isPublished 
        ? `<a href="https://www.youtube.com/watch?v=${ep.id}" target="_blank" rel="noopener" class="card-link-btn btn-play-ep" data-id="${ep.id}">
             <span>${currentLang === 'zh' ? '立即观看' : 'Watch Now'}</span>
             <i class="fas fa-arrow-right"></i>
           </a>`
        : `<span class="card-link-btn" style="color:var(--text-dim); cursor:default;">
             <span>${currentLang === 'zh' ? '正在制作' : 'In Pipeline'}</span>
             <i class="fas fa-clock"></i>
           </span>`;

      return `
        <article class="episode-card" data-category="${ep.category}" data-status="${ep.status}">
          <div class="card-thumb-wrap">
            <img src="${ep.thumbnail}" alt="${title}" class="card-thumb" loading="lazy">
            <span class="card-status-badge ${badgeClass}">${badgeText}</span>
            <span class="card-duration-badge"><i class="far fa-clock"></i> ${ep.duration}</span>
          </div>
          <div class="card-body">
            <span class="card-category">${ep.category}</span>
            <h3 class="card-title">${title}</h3>
            <p class="card-synopsis">${synopsis}</p>
            <div class="card-footer">
              <span class="card-date">${ep.date}</span>
              ${linkHtml}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click to play for cards
    episodesGrid.querySelectorAll('.btn-play-ep').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        if (id && ytPlayerIframe) {
          e.preventDefault();
          ytPlayerIframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
          document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
          showToast(currentLang === 'zh' ? '已在主播放器载入本片' : 'Loaded video in main player');
        }
      });
    });
  }

  // Filter Pills Event
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      renderEpisodesGrid();
    });
  });

  // Render Interactive Timeline
  function renderTimeline() {
    if (!timelineFlow) return;
    const eras = SITE_DATA.timelineEras;
    timelineFlow.innerHTML = eras.map((era, index) => {
      const isLeft = index % 2 === 0;
      const title = era.title[currentLang] || era.title.en;
      const desc = era.desc[currentLang] || era.desc.en;
      return `
        <div class="timeline-node ${isLeft ? 'left' : 'right'}">
          <div class="timeline-marker"></div>
          <div class="timeline-card">
            <span class="timeline-era">${era.era}</span>
            <h4 class="timeline-title">${title}</h4>
            <p class="timeline-desc">${desc}</p>
            <div class="timeline-location">
              <i class="fas fa-location-dot" style="color:var(--gold-primary);"></i>
              <span>${era.featuredLocation}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Community Voting
  function renderVotingGrid() {
    if (!votingGrid) return;
    const topics = SITE_DATA.votingTopics;
    const votedMap = JSON.parse(localStorage.getItem('hif_voted_map') || '{}');
    const localVotes = JSON.parse(localStorage.getItem('hif_vote_counts') || '{}');

    // total votes for percentage calculation
    let totalVotes = 0;
    topics.forEach(t => {
      const currentCount = localVotes[t.id] !== undefined ? localVotes[t.id] : t.votes;
      totalVotes += currentCount;
    });

    votingGrid.innerHTML = topics.map(t => {
      const title = currentLang === 'zh' ? t.titleZh : t.titleEn;
      const currentCount = localVotes[t.id] !== undefined ? localVotes[t.id] : t.votes;
      const pct = Math.round((currentCount / totalVotes) * 100);
      const isVoted = !!votedMap[t.id];
      const btnText = isVoted 
        ? (currentLang === 'zh' ? '已投票支持' : 'Voted')
        : (currentLang === 'zh' ? '为该选题投票' : 'Vote For This Episode');

      return `
        <div class="vote-card" data-id="${t.id}">
          <img src="${t.image}" alt="${title}" class="vote-thumb" loading="lazy">
          <div class="vote-content">
            <span class="vote-cat">${t.category}</span>
            <h4 class="vote-title">${title}</h4>
            <div class="vote-progress-wrap">
              <div class="vote-progress-labels">
                <span class="vote-count-num">${currentCount} ${currentLang === 'zh' ? '票' : 'Votes'}</span>
                <span class="vote-pct-num">${pct}%</span>
              </div>
              <div class="vote-progress-bar">
                <div class="vote-progress-fill" style="width: ${pct}%;"></div>
              </div>
            </div>
            <button class="vote-btn ${isVoted ? 'voted' : ''}" ${isVoted ? 'disabled' : ''}>
              <i class="${isVoted ? 'fas fa-check' : 'fas fa-thumbs-up'}"></i>
              <span>${btnText}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Add vote button click handlers
    votingGrid.querySelectorAll('.vote-card').forEach(card => {
      const btn = card.querySelector('.vote-btn');
      const id = card.getAttribute('data-id');
      btn.addEventListener('click', () => {
        const votedMap = JSON.parse(localStorage.getItem('hif_voted_map') || '{}');
        if (votedMap[id]) return;

        const localVotes = JSON.parse(localStorage.getItem('hif_vote_counts') || '{}');
        const topic = topics.find(t => t.id === id);
        const currentCount = localVotes[id] !== undefined ? localVotes[id] : topic.votes;
        
        localVotes[id] = currentCount + 1;
        votedMap[id] = true;

        localStorage.setItem('hif_vote_counts', JSON.stringify(localVotes));
        localStorage.setItem('hif_voted_map', JSON.stringify(votedMap));

        showToast(currentLang === 'zh' ? '感谢您的宝贵一票！该选题已提升制作排期' : 'Thank you for your vote! Added to priority list.');
        renderVotingGrid();
      });
    });
  }

  // Render Creator Philosophy
  function renderPhilosophy() {
    if (!philosophyGrid) return;
    const items = SITE_DATA.creatorPhilosophy;
    philosophyGrid.innerHTML = items.map(item => {
      const title = currentLang === 'zh' ? item.titleZh : item.titleEn;
      const desc = currentLang === 'zh' ? item.descZh : item.descEn;
      return `
        <div class="philosophy-card">
          <div class="philosophy-icon-wrap">
            <i class="${item.icon}"></i>
          </div>
          <h3 class="philosophy-title">${title}</h3>
          <p class="philosophy-desc">${desc}</p>
        </div>
      `;
    }).join('');
  }

  // Render FAQ
  function renderFAQ() {
    if (!faqList) return;
    const faqs = SITE_DATA.faqs;
    faqList.innerHTML = faqs.map((f, i) => {
      const q = currentLang === 'zh' ? f.qZh : f.qEn;
      const a = currentLang === 'zh' ? f.aZh : f.aEn;
      return `
        <div class="faq-item ${i === 0 ? 'active' : ''}">
          <button class="faq-question-btn">
            <span>${q}</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p>${a}</p>
          </div>
        </div>
      `;
    }).join('');

    faqList.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  // Navbar Scroll Blur Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Theme Switcher (Dark Imperial vs Sepia Parchment)
  const savedTheme = localStorage.getItem('hif_theme') || 'dark';
  if (savedTheme === 'sepia') {
    document.body.classList.add('theme-sepia');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isSepia = document.body.classList.toggle('theme-sepia');
      localStorage.setItem('hif_theme', isSepia ? 'sepia' : 'dark');
      themeToggleBtn.innerHTML = isSepia ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-scroll"></i>';
      showToast(isSepia ? (currentLang === 'zh' ? '已切换至羊皮纸色调' : 'Switched to Parchment Mode') : (currentLang === 'zh' ? '已切换至深色帝国黑' : 'Switched to Obsidian Mode'));
    });
  }

  // Language Switch Button
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // Sources Modal
  if (showSourcesBtn && sourcesModal) {
    showSourcesBtn.addEventListener('click', () => {
      sourcesModal.classList.add('open');
    });
  }
  if (sourcesCloseBtn && sourcesModal) {
    sourcesCloseBtn.addEventListener('click', () => {
      sourcesModal.classList.remove('open');
    });
  }
  window.addEventListener('click', (e) => {
    if (e.target === sourcesModal) {
      sourcesModal.classList.remove('open');
    }
  });

  // Newsletter Form
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        showToast(currentLang === 'zh' ? `已成功订阅编年史信件：${email}` : `Subscribed successfully: ${email}`);
        newsletterForm.reset();
      }
    });
  }

  // Contact Form
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value;
      showToast(currentLang === 'zh' ? `感谢您的留言，${name}！我们将尽快与您取得联系。` : `Thank you, ${name}! Your inquiry has been sent.`);
      contactForm.reset();
    });
  }

  // Initialize
  setLanguage(currentLang);
});
