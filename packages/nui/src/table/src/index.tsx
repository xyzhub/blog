import { defineComponent } from 'vue'

import type { TableProps } from 'nui/typings/table'
import { Header } from './header'
import { Body } from './body'

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
          <Body columns={props.columns} data={props.data} />
        </table>

      </div>
    )
  }
}, {
  name: 'NTable',
})
