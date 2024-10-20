/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => ({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      // https://playwright.dev
      providerOptions: {},
    },
  }
}))