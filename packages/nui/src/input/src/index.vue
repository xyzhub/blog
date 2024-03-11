<script setup lang='ts'>
/**
 * ? 受控组件 和 非受控组件 -->
 * ! 非受控组件 当 v-model 绑定的组件 上删除v-model 组件任然可以输入数据 表示为非受控组件  -->
 */

import { useGenClass } from '@nui/utils'

import type { InputProps } from 'nui/typings/input'

import { nextTick, onMounted, ref, useAttrs, useSlots } from 'vue'

import { omit } from 'lodash'

defineOptions({
  name: 'NInput', // ? 组件名称
  inheritAttrs: false, // ? 是否继承父组件的属性
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'primary',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

// 定义插槽
defineSlots<{
  prefix(): any // ? 前缀插槽
  suffix(): any // ? 后缀插槽
}>()

// 获取父组件传递的插槽内容 也可以使用 $slot 获取
const slot = useSlots()

const inputRef = ref<HTMLInputElement>()

// ? 获取未在props上定义的属性
const attrs = useAttrs()

console.log('父组件传递的属性', attrs)

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
const { c, cx, cm, ce } = useGenClass('input')
const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm(props.type))]: true,
    [c(cm('disabled'))]: !!props.disabled,
    [c(cm(props.size!))]: !!props.size,
  }
})

/* 处理失焦 聚焦函数抛出 */

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

// ? 事件抛出
defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit(attrs, [''])">
    <span v-if="slot.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input
      ref="inputRef" type="text"
      :disabled="disabled"
      v-bind="attrs"
      :value="modelValue"
      @input="handleInput"
    >
    <span v-if="slot.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>
