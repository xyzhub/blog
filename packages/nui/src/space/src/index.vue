<script  lang='ts'>
import { computed, defineComponent, toRefs } from 'vue'

import type { CSSProperties, PropType } from 'vue'
import type { SpaceProps } from 'nui/typings/space'
import '../style'
import { useGenClass } from '@nui/utils'

export default defineComponent({
  name: 'NSpace',
  props: {
    size: {
      type: String as PropType<SpaceProps['size']>,
      default: 'l',
    },
    align: {
      type: String as PropType<SpaceProps['align']>,
      default: 'start',

    },
    justify: {
      type: String as PropType<SpaceProps['justify']>,
      default: 'start',

    },

    inline: {
      type: Boolean as PropType<SpaceProps['inline']>,
      default: false,

    },
    wrap: {
      type: Boolean as PropType<SpaceProps['wrap']>,
      default: false,

    },
    overflow: {
      type: String as PropType<SpaceProps['overflow']>,
      default: 'visible',

    },

    dir: {
      type: String as PropType<SpaceProps['dir']>,
      default: 'horizontal',

    },
  },

  setup(props) {
    const {
      inline,
      align,
      justify,
      wrap,
      overflow,
      size,
      dir,
    } = toRefs(props)

    const isNumber = (num: any) => typeof num === 'number'
    const isString = (str: any) => typeof str === 'string'
    const isBoolean = (bool: any) => typeof bool === 'boolean'

    const { c } = useGenClass('space')

    const classList = computed(() => {
      const classes: string[] = [c()]

      if (inline.value)
        classes.push(`inline`)

      if (isBoolean(wrap.value))
        wrap.value && classes.push(`wrap`)
      else
        classes.push(`wrap-${wrap.value}`)

      if (isString(size.value) && size.value !== 'l')
        classes.push(`size-${size.value}`)

      if (dir.value !== 'horizontal')
        classes.push(`dir-${dir.value}`)

      if (overflow.value !== 'visible')
        classes.push(`overflow-${overflow.value}`)

      classes.push(`align-${align.value}`)
      classes.push(`justify-${justify.value}`)

      return classes
    })

    const spaceStyle = computed(() => {
      const style: CSSProperties = {}

      if (isNumber(size.value)) {
        style.gap = `${size.value}px`
      }
      else if (isString(size.value)) {
        style.gap = `${size.value}`
      }
      else if (Array.isArray(size.value)) {
        const [columnGap, rowGap] = size.value

        if (isNumber(columnGap) && isNumber(rowGap)) {
          style.columnGap = `${size.value[0]}px`
          style.rowGap = `${size.value[1]}px`
        }
        else {
          style.columnGap = `${size.value[0]}`
          style.rowGap = `${size.value[1]}`
        }
      }

      if (Array.isArray(overflow.value)) {
        const [overflowX, overflowY] = overflow.value

        style.overflowX = overflowX
        style.overflowY = overflowY
      }

      return style
    })

    return {
      classList,
      spaceStyle,

    }
  },
})
</script>

<template>
  <div :class="classList" :style="spaceStyle">
    <slot />
  </div>
</template>
