import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

const baseUrl = fileURLToPath(new URL('.', import.meta.url)) // ? 获取基础路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vue(),

  ],
  resolve: {

    alias: [

      {
        find: /^@nui\/utils/,
        replacement: path.resolve(baseUrl, '../utils/src'), // ? 组装为绝对路径
      },

    ],
  },

  build: {
    rollupOptions: {
      external: ['vue'],
      output: {

        exports: 'named',
        globals: {
          vue: 'vue', // ? 配置打包后全局变量名称
        },
      },

    }, // ? 借助rollup打包 esm cjs
    lib: {
      entry: 'src/index.ts', // 入口
      formats: ['umd'],
      fileName: () => 'nui.js',
      name: 'NUI', // ? 引入后挂载到window上的名称 window.NUI
    },

  },
})
