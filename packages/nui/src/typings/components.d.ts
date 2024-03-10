import type NButton from '../button/src/index.vue'

declare module 'vue' {
  interface GlobalComponents {
    NButton: typeof NButton
  }
}
