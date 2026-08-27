// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Eigene Domain über GitHub Pages (public/CNAME) — kein base-Pfad nötig.
export default defineConfig({
  site: 'https://flexibelle.live',
  integrations: [tailwind()],
});
