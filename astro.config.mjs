import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import remarkCallouts from './src/plugins/remark-callouts.mjs';

export default defineConfig({
  site: 'https://academia.peviitor.ro',
  base: '/',
  integrations: [
    icon({
      include: {
        bx: ['*'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkCallouts],
  },
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
