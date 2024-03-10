import type { App } from 'vue'
import Button from './index.vue'

/**
 * Installs the Button component into the given app.
 * 注册组件 使得其可以在app.use()中使用
 * @param {any} app - the app to install the Button component into
 * @return {void}
 */
Button.install = function (app: App) {
  app.component(Button.name, Button)
}

export default Button
