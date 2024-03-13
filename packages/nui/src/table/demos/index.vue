<docs>
---
title:  代码演示
---
</docs>

<script setup lang='ts'>
import type { ColumnType } from 'nui/typings/table'
import { ref } from 'vue'

const columns = ref<ColumnType[]>([{
  title: 'columnsName',
  key: 'name',
}, {
  title: 'columnsAge',
  key: 'age',
}, {
  title: 'columnsPwd',
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
    <n-table :columns="columns" :data="data">
      <n-table-column prop="name" title="Name" />
      <n-table-column prop="age" title="Age" />
      <n-button />
    </n-table>
  </n-space>
</template>
