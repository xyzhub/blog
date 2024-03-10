import type { App } from 'vue'
import Space from './index.vue'

/**
 * Installs the Button component into the given app.
 * 注册组件 使得其可以在app.use()中使用
 * @param {any} app - the app to install the Button component into
 * @return {void}
 */
Space.install = (app: App) => {
  app.component(Space.name, Space)
}

export default Space
