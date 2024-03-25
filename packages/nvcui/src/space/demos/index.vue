<script setup lang='ts'>
import { ref } from 'vue'

const dir = ref<any>('horizontal')

function changeDir() {
  dir.value = dir.value === 'horizontal' ? 'vertical' : 'horizontal'
}
</script>

<template>
  <n-space dir="vertical" size="xl">
    <n-button @click="changeDir">
      change
    </n-button>

    <n-space :dir="dir">
      <div class="box b-1">
        1
      </div>
      <div class="box b-2">
        2
      </div>
      <div class="box b-3">
        3
      </div>
    </n-space>
  </n-space>
</template>

<style scoped lang='less'>
.box {
  width: 45px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

// 定义一组背景颜色
@colors: #ff0000ff, #00ff00, #0000ff, #a614c4, #00ffff;
@count: 5; // 颜色的数量

.generate-colors(@i: 1) when (@i <= @count) {
  .b-@{i} {
    background-color: extract(@colors, @i);
  }
  .generate-colors(@i + 1);
}

// 调用生成背景色的mixins
.generate-colors();
</style>
