import type { NotificationInstance, NotificationProps } from 'nui/typings/notification'
import { createVNode, render } from 'vue'

//  ? 引入组件
import Notification from './index.tsx'

export function createNotificationInstance() {
  // ? 声明组件实例
  let instance: NotificationInstance

  // ? 定义组件抛出的方法

  const info = (configProps: NotificationProps) => {
    // ! 实例是否存在
    if (!instance) {
      //  不存在则创建实例
      const body = document.body // 挂载到body
      const vm = createVNode(Notification, {
        // ? 通过onReady获取实例
        onReady: (_instance: NotificationInstance) => {
          instance = _instance // 将组件中的实例方法保存
          instance.add(configProps)
        },
      })
      // ? 渲染组件
      render(vm, body)
    }
    else {
      instance.add(configProps)
    }
  }

  return {
    info,
  }
};
