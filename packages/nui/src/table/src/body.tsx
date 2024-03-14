import { useGenClass } from '@nui/utils'
import type { BodyProps } from 'nui/typings/table'
import { defineComponent } from 'vue'

export const Body = defineComponent<BodyProps>({
  name: 'Body',
  setup(props = { columns: [], data: [] }) {
    const { c, cx } = useGenClass('table')

    const bodyCls = cx(() => {
      return {
        [c()]: true,
      }
    })

    const cellCls = cx(() => {
      return {
        [c('cell')]: true,
        [c('body-cell')]: true,
      }
    })

    const { columns, data } = props

    return () => {
      /**
       * 单元格渲染
       */
      const renderCell = (row: any) => {
        return columns?.map(col => (<td class={cellCls.value}>{row[col.key]}</td>))
      }

      /**
       * 行渲染
       */
      const renderRow = () => {
        return data?.map(row => (
          <tr class={bodyCls.value}>
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
