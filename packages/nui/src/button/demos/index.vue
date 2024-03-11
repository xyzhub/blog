<script setup lang="ts">
function myClick() {
  console.log(2222)
}
</script>

<template>
  <n-space size="lg">
    <n-button @click="myClick">
      default
    </n-button>

    <n-button type="dashed">
      dashed
    </n-button>

    <n-button type="primary">
      primary
    </n-button>

    <n-button type="warning">
      warning
    </n-button>

    <n-button type="error">
      error
    </n-button>

    <n-button type="success">
      error
    </n-button>
  </n-space>
</template>
