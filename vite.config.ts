import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

const baseUrl = fileURLToPath(new URL('.', import.meta.url)) // ? 获取基础路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    VitePluginVitepressDemo({
      glob: './**/demos/*.vue',
    }),
  ],

  resolve: {
    alias: [
      {
        find: /^nui/,
        replacement: path.resolve(baseUrl, 'packages/nui/src'), // ? 组装为绝对路径
      },

      {
        find: /^@nui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'), // ? 组装为绝对路径
      },

      {
        find: /^@nui\/icons/,
        replacement: path.resolve(baseUrl, 'packages/icons/src'), // ? 组装为绝对路径
      },
    ],
  },
})
