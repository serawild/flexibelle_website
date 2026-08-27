import type { APIRoute } from 'astro';

const seiten = ['', 'impressum', 'datenschutz'];

export const GET: APIRoute = ({ site }) => {
  const basis = site?.href.replace(/\/$/, '') ?? 'https://flexibelle.live';
  const eintraege = seiten
    .map((s) => `  <url><loc>${basis}/${s}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${eintraege}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
