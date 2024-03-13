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
  key: '222',
}, {
  title: 'age',
  key: '222',
}, {
  title: 'pwd',
  key: '222',
}])
</script>

<template>
  <n-space>
    <n-table :columns="columns" :data="[]" />
  </n-space>
</template>
