<script setup lang='ts'>
import { ref } from 'vue'

const position = ref<any>('top')

function changePosition() {
  position.value = position.value === 'top' ? 'bottom' : 'top'
}
</script>

<template>
  <n-space dir="vertical" size="lg">
    <n-tooltip :placement="position" title="title">
      <!-- ? 这是注释 -->
      <n-button>文字</n-button>
      <template #content>
        <div>
          插槽渲染自定义样式
        </div>
      </template>
    </n-tooltip>
    <n-button @click="changePosition">
      修改位置
    </n-button>
  </n-space>
</template>

<style scoped lang='less'>

</style>
