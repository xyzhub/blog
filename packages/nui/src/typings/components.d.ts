import type NSpace from '../space/src/index.vue'
import type NButton from '../button/src/index.vue'
import type NInput from '../input/src/index.vue'
import type NTooltip from '../tooltip/src/index.tsx'
import type NTable from '../table/src/index.tsx'
import type NTableColumn from '../table/src/table-column/index.tsx'
import type NVirtualList from '../virtual-list/src/index.tsx'

declare module 'vue' {
  interface GlobalComponents {
    NButton: typeof NButton
    NSpace: typeof NSpace
    NInput: typeof NInput
    NTooltip: typeof NTooltip
    NTable: typeof NTable
    NTableColumn: typeof NTableColumn
    NVirtualList: typeof NVirtualList
  }
}
