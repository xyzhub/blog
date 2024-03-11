<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('hello')
</script>

<template>
  <n-space dir="vertical" size="xl">
    <n-input v-model="value" placeholder="请输入..." />
    <n-input placeholder="禁用按钮" :disabled="true" />
  </n-space>
</template>
