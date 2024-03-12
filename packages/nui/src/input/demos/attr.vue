<docs>
---
title: autocomplete
---
传入的`test` 非input原生属性 绑定到input 父元素上
传入的`placeholder`,`autocomplete`input原生属性 绑定到input 上
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('hello')
</script>

<template>
  <n-space dir="vertical" size="xl">
    <n-input v-model="value" placeholder="请输入..." test autocomplete="off" />
  </n-space>
</template>
