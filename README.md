<div align="center">

# 📊 KPI Self-Review

### Turn scattered work outcomes into performance language that makes HR and your boss take notice.
### 把零散的工作成果，变成让 HR 和老板眼前一亮的绩效语言。

**5–10 minutes vs. 1–2 hours of writing — same review, ten times less pain.**
**5–10 分钟 vs. 1–2 小时手写——同一份自评，痛苦减一个数量级。**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://wilingna.github.io/kpi-self-review/)
[![Claude Skill](https://img.shields.io/badge/Claude-Skill-orange.svg)](https://claude.ai/)
[![No Backend](https://img.shields.io/badge/data-stays%20in%20browser-blue)](https://github.com/wilingna/kpi-self-review)
[![Stars](https://img.shields.io/github/stars/wilingna/kpi-self-review?style=social)](https://github.com/wilingna/kpi-self-review)

[**🔗 Try it now**](https://wilingna.github.io/kpi-self-review/) · [English](#english) · [中文](#中文) · [How It Works](#-how-it-works--工作流程) · [Quick Start](#-quick-start)

</div>

---

## 🎯 TL;DR

**EN** — Performance review season is brutal. You did good work all year, but writing the self-review takes hours and the language always sounds either flat ("completed assigned tasks") or hollow ("aggressively drove cross-functional alignment"). This Skill takes a photo of your KPI sheet, lets you input rough keywords for what you actually did, and outputs **formal, results-grounded performance language** plus a weighted score and a formatted Excel file. Works for any role, any country, any KPI structure.

**中文** — 一到绩效季就头疼。一年活做了不少，但写自评要么写得寡淡（"完成既定任务"），要么写得空洞（"强力推动跨部门协同"）。这个 Skill 拍一张你的 KPI 表照片，你只需要填几个关键词和数据，它会帮你输出**正式、有结果支撑的绩效语言**，加权算总分，导出格式化 Excel。任何岗位、任何国家、任何 KPI 结构都能用。

---

<a name="english"></a>
## 🌍 English

### The Problem with Self-Reviews

You did the work. The work was real. But when you sit down to write the review:

- You can't remember everything you did 6 months ago
- You don't know how to phrase "I helped" in a way that sounds substantial
- You under-claim (modest writers lose points) or over-claim (everyone smells it)
- Each KPI has different weighting and you have to do math
- It takes 1–2 hours and your boss reads it for 90 seconds

### What This Does

Upload your KPI sheet → input rough keywords for each → get back **formal performance language**, weighted scoring, and a polished Excel export. The whole loop runs in your browser; the AI only sees what you paste in.

| Stage · 阶段 | You do · 你做 | AI does · AI 做 |
|---|---|---|
| **1. Upload** | Snap a photo of your KPI sheet | Auto-detect KPIs, sub-items, and weights |
| **2. Confirm** | Quick check, edit if needed | — |
| **3. Fill** | Type rough keywords + numbers | Convert to formal review language |
| **4. Score** | Drag the slider | Auto-compute weighted total |
| **5. Export** | One click | Generate formatted Excel file |

---

<a name="中文"></a>
## 🇨🇳 中文

### 自评为什么这么难写

活你确实干了，工作也是真的。但坐下来写的时候——

- 半年前做过的事根本想不起来
- "帮忙做了点事"怎么写才显得有分量？
- 写谦虚了被扣分，写浮夸了大家心知肚明
- 每个指标权重不一样，还得算数
- 写要 1-2 小时，老板读 90 秒

### 这套工具怎么做

上传 KPI 表 → 关键词描述完成情况 → 拿到**正式的绩效语言** + 加权打分 + 排版好的 Excel。整个流程在浏览器里跑，AI 只看你贴进去的东西。

| 阶段 | 你做的事 | AI 帮你做的事 |
|---|---|---|
| **1. 上传** | 截图 / 拍照上传 KPI 表 | 自动识别所有指标、子指标、权重 |
| **2. 确认** | 检查一眼，按需微调 | — |
| **3. 填写** | 写几个关键词和数据 | 生成正式的绩效语言描述 |
| **4. 打分** | 拖滑块调整 | 自动加权计算总分 |
| **5. 导出** | 点一下 | 生成带格式的 Excel 表 |

**全程约 5–10 分钟**（手写自评通常需要 1–2 小时）

---

## ⚙️ How It Works · 工作流程

```
┌──────────────┐    OCR     ┌──────────────┐   AI rewrite   ┌──────────────┐
│ KPI 表照片   │──────────→│ 结构化指标   │──────────────→│ 绩效语言文本 │
│ KPI screenshot│           │ Structured KPI│                │ Polished prose│
└──────────────┘            └──────┬───────┘                └──────┬───────┘
                                   │                                │
                            你填关键词 + 分数               加权计算 · weighting
                            keywords + scores                       │
                                   ▼                                ▼
                            ┌─────────────────────────────────────────┐
                            │   📥 Excel 导出 · formatted Excel export │
                            └─────────────────────────────────────────┘
```

---

## ✅ What's Supported · 适用场景

- ✅ Qualitative KPIs (e.g. "drive X initiative", "improve Y satisfaction") · 定性指标（"推进 XX 落地""提升 XX 满意度"）
- ✅ Quantitative KPIs (target vs. actual) · 定量指标（目标值 vs 实际值）
- ✅ **Mixed qualitative + quantitative** (the most common real-world case) · **定性 + 定量混合**（最常见）
- ✅ Multi-level sub-KPIs · 多层级子指标
- ✅ Custom weights with live validation (sums to 100%) · 自定义权重，实时校验总和 = 100%
- ✅ 100-point scoring (60–100) with weighted total · 百分制打分，加权总分
- ✅ **Any role**: HR, product, eng, ops, marketing, admin... · **任何岗位**：HR / 产品 / 技术 / 运营 / 市场 / 行政……

---

## 🚀 Quick Start

### Option A — Use it online · 直接在线用（推荐）

👉 **[wilingna.github.io/kpi-self-review](https://wilingna.github.io/kpi-self-review/)**

Open the link, paste your API key, upload your KPI sheet. Done.
打开链接，填 API Key，上传 KPI 表。完事。

### Option B — Use it as a Claude Skill · 作为 Claude Skill 使用

Copy the contents of [`SKILL.md`](./SKILL.md) into a Claude Project. Then just talk to Claude — it will guide you through the review.
把 [`SKILL.md`](./SKILL.md) 内容复制到 Claude 的 Project 说明里，直接对话即可。

### Option C — Run locally · 本地运行

```bash
git clone https://github.com/wilingna/kpi-self-review
cd kpi-self-review
open kpi-pro-universal.html   # macOS · or just double-click
```

Single HTML file. Vanilla JS. No backend, no build, no dependencies.
单文件 HTML，原生 JS，无后端、无构建、无依赖。

### Option D — Self-host · 部署到你自己的域名

See [`DEPLOY.md`](./DEPLOY.md). GitHub Pages + Cloudflare Worker, ~15 minutes.
参考 [`DEPLOY.md`](./DEPLOY.md)，GitHub Pages + Cloudflare Worker，约 15 分钟。

---

## 🔒 Privacy · 隐私

This is **performance review data** — it's sensitive. So:
这是**绩效数据**，敏感程度不低。所以：

- ✅ All processing happens in your browser · 所有处理在你浏览器里完成
- ✅ Your KPI sheet never touches my servers · 你的 KPI 表永远不会进入我的服务器
- ✅ API key stored in localStorage only · API Key 只存本地浏览器
- ✅ Only the text you paste in goes to the AI provider (Claude / OpenAI via your own key) · 只有你贴进去的文本会发给 AI 提供商（用你自己的 API Key）
- ✅ Code is fully open source — audit it yourself · 代码全开源，欢迎审计

> **TL;DR** — your boss can't see what you typed, your company IT can't see what you typed, and I can't see what you typed. Only you and your chosen AI provider.
> **一句话** — 你老板看不到、你公司 IT 看不到、我也看不到。只有你和你选的 AI 提供商。

---

## ❓ FAQ

<details>
<summary><b>Q: Will my boss know I used AI? · 我老板会发现我用了 AI 吗？</b></summary>

The output is grounded in **your actual numbers and keywords**. It's not generated content — it's polished translation of what you typed in. The same way using Grammarly doesn't mean Grammarly wrote your email.
输出基于**你自己填的真实数据和关键词**。这不是 AI 生成内容，是把你说的话翻译成正式表达。和你用 Grammarly 改邮件一个性质，没人会说 Grammarly 帮你写了邮件。

</details>

<details>
<summary><b>Q: How much does it cost to run? · 跑一次多少钱？</b></summary>

A complete review run costs about **$0.05–$0.15** in API fees (your own key, OpenAI or Claude). A $5 top-up easily covers a year of reviews.
完整跑一次大约 **$0.05-0.15**（用你自己的 OpenAI 或 Claude API Key）。充 $5 够一整年的绩效季用。

</details>

<details>
<summary><b>Q: My KPI sheet is in [language X] — does it work? · 我的 KPI 表是 X 语言，能用吗？</b></summary>

OCR + AI rewriting both support major languages (English, Chinese, Japanese, Korean, etc.). For now best results are in Chinese and English.
OCR 和 AI 改写都支持主要语言（中、英、日、韩等）。目前中英文效果最好。

</details>

<details>
<summary><b>Q: What if my company uses a custom KPI system? · 我们公司有自定义 KPI 体系怎么办？</b></summary>

The tool detects structure dynamically from your screenshot — multi-level sub-items, weights, mixed qualitative/quantitative all work out of the box. If something specific breaks, [open an issue](https://github.com/wilingna/kpi-self-review/issues).
工具会从你的截图里动态识别结构——多层子项、权重、定性定量混合都开箱即用。有特殊情况识别不出来，[提个 issue](https://github.com/wilingna/kpi-self-review/issues)。

</details>

<details>
<summary><b>Q: Can I use it for someone else's review (e.g., as a manager)? · 我能用它给下属写评估吗？</b></summary>

Technically yes, but be careful — manager-side reviews have different tone requirements (more direct, more developmental). The current prompt is tuned for self-reviews. A manager-mode is on the roadmap.
技术上可以，但要小心——经理评下属的语气要求不一样（更直接、更发展性）。现在的 prompt 是为自评调的。经理模式在 roadmap 里。

</details>

---

## 🛣 Roadmap

- [ ] Manager-side review mode · 经理评下属模式
- [ ] OKR support (not just KPIs) · 支持 OKR
- [ ] Multi-quarter trend tracking · 多季度趋势追踪
- [ ] PDF export with company branding · 带公司品牌的 PDF 导出
- [ ] More language polish for Japanese / Korean / Spanish · 日韩西语等语言优化

Got a feature need? [Open an issue](https://github.com/wilingna/kpi-self-review/issues).
有需求？[提个 issue](https://github.com/wilingna/kpi-self-review/issues)。

---

## 📦 The wilingna Methodology Family · 方法论家族

All built on the same idea: **AI as a system, not a chatbot.**
都基于同一个想法：**AI 是系统，不是聊天机器人。**

| Repo | What it does |
|---|---|
| **kpi-self-review** (this repo) | KPI review pain killer · 绩效自评神器 |
| [PPTFlux](https://github.com/wilingna/PPTFlux) | 4-agent pipeline → interactive HTML decks · 4 Agent 闭环出 PPT |
| [ai-content-pipeline](https://github.com/wilingna/ai-content-pipeline) | 7-agent content production pipeline · 7 Agent 内容生产线 |
| [ai-decision-5steps](https://github.com/wilingna/ai-decision-5steps) | 5-tool decision framework · 5 工具决策框架 |
| [hermes-core](https://github.com/wilingna/hermes-core) | The glue between two agents · Agent 间的翻译层 |
| [ai-ppt-toolkit](https://github.com/wilingna/ai-ppt-toolkit) | The original 3-tool methodology · 三件套原版 |

---

## 📜 License

MIT — use it, fork it, ship it.

---

## 👋 About

Built by **wilingna** ([@wilingna](https://github.com/wilingna))
Big-tech HR turned AI Systems Architect. I spent **22 years** writing performance reviews, including for myself. Then I built this so I'd never have to do it the slow way again.
大厂 HR 出身的 AI Systems Architect。我自己写了 **22 年**绩效评估，最后受不了，做了这个工具让自己再也不用慢慢写。

- 🎬 小红书 / 抖音 / B 站 / 微信视频号: **会灵那**
- 💻 GitHub: [@wilingna](https://github.com/wilingna)

---

<div align="center">

### ⭐ If this saves you a Sunday afternoon during review season, drop a star.
### ⭐ 如果它帮你省了绩效季的一个周日下午，点个 star 吧。

**Better — share it with a colleague who's still hand-writing theirs.**
**更好的——转给那个还在手写自评的同事。**

</div>
