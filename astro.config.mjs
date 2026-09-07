// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://angelcidoncha.es',
  i18n: {
    locales: ['es', 'en', 'it'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
