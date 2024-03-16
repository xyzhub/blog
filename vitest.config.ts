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
    globals: true,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['html'],
      include: ['packages/*', '!packages/**/docs', '!packages/**/demos'], // ? 需要测试覆盖的的文件 排除demos和docs
    },
  },

})
