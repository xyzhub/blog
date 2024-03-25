<script setup lang='ts'>
import { Setting } from '@nvcui/icons'

import { NSpace } from 'nvcui'
</script>

<template>
  <NSpace>
    <Setting />
  </NSpace>

  <NSpace class="warp">
    <Setting />
  </NSpace>
</template>

<style scoped lang='less'>
.warp{

  font-size: 24px;
}
</style>
