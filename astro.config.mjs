// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hongseon.github.io',
  base: '/', // 루트 경로에 배포
  vite: {
    plugins: [tailwindcss()]
  }
});