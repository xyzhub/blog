import type { App } from 'vue'

export interface NotificationProps {
  /** 通知标题 */
  title: string
  /** 通知内容 */
  content: string
  /** 通知时间 */
  duration?: number
}

export interface NotificationConfig extends NotificationProps {
  /** 通知后的唯一id 作为key使用 */
  _id?: string
  /** 通知计时器 */
  _timer: ReturnType<typeof setTimeout> | null
}

export interface NotificationInstance {
  add: (configProps: NotificationProps) => (() => void)
}
