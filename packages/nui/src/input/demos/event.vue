<script setup lang='ts'>
import { onMounted, ref } from 'vue'

const inputRef = ref<HTMLElement>()

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <n-space dir="vertical" size="xl">
    <n-input ref="inputRef" placeholder="请输入..." />
  </n-space>
</template>
