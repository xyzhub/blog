import { useGenClass } from '@nui/utils'
import type { NotificationProps } from 'nui/typings/notification'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NNotification',
  setup() {
    const msgList = ref<Partial<NotificationProps>[]>([])

    const add = () => {
      msgList.value.push({
        content: `${new Date().getTime()}msg`,
      })
    }

    const remove = () => {
      msgList.value.shift()
    }

    // ? 处理notification 样式

    const { c } = useGenClass('notification')

    const containerCls = {
      [c()]: true,
    }

    const itemCls = {
      [c('item')]: true,
    }

    return () => {
      const renderMsg = () => {
        return msgList.value.map((item, index) => {
          return (
            <div key={index} class={itemCls}>
              <span class="time">
                {item.content}
              </span>
            </div>
          )
        })
      }

      return (
        <>
          <div>
            <button onClick={add}>增加</button>
            <button onClick={remove}>减少</button>
          </div>

          <div class={containerCls}>
            {renderMsg()}
          </div>

        </>
      )
    }
  },
})
