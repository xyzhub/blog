<script setup lang='ts'>
import { Notification } from 'nui'

function open() {
  Notification.info({
    title: '提示',
    content: '这是一条提示信息',
    duration: 5000,
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
