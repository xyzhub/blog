<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('12121')
</script>

<template>
  <n-space dir="vertical">
    value: {{ value }}
    <n-input v-model="value" />
  </n-space>
</template>
