<docs>
---
title:  代码演示
---
使用`<n-table-column/> `组件进行渲染表头
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const data = ref([
  {
    name: 'zs',
    age: '18',
    pwd: 'p1',
  },

  {
    name: 'lz',
    age: '62',
    pwd: 'p2',
  },

  {
    name: 'ms',
    age: '45',
    pwd: 'p3',
  },
])
</script>

<template>
  <n-space>
    <n-table :data="data">
      <n-table-column prop="name" title="姓名" />
      <n-table-column prop="age" title="年龄" />
    </n-table>
  </n-space>
</template>
