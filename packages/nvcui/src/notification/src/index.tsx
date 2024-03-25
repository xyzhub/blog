import { useGenClass } from '@nvcui/utils'
import type { NotificationConfig, NotificationInstance, NotificationProps } from 'nvcui/typings/notification'
import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'

export default defineComponent<{
  onReady: (instance: NotificationInstance) => void
}>({
      name: 'NNotification',
      setup(props, { expose }) {
        const data = ref<Partial<NotificationConfig>[]>([])
        // ? 添加通知
        const add = (configProps: NotificationProps) => {
          // ? 收集传递的配置数据 合并 私有属性
          const instance: Partial<NotificationConfig> = {
            ...configProps,
            _id: `${Date.now()}`,
          }

          const close = () => {
            // ? 查找当前push的数据中是否存在当前实例
            const index = data.value.findIndex(item => item._id === instance._id)
            if (index !== -1)
              data.value.splice(index, 1)
            if (instance._timer)
              clearTimeout(instance._timer)
          }

          // ? 判断当前添加的实例中duration 是否为0，0则不添加定时器
          if (instance.duration !== 0) {
            instance._timer = setTimeout(() => {
              close()
            }, instance.duration || 3000)
          }

          data.value.push(instance)

          // ? 返回关闭方法
          return close
        }
        // const remove = () => {
        //   msgList.value.shift()
        // }

        // ? 处理notification 样式
        const { c } = useGenClass('notification')
        // ? 定义容器样式
        const containerCls = {
          [c()]: true,
        }
        // ? 定义item样式
        const itemCls = {
          [c('item')]: true,
        }
        // ? 定义标题样式
        const titleCls = {
          [c('warp', 'title')]: true,
        }
        // ? 定义内容样式
        const contentCls = {
          [c('warp', 'content')]: true,
        }

        // ! 向外部暴露出方法
        expose ({
          add,
        })

        // ! 组件挂载后 传出实例
        const _onReady = () => {
          console.log('组件已挂载')
          // ? 通知组件挂载后，将数据传递给外部
          props.onReady?.({
            add,
          })
        }

        onMounted(() => {
          _onReady()
        })

        return () => {
          const renderMsg = () => {
            return data.value.map((item) => {
              return (
                <div key={item._id} class={itemCls}>
                  <div class={titleCls}>{item.title}</div>
                  <div class={contentCls}>{item.content}</div>
                </div>
              )
            })
          }

          return (
            <>
              <div class={containerCls}>
                <TransitionGroup name="nvcui-slide-right" tag="div">
                  {renderMsg()}
                </TransitionGroup>
              </div>

            </>
          )
        }
      },
    })
