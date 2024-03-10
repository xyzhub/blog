import type { App, Plugin } from 'vue'

// ? 导出所有的的components组件
import pkg from '../package.json'
import * as components from './components'

// ? 按需导出  => import { Button } from 'NUI'
export * from './components'

// ? 全局导出  => import nui from 'NUI'  app.use(nui)

export default {
  install(app: App) {
    // ?批量注册所有组件  为了外界可以 直接使用 app.use(组件库)
    Object.entries(components).forEach(([_key, comp]: [_key: any, comp: any]) => {
      // ? 如果组件中含有install方法则注册
      if (comp.install)
        app.use(comp)
    })
  },

  // ? 绑定版本号
  version: pkg.version,
} as Plugin // 指定类型表明为一个vue的plugin
