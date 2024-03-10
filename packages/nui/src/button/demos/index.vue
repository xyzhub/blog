<docs>
---
title:  代码演示
---
</docs>

<script setup lang="ts">
function myClick() {
  console.log(2222)
}
</script>

<template>
  <div>
    <n-button @click="myClick">
      default
    </n-button>

    <n-button type="dashed">
      dashed
    </n-button>

    <n-button type="primary">
      primary
    </n-button>
  </div>
</template>

<style scoped lang="less"></style>
