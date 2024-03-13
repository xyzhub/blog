import type { App } from 'vue'
import NTable from './index.tsx'

NTable.install = (app: App) => {
  app.component(NTable.name, NTable)
}

export default NTable
