import { defineComponent } from 'vue'

import type { TableProps } from 'nui/typings/table'
import { Header } from './header'

/**
 *
 * todo
 * 使用v-slots 将slots 传入到组件中
 */
export default defineComponent((props: TableProps, { slots }) => {
  return () => {
    return (
      <div>
        <table>
          <Header columns={props.columns} v-slots={slots} />
          <tbody>
            <tr>
              <td>c1</td>
              <td>c2</td>
              <td>c3</td>
              <td>c4</td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}, {
  name: 'NTable',
})
