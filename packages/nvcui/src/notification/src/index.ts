import type { App } from 'vue'

// import NNotification from './index.tsx'

// NNotification.install = (app: App) => {
//   app.component(NNotification.name, NNotification)
// }

// export default NNotification

import type { NotificationProps } from 'nvcui/typings/notification'
import { createNotificationInstance } from './instance'

interface Instance {
  info: (configProps: NotificationProps) => void
  install?: (app: App) => void
}

const instance: Instance = createNotificationInstance()

instance.install = (app: App) => {
  app.config.globalProperties.$notification = instance as Omit<typeof instance, 'install'>
}

export default instance as Omit<typeof instance, 'install'>
