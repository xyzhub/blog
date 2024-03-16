import { defineConfig } from 'vitest/config'

import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'
import alias from './config/alias'

export default defineConfig({

  plugins: [
    vue(),
    vueJsx(),
    tsxResolveTypes(),
  ],

  resolve: {
    alias,
  },

  test: {
    globals: true, // ? 全局api开启
    environment: 'jsdom',
  },
})
