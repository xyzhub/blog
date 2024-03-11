import type { App } from 'vue'
import NInput from './index.vue'

NInput.install = (app: App) => {
  app.component(NInput.name, NInput)
}

export default NInput
