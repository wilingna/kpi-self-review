# 部署指南 — KPI自评生成器 Pro

## 架构

```
用户浏览器
    ↓ 访问
GitHub Pages (kpi-pro-universal.html)
    ↓ API 请求
Cloudflare Worker (api.zengen.art/v1/messages)
    ↓ 转发
Anthropic API
```

API Key 存在 Cloudflare Worker 的加密环境变量里，前端代码里没有任何密钥，安全。

---

## Step 1：部署 Cloudflare Worker

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 左侧 **Workers & Pages** → **Create** → **Create Worker**
3. 把 `cloudflare-worker.js` 的内容全部粘贴进编辑器
4. 点 **Deploy**

**配置 API Key（关键）：**
- Worker 详情页 → **Settings** → **Variables and Secrets**
- 点 **Add variable** → 选 **Secret**
- Variable name: `ANTHROPIC_API_KEY`
- Value: 你的 `sk-ant-...` 密钥
- 点 **Deploy**

**绑定到你的域名（可选）：**
- 你已有 `api.zengen.art`，在 Worker 的 **Settings → Triggers → Custom Domains** 里绑定
- 或在 Cloudflare DNS 里加一条路由规则：`api.zengen.art/v1/messages` → 指向这个 Worker

**验证 Worker 是否工作：**
```bash
curl -X POST https://api.zengen.art/v1/messages \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-4-20250514","max_tokens":100,"messages":[{"role":"user","content":"hi"}]}'
```
返回正常 JSON 就成功了。

---

## Step 2：推送到 GitHub Pages

```bash
# 在你的 repo 里（建议放在 kpi-self-review/ 子目录）
git clone https://github.com/wilingna/kpi-self-review  # 或新建 repo
cd kpi-self-review

# 把文件放进来
cp kpi-pro-universal.html index.html   # 或保持原名
cp SKILL.md .
cp README.md .

git add .
git commit -m "feat: KPI自评生成器Pro通用版"
git push
```

**开启 GitHub Pages：**
- Repo → Settings → Pages
- Source: `Deploy from branch` → `main` → `/ (root)`
- 保存，等 1-2 分钟
- 访问：`https://wilingna.github.io/kpi-self-review/`

---

## Step 3：更新 HTML 里的 Worker 地址

打开 `kpi-pro-universal.html`，找到顶部 CONFIG：

```javascript
const CONFIG = {
  apiEndpoint: 'https://api.zengen.art/v1/messages',  // ← 改成你的 Worker 地址
  apiKey: '',
};
```

如果你用的是 Worker 默认域名（`xxx.workers.dev`），就改成那个。

---

## 本地测试（不用 Worker）

如果只是自己测试，可以临时用直连模式：

```javascript
const CONFIG = {
  apiEndpoint: 'https://api.anthropic.com/v1/messages',
  apiKey: 'sk-ant-你的密钥',  // ← 测试完记得删掉，不要提交！
};
```

用 Chrome 直接双击打开 HTML 文件即可（不需要本地服务器）。

---

## 视频演示流程建议

1. 打开部署好的链接
2. 上传你的 KPI 表截图
3. 等 AI 识别（约 5-8 秒）→ 自动跳到确认结构页
4. 稍微展示一下结构可编辑
5. 进入填写页，填 1-2 项，点「AI生成描述」
6. 进入汇总页，展示分数表 + 下载 Excel

整个流程控制在 3-5 分钟，适合短视频节奏。

---

## 文件清单

```
kpi-self-review/
├── index.html (= kpi-pro-universal.html)   # 主工具，部署到 GitHub Pages
├── cloudflare-worker.js                    # Worker 代码，粘贴到 Cloudflare
├── SKILL.md                                # Claude Skill，给 Open Claude 用
├── references/
│   └── example-outputs.md
└── README.md
```
