import { defineConfig } from 'vitest/config'

import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

import alias from './config/alias'

export default defineConfig({

  plugins: [
    vueJsx(),
    tsxResolveTypes(),
  ],

  resolve: {
    alias,
  },
})
