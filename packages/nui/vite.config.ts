import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vue(),
    dts({
      entryRoot: 'src', // ! 默认是根目录下src文件夹
      outDir: ['es', 'lib'], // ? 输出两份声明文件
      exclude: ['**/test/**'], // ! 忽略文件
    }),
  ],

  build: {
    rollupOptions: {
      external: ['@nui/utils', '@nui/icons', '@floating-ui/vue', 'lodash', 'vue'], // ! 外部化依赖处理
      output: [
        {
          preserveModules: true, // ?该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk，而不是创建尽可能少的 chunk
          preserveModulesRoot: 'src', // ? 输出目录下，将所有模块都放到一个文件夹下
          entryFileNames: '[name].js', // ? 原样输出 按需加载,
          format: 'esm', // ? 输出格式
          dir: 'es', // ? 输出目录
        },
        {
          preserveModules: true, // ?该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk，而不是创建尽可能少的 chunk
          preserveModulesRoot: 'src', // ? 输出目录下，将所有模块都放到一个文件夹下
          entryFileNames: '[name].js', // ? 原样输出 按需加载,
          format: 'cjs', // ? 输出格式
          dir: 'lib', // ? 输出目录,
          exports: 'named', // ? 命名空间 指定导出类型
        },
      ],

    }, // ? 借助rollup打包 esm cjs
    lib: {
      entry: 'src/index.ts', // 入口
    },

  },
})
