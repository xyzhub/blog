<script setup lang='ts'>
import { Setting } from '@nui/icons'

import { NSpace } from 'nui'
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
