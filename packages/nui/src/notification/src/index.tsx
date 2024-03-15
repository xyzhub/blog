import { useGenClass } from '@nui/utils'
import type { NotificationProps } from 'nui/typings/notification'
import { TransitionGroup, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NNotification',
  setup() {
    const msgList = ref<Partial<NotificationProps>[]>([])

    const add = () => {
      msgList.value.push({
        content: `${new Date().getTime()}msg`,
        _id: `${new Date().getTime()}`,
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

    const titleCls = {
      [c('warp', 'title')]: true,
    }

    const contentCls = {
      [c('warp', 'content')]: true,
    }

    return () => {
      const renderMsg = () => {
        return msgList.value.map((item) => {
          return (
            <div key={item._id} class={itemCls}>
              <div class={titleCls}>title</div>
              <div class={contentCls}>{item.content}</div>
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
            <TransitionGroup name="nui-slide-right" tag="div">
              {renderMsg()}
            </TransitionGroup>
          </div>

        </>
      )
    }
  },
})
