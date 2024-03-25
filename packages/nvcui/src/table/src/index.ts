import type { App } from 'vue'

import NTable from './index.tsx'
import NTableColumn from './table-column/index.tsx'

(NTable as any).install = (app: App) => {
  app.component(NTable.name, NTable)
  app.component(NTableColumn.displayName, NTableColumn)
}

export default NTable
