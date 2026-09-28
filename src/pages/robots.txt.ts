/* =======================================
 * ふもと旅館採用 robots.txt 生成
 * URL: /src/pages/robots.txt.ts
 * Referenced in: Astroファイルベースルーティング（/robots.txt）
 * Created: 2026-09-19
 * Last updated: 2026-09-21
 * ======================================= */
import type { APIRoute } from 'astro';

const isDemo = import.meta.env.SITE_ENV !== 'production';

export const GET: APIRoute = () => {
  const body = isDemo
    ? ['User-agent: *', 'Disallow: /']
    : ['User-agent: *', 'Allow: /'];

  return new Response(`${body.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
