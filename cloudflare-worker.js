/**
 * Cloudflare Worker — Anthropic API 代理
 * 用于 KPI自评生成器 Pro (kpi-pro-universal.html)
 *
 * 部署步骤：
 * 1. 登录 Cloudflare Dashboard → Workers & Pages → Create Worker
 * 2. 把这段代码粘贴进去
 * 3. Settings → Variables → 添加 Secret: ANTHROPIC_API_KEY = sk-ant-...
 * 4. 绑定到你的域名路由（例：api.zengen.art/v1/messages）
 *    或直接用 Worker 默认域名，然后更新 HTML 里的 CONFIG.apiEndpoint
 */

export default {
  async fetch(request, env) {

    // ── CORS 预检 ──
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    // ── 只允许 POST /v1/messages ──
    const url = new URL(request.url);
    if (request.method !== 'POST' || !url.pathname.endsWith('/v1/messages')) {
      return new Response('Not found', { status: 404, headers: corsHeaders() });
    }

    // ── 读取请求体 ──
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400, headers: corsHeaders() });
    }

    // ── 安全：限制 max_tokens 防止滥用 ──
    if (!body.max_tokens || body.max_tokens > 2000) {
      body.max_tokens = 1500;
    }

    // ── 转发到 Anthropic ──
    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response('API key not configured', { status: 500, headers: corsHeaders() });
    }

    try {
      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(body),
      });

      const data = await upstream.json();

      return new Response(JSON.stringify(data), {
        status: upstream.status,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(),
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }
  }
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',        // 生产环境可改为你的域名
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
