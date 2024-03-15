<script setup lang='ts'>
import { Notification } from 'nui'
import { getCurrentInstance, h } from 'vue'

import content from './components/content.vue'

const instance = getCurrentInstance()

function open() {
  Notification.info({
    title: '提示',
    content: h(content), // ! 使用h函数转vnode
    duration: 5000,
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <n-space dir="vertical">
    <n-button @click="open">
      弹窗
    </n-button>
  </n-space>
</template>

<style scoped lang='less'>

</style>
