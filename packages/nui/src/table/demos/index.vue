<docs>
---
title:  代码演示
---
</docs>

<script setup lang='ts'>
import type { ColumnType } from 'nui/typings/table'
import { ref } from 'vue'

const columns = ref<ColumnType[]>([{
  title: 'name',
  key: '1',
}, {
  title: 'age',
  key: '2',
}, {
  title: 'pwd',
  key: '23',
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
      <n-table-column>121212</n-table-column>
    </n-table>
  </n-space>
</template>
