<script setup lang='ts'>
import type { InputProps } from 'nui/typings/input'

import { nextTick, onMounted, ref } from 'vue'

defineOptions({ name: 'NInput' })
const props = defineProps<InputProps>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const inputRef = ref<HTMLInputElement>()

function setInputValue() {
  const _ipt = inputRef.value

  if (!_ipt || _ipt?.value === props.modelValue)
    return

  _ipt.value = props.modelValue ?? ''
}

function handleInput(e: Event) {
  const _target = e.target as HTMLInputElement

  if (!_target || _target.value === props.modelValue)
    return

  // ? 事件派发
  emit('update:modelValue', _target.value)

  // dom更新后重新 设置值
  nextTick(() => {
    setInputValue()
  })
}

// ? dom 挂载时调用
onMounted(() => {
  setInputValue()
})
</script>

<template>
  <!-- ? 受控组件 和 非受控组件 -->
  <!-- ! 非受控组件 当 v-model 绑定的组件 上删除v-model 组件任然可以输入数据 表示为非受控组件  -->
  <input
    ref="inputRef" type="text" style="border: 1px solid red;"
    placeholder="请输入...."
    :value="modelValue"
    @input="handleInput"
  >
</template>
