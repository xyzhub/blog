import type { ColumnType, HeaderProps } from 'nui/typings/table'
import { defineComponent } from 'vue'

// https://juejin.cn/post/7323088217334743059

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    return () => {
      const renderColumn = () => {
        return props.columns.map((column: ColumnType) => (
          <th key={column.key}>
            {column.title}
          </th>
        ))
      }
      return (
        <thead>
          <tr>
            {props.columns.length && renderColumn()}
          </tr>
        </thead>
      )
    }
  },
})
