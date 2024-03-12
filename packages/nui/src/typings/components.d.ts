import type NSpace from '../space/src/index.vue'
import type NButton from '../button/src/index.vue'
import type NInput from '../input/src/index.vue'
import type NTooltip from '../tooltip/src/index.vue'

declare module 'vue' {
  interface GlobalComponents {
    NButton: typeof NButton
    NSpace: typeof NSpace
    NInput: typeof NInput
    NTooltip: typeof NTooltip
  }
}
