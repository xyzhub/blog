export interface NotificationProps {
  /** 通知内容 */
  content: string
  /** 通知类型 */
  type: 'success' | 'info' | 'warning' | 'error'
  /** 通知时间 */
  duration: number
  /** 通知关闭按钮 */
  closable: boolean
  /** 通知关闭按钮回调 */
  onClose: () => void

  _id?: string
}
