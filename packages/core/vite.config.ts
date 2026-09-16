import tsdownConfig from './tsdown.config.js';

import { defineConfig } from 'vite-plus';

export default defineConfig({
  test: { clearMocks: false },
  pack: tsdownConfig,
});
