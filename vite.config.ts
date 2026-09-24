import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

const BOT_USER_AGENT_PATTERNS = [
  /\bbot\b/i,
  /\bcrawler\b/i,
  /\bspider\b/i,
  /\bscraper\b/i,
  /\bcrawl\b/i,
  /\bslurp\b/i,
  /\barchiver\b/i,
  /\btranscoder\b/i,
  /googlebot/i,
  /bingbot/i,
  /msnbot/i,
  /yandex/i,
  /baiduspider/i,
  /duckduckbot/i,
  /sogou/i,
  /exabot/i,
  /applebot/i,
  /gptbot/i,
  /chatgpt/i,
  /claudebot/i,
  /claude-web/i,
  /anthropic/i,
  /ccbot/i,
  /google-extended/i,
  /perplexity/i,
  /bytespider/i,
  /diffbot/i,
  /cohere/i,
  /omgilibot/i,
  /youbot/i,
  /amazonbot/i,
  /facebookexternalhit/i,
  /facebookbot/i,
  /meta-externalagent/i,
  /ahrefs/i,
  /semrush/i,
  /dotbot/i,
  /rogerbot/i,
  /mj12bot/i,
  /petalbot/i,
  /megaindex/i,
  /blexbot/i,
  /dataforseo/i,
  /serpstat/i,
  /screaming\s*frog/i,
  /^curl/i,
  /curl\//i,
  /wget/i,
  /python-requests/i,
  /python-urllib/i,
  /httpx/i,
  /aiohttp/i,
  /scrapy/i,
  /colly/i,
  /go-http-client/i,
  /java\//i,
  /libwww-perl/i,
  /mechanize/i,
  /postmanruntime/i,
  /insomnia/i,
  /headlesschrome/i,
  /phantomjs/i,
  /puppeteer/i,
  /playwright/i,
  /selenium/i,
  /webdriver/i,
  /node-fetch/i,
  /axios\//i,
  /undici/i,
  /httpclient/i,
];

function antiBotSecurityPlugin(): Plugin {
  return {
    name: 'anti-bot-security',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUa = req.headers['user-agent'] || '';
        const userAgent = Array.isArray(rawUa) ? rawUa.join(' ') : rawUa;
        const url = req.url || '';

        // Block requests with no User-Agent or known bot User-Agent
        const isBot = !userAgent.trim() || BOT_USER_AGENT_PATTERNS.some((pattern) => pattern.test(userAgent));
        const isTrapPath = url.startsWith('/bot-trap') || url.startsWith('/sitemap.xml') || url.startsWith('/sitemap_index.xml');

        if (isBot || isTrapPath) {
          res.statusCode = 403;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache');
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
          res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
  <title>403 Forbidden - Bot Access Prohibited</title>
  <style>
    body { background-color: #0b192c; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
    .card { max-width: 480px; text-align: center; background: #0f233d; border: 1px solid #1e3a5f; padding: 36px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h1 { color: #f87171; font-size: 24px; margin-top: 0; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; }
    .badge { display: inline-block; background: #ef4444; color: #fff; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; letter-spacing: 0.5px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">ACCESS RESTRICTED</div>
    <h1>403 Forbidden</h1>
    <p>Automated access, scrapers, search engine crawlers, and AI harvesting agents are prohibited on this service.</p>
  </div>
</body>
</html>`);
          return;
        }

        // Set strict anti-indexing and anti-caching headers on all legitimate responses
        res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, notranslate');
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('X-Content-Type-Options', 'nosniff');

        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUa = req.headers['user-agent'] || '';
        const userAgent = Array.isArray(rawUa) ? rawUa.join(' ') : rawUa;
        const url = req.url || '';

        const isBot = !userAgent.trim() || BOT_USER_AGENT_PATTERNS.some((pattern) => pattern.test(userAgent));
        const isTrapPath = url.startsWith('/bot-trap') || url.startsWith('/sitemap.xml') || url.startsWith('/sitemap_index.xml');

        if (isBot || isTrapPath) {
          res.statusCode = 403;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache');
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
          res.end(`403 Forbidden - Automated access is prohibited.`);
          return;
        }

        res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, notranslate');
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('X-Content-Type-Options', 'nosniff');

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      allowedHosts: true as const,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    plugins: [antiBotSecurityPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
