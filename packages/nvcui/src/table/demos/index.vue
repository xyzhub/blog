<docs>
---
title:  代码演示
---
使用`columns`属性绑定数据进行渲染表头
`data`属性绑定表格数据内容
</docs>

<script setup lang='ts'>
import type { ColumnType } from 'nvcui/typings/table'
import { ref } from 'vue'

const columns = ref<ColumnType[]>([{
  title: '姓名',
  key: 'name',
}, {
  title: '年龄',
  key: 'age',
}, {
  title: '密码',
  key: 'pwd',
}])

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
    <n-table :columns="columns" :data="data" />
  </n-space>
</template>
