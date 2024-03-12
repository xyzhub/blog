<script setup lang='ts'>
import { ref } from 'vue'

const position = ref<any>('top')

function changePosition() {
  position.value = position.value === 'top' ? 'bottom' : 'top'
}
</script>

<template>
  <n-space>
    <n-tooltip :placement="position" title="title">
      <!-- ? 这是注释 -->
      <div>内容div</div>
    </n-tooltip>

    <n-button @click="changePosition">
      修改位置
    </n-button>
  </n-space>
</template>

<style scoped lang='less'>

</style>
