# History Unfolded (@HistoryinFocus-p3b) - 官方个人网站

> **“每一个国家都有其过往，每一座帝国都留下遗产。见证历史画卷徐徐展开。”**  
> *"Every country has a past. Every empire leaves a legacy. Watch history unfold."*

专为 YouTube 历史纪录片频道 **[History Unfolded (@HistoryinFocus-p3b)](https://www.youtube.com/@HistoryinFocus-p3b)** 量身打造的高品质个人官方网站。采用古典典雅黑金电影级视效（Cinematic Editorial Imperial Gold & Obsidian），深度契合历史人文纪录片风格。

---

## 🌟 核心特色与功能亮点

1. **宏大沉浸的频道首屏（Cinematic Hero）**：
   - 提取自 YouTube 官方频道的最新高分辨率横幅与头像徽章。
   - 动态发光状态指示灯（“重磅深度首播”）。
   - 一键直达 YouTube 订阅（集成 `?sub_confirmation=1` 快捷弹窗）。
   - 核心特色指标栏（15–20分钟精编、全球帝国史诗、50+剧集规划、AI生动视觉复原）。

2. **最新重磅纪录片影音剧场（Featured Premiere Player）**：
   - 内嵌 16:9 响应式 YouTube 官方播放器（首期重磅：《The ENTIRE History of Iran in 18 Minutes》）。
   - **交互式章节时间轴（Interactive Chapters）**：点击任意历史节点（如居鲁士大帝、亚历山大远征、萨珊波斯、伊斯兰黄金时代），播放器自动精准跳转至对应秒数！
   - **学术考订参考书目弹窗（Scholarly Bibliography Modal）**：公开每一期视频所参考的学术专著（如剑桥伊朗史、希罗多德著作等），树立高公信力学术标杆。

3. **文明纪事作品库与制作路线图（Documentary & Pipeline Archive）**：
   - 支持多分类即时筛选：全部作品、已上线、制作中、古文明帝国、欧洲通史、中东与欧亚。
   - 每部作品带有制作进度状态标签（Published, In Production, Scripting, Research）、预计时长与文明简介。

4. **宏观世界历史长廊（Interactive World Timeline）**：
   - 交互式宏观通史时间线，从美索不达米亚与古波斯，到古典时代、拜占庭与丝绸之路，再到火药帝国。

5. **观众共创选题票选系统（Audience Choice Voting）**：
   - 观众可以直接为期待制作的下一部国家通史投票（如拜占庭帝国、古埃及、蒙古远征、奥斯曼帝国）。
   - 本地 `localStorage` 数据持久化，实时动画计算百分比与票数，投票后即时反馈感谢提示。

6. **双语即时切换（Bilingual EN / 中文）**：
   - 顶部导航栏一键无缝切换英文与中文，满足全球海外观众与中文母语观众的浏览需求。

7. **深色帝国黑 / 羊皮纸色调（Dark Obsidian & Sepia Modes）**：
   - 支持一键切换古典羊皮纸模式与深邃黑金夜间模式。

8. **商业赞助与学术联络（Partnership & Contact Form）**：
   - 规范化商务咨询分类（品牌赞助、学术考订、多语言译制、选题交流）。

9. **编年史邮件订阅（The Chronicler's Dispatch）**：
   - 方便观众订阅以获取新片上线提醒、高清历史图表与考订资料。

---

## 📁 项目目录结构

```text
history-unfolded-website/
├── index.html        # 网站主页面结构（SEO元数据、OpenGraph与语义化布局）
├── css/
│   └── style.css     # 响应式排版、黑金古典调色、毛玻璃微质感与动画样式
├── js/
│   ├── data.js       # 频道核心数据源（剧集列表、双语字典、章节时间、参考书目）
│   └── app.js        # 前端交互引擎（双语切换、时间轴跳转、投票计算、表单验证）
└── README.md         # 部署说明与后续更新维护指南
```

---

## 🚀 本地快速预览

1. **直接双击打开**：
   双击根目录下的 `index.html`，即可在任何现代浏览器中直接体验所有功能！

2. **使用 Node.js 静态服务器预览**（推荐）：
   在项目目录下打开终端运行：
   ```bash
   npx serve .
   ```
   然后在浏览器打开 `http://localhost:3000` 即可。

---

## 🌐 免费一键上线部署指南

您可以将此网站完全免费部署到全球高速 CDN 上，拥有自己的专属网址：

### 选项 A：GitHub Pages（最推荐）
1. 在 GitHub 上新建一个仓库，例如 `history-unfolded-website`。
2. 将此文件夹中的代码上传到该仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit of History Unfolded website"
   git remote add origin https://github.com/<你的用户名>/history-unfolded-website.git
   git branch -M main
   git push -u origin main
   ```
3. 在 GitHub 仓库设置中找到 **Pages**，Source 选择 `main` 分支的 `/ (root)`，保存即可。
4. 几分钟后即可通过 `https://<你的用户名>.github.io/history-unfolded-website` 访问！

### 选项 B：Vercel / Netlify / Cloudflare Pages（零配置）
1. 登录 [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/)。
2. 直接拖入 `history-unfolded-website` 文件夹，或关联 GitHub 仓库。
3. 几秒钟内即可自动生成全球 CDN 加速的正式网址，并支持一键绑定您的自定义域名（如 `historyunfolded.tv`）。

---

## ✍️ 日常如何添加或更新新发布的视频？

当您在 YouTube 频道发布了新的纪录片时，**无需改动复杂的 HTML 结构**，只需在 [`js/data.js`](file:///C:/Users/admin/.gemini/antigravity/scratch/history-unfolded-website/js/data.js) 中更新即可：

1. 打开 `js/data.js`：
2. 将 `featuredEpisode` 中的 `id` 替换为新视频的 YouTube Video ID（例如 `31lDgADoeH4`）。
3. 填写对应的双语标题、章节时间节点与参考学术书目。
4. 刷新网页，网站就会自动同步渲染最新的播放器、章节跳转与档案卡片！
