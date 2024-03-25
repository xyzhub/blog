import type { App } from 'vue'

import NVirtualList from './index.tsx'

NVirtualList.install = (app: App) => {
  app.component(NVirtualList.name, NVirtualList)
}

export default NVirtualList
