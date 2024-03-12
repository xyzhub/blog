<script setup lang='ts'>
import { useGenClass } from '@nui/utils'

defineOptions({
  name: 'NTooltip',
})

const { c, cx } = useGenClass('tooltip')

const cls = cx(() => {
  return {
    [c()]: true,
  }
})
</script>

<template>
  <div :class="cls">
    1121211
  </div>
</template>
