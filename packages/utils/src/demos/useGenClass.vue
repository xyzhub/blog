<script setup lang="ts">
import { useGenClass } from '../useGenClass/index.ts'

const { c } = useGenClass('button')
</script>

<template>
  {{ c('primary') }}
</template>
