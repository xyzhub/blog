import type NButton from '../button/src/index.vue'
import type NSpace from '../space/src/index.vue'

declare module 'vue' {
  interface GlobalComponents {
    NButton: typeof NButton
    NSpace: typeof NSpace
  }
}
