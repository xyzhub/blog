<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('hello')
</script>

<template>
  <n-space dir="vertical" size="xl">
    <n-input v-model="value" placeholder="请输入..." test autocomplete="off" />
  </n-space>
</template>
