export interface InputProps {
  /** 响应值 */
  modelValue?: string
  /** 输入框类型 */
  type?: string
  /** 是否禁用输入框 */
  disabled?: boolean
  /** 输入框尺寸 */
  size?: 'sm' | 'lg'

  /** input 原生属性 */
  autocomplete?: string

  placeholder?: string
}
