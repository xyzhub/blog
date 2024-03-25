import type { App } from 'vue'
import NTooltip from './index.tsx'

NTooltip.install = (app: App) => {
  app.component(NTooltip.name, NTooltip)
}

export default NTooltip
