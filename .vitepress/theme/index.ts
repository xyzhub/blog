// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import DefaultTheme from 'vitepress/theme'

import './style.css'

import nui from 'nui'
import 'nui/style.ts'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ? 注册组件
    app.component('Demo', AntdTheme)
    // ? 注册全局组件
    app.use(nui)
  },
} satisfies Theme
