# KPI 年度绩效自评 Skill

> 把零散的工作成果，变成让 HR 和老板眼前一亮的绩效语言

**会灵那（wilingna）出品** · 适用于 Claude / Open Claude

---

## 这个 Skill 能做什么

- 根据你的 KPI 指标和完成情况，**生成专业的绩效自评**
- 把"我做了什么"转化为"我带来了什么价值"
- 输出**标准版 + 亮眼版（冲高分）+ 优化建议**三个版本
- 帮你优化已有的自评草稿，逐条点评+改写建议
- 支持各种岗位：HR、产品、技术、运营、市场……

---

## 文件结构

```
kpi-self-review/
├── SKILL.md                          # Claude Skill 主文件
├── kpi-self-review-tool.html         # 独立 HTML 工具（可直接部署）
├── references/
│   └── example-outputs.md            # 示例自评输出参考
└── README.md
```

---

## 使用方式

### 方式一：Claude Skill（推荐）

1. 在 Claude 对话中，把 `SKILL.md` 的内容作为 System Prompt 或 Project 说明
2. 直接告诉 Claude：**"帮我用 KPI 自评 skill 写自评"**
3. 粘贴你的 KPI 指标和完成情况，Claude 会按流程生成

**适用平台：**
- [Claude.ai](https://claude.ai) → Projects 功能
- [Open Claude (openclauw.com)](https://openclauw.com) → 直接加载 skill

### 方式二：HTML 工具（视频演示 / 粉丝福利）

直接打开 `kpi-self-review-tool.html`，或部署到：
- GitHub Pages
- Vercel / Netlify（静态托管，免费）

**工具功能：**
- 分步骤填写信息
- 支持多条 KPI 指标，自动计算达成率
- 调用 Claude API 生成三版自评
- 一键复制，直接粘贴到绩效系统

**API 说明：** 工具使用 Anthropic API。在 Claude.ai 中打开时自动使用当前账号；独立部署时需配置 API Key（见下方）。

### 方式三：独立部署配置 API Key

在 `kpi-self-review-tool.html` 的 `<script>` 部分，工具通过 Anthropic API 直接调用。如果你要部署给用户使用，建议：

1. 搭建一个简单的后端代理（保护 API Key 不暴露在前端）
2. 或用 Cloudflare Worker 做转发（参考 [zengen.art 方案](https://github.com/wilingna)）

---

## 如何在 Open Claude 中使用

1. 打开 [openclauw.com](https://openclauw.com)
2. 新建对话，粘贴 `SKILL.md` 的全文作为系统提示
3. 告诉 Claude "帮我写KPI自评"，按提示填写信息即可

---

## 自评写作核心原则（Skill 内置）

| 原则 | 说明 |
|------|------|
| **结果优先** | 先说结果/影响，再说做了什么 |
| **量化为王** | 能数字化的一定数字化 |
| **向上对齐** | 与公司战略/部门目标呼应 |
| **亮点聚焦** | 精选3-5个真正有影响力的事项 |
| **平衡诚实** | 不足要写，但要带改进方向 |

---

## 示例输出

见 `references/example-outputs.md`

涵盖：
- HR 招聘专员（KPI 基本达成）
- 产品经理（有指标未达成）
- 常用开头句式库

---

## 作者

**会灵那 (Hui Ling Na)** · HR Lead × AI 内容创作者

- 微信视频号：会灵那
- 小红书 / B站 / 抖音：@会灵那
- GitHub: [wilingna](https://github.com/wilingna)

---

## License

MIT · 欢迎 fork 和二次创作，注明来源即可
