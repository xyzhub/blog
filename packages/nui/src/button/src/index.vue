<script lang='ts'>
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useGenClass } from '@nui/utils'
import type { ButtonSize, ButtonType } from '../../typings/button'

export default defineComponent({
  name: 'NButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      required: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }

    const { c, cx, cm } = useGenClass('button')

    const cls = cx(() => {
      if (props.size) {
        return {
          [c()]: true,
          [c(cm(props.type))]: true,
          [c(cm(props.size))]: true,
        }
      }

      return {
        [c()]: true,
        [c(cm(props.type))]: true,
      }
    })

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
