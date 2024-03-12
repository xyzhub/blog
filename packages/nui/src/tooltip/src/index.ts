import type { App } from 'vue'
import NTooltip from '../src/index.vue'

NTooltip.install = (app: App) => {
  app.component(NTooltip.name, NTooltip)
}

export default NTooltip
