import { defineConfig } from 'vite'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

import Components from 'unplugin-vue-components/vite'
import alias from './config/alias'
import { NuiResolver } from './script/nui-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    VitePluginVitepressDemo({
      glob: './**/demos/*.vue',
    }),
    Components({
      resolvers: [
        NuiResolver(),
      ],
    }),
  ],

  resolve: {
    alias,
  },
})
