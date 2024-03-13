import type { BodyProps } from 'nui/typings/table'
import { defineComponent } from 'vue'

export const Body = defineComponent<BodyProps>({
  name: 'Body',
  setup(props = { columns: [], data: [] }) {
    const { columns, data } = props
    return () => {
      /**
       * 单元格渲染
       */
      const renderCell = (row: any) => {
        return columns?.map(col => (<td>{row[col.key]}</td>))
      }

      /**
       * 行渲染
       */
      const renderRow = () => {
        return data?.map(row => (
          <tr>
            { renderCell(row) }
          </tr>
        ))
      }

      return (
        <tbody>
          {renderRow()}
        </tbody>
      )
    }
  },
})
