// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://hongseon.github.io',
  base: isProd ? '/blog' : '/', // 프로덕션에서만 /blog 사용, 개발 중에는 /
  vite: {
    plugins: [tailwindcss()]
  }
});