import { useGenClass } from '@nui/utils'
import type { ColumnType, HeaderProps } from 'nui/typings/table'
import { defineComponent } from 'vue'

// https://juejin.cn/post/7323088217334743059

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    return () => {
      const { c, cx } = useGenClass('table')

      const headerCls = cx(() => {
        return {
          [c('header-row')]: true,
        }
      })

      const cellCls = cx(() => {
        return {
          [c('cell')]: true,
          [c('header-cell')]: true,
        }
      })

      const renderColumn = () => {
        return props.columns.map((column: ColumnType) => (
          <th key={column.key} class={cellCls.value}>
            {column.title}
          </th>
        ))
      }
      return (
        <thead>
          <tr class={headerCls.value}>
            {props.columns.length && renderColumn()}
          </tr>
        </thead>
      )
    }
  },
})
