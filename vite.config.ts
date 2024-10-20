/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import dts from 'vite-plugin-dts'

export default defineConfig(() => ({
  plugins: [vue(), dts()],
  build: {
    lib: {
      formats: ['es'],
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url))
    }
  },
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