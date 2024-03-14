import type { App } from 'vue'

import NNotification from './index.tsx'

NNotification.install = (app: App) => {
  app.component(NNotification.name, NNotification)
}

export default NNotification
