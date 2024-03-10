<script lang='ts'>
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useGenClass } from '@nui/utils'
import type { ButtonType } from '../../typings/button'

export default defineComponent({
  name: 'NButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
  },
  emits: ['clik'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('clik', e)
    }

    const { c, cx, cm } = useGenClass('button')

    const cls = cx(() => ({
      [c()]: true,
      [c(cm(props.type))]: true,
    }))

    return {
      cls,
      handleClick,
      props,
    }
  },
})
</script>

<template>
  <button :class="cls" @click="handleClick">
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped lang='less'>

</style>
