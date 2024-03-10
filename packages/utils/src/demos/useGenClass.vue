<script setup lang="ts">
import { ref } from 'vue'
import { useGenClass } from '../useGenClass/index.ts'

const { c, cx } = useGenClass('button')

const flag = ref(false)

const cls = cx(() => ({
  c: true,
  d: flag.value,
}))

function handle() {
  flag.value = !flag.value
}
</script>

<template>
  {{ c('primary', ['mm', 'B'], ['e', 'E'], ['lg', 'M']) }}

  <div :class="cls">
    {{ cls }}

    <button @click="handle">
      切换
    </button>
  </div>
</template>
