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
