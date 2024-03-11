<script setup lang='ts'>
import { useGenClass } from '@nui/utils'
import type { InputProps } from 'nui/typings/input'

import { nextTick, onMounted, ref, useAttrs } from 'vue'

defineOptions({ name: 'NInput' })

const props = withDefaults(defineProps<InputProps>(), {
  type: 'primary',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const inputRef = ref<HTMLInputElement>()

// ? 获取未在props上定义的属性
const attrs = useAttrs()

// ? 对值进行处理
function setInputValue() {
  const _ipt = inputRef.value

  if (!_ipt || _ipt?.value === props.modelValue)
    return

  _ipt.value = props.modelValue ?? ''
}
// ? 触发input事件
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

/* 样式设置 */
const { c, cx, cm } = useGenClass('input')
const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm(props.type))]: true,
    [c(cm('disabled'))]: !!props.disabled,
    [c(cm(props.size!))]: !!props.size,
  }
})
</script>

<template>
  <div :class="cls">
    <!-- ? 受控组件 和 非受控组件 -->
    <!-- ! 非受控组件 当 v-model 绑定的组件 上删除v-model 组件任然可以输入数据 表示为非受控组件  -->
    <input
      ref="inputRef" type="text"
      :disabled="disabled"
      v-bind="attrs"
      :value="modelValue"
      @input="handleInput"
    >
  </div>
</template>
