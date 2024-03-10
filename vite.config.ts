import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

const baseUrl = fileURLToPath(new URL('.', import.meta.url)) // ? 获取基础路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      glob: './**/demos/*.vue',
    }),
  ],

  resolve: {
    alias: [
      {
        find: /^@nui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'), // ? 组装为绝对路径
      },
    ],
  },
})
