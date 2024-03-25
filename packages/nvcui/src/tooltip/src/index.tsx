import type { PropType, VNode, VNodeChild } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { offset, useFloating } from '@floating-ui/vue'
import { useGenClass } from '@nvcui/utils'

export default defineComponent({
  name: 'NTooltip',
  props: {
    title: {
      type: String as PropType<string>,
      default: 'placement text',
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top',
    },

    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    // ? 处理tooltips样式
    const { c } = useGenClass('tooltip')

    const reference = ref(null)
    const floating = ref(null)

    // ? 动态计算位置信息
    const placement = computed(() => props.placement)

    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(10)],
    })

    /** 鼠标移入显示  鼠标移除隐藏 */
    const show = ref<boolean>(false)

    // ? 定义定时器
    let timer: ReturnType<typeof setTimeout> | undefined

    const mouseEnter = () => {
      if (props.trigger === 'click')
        return

      show.value = true
    }

    const mouseLeave = () => {
      timer = setTimeout(() => {
        show.value = false
      }, 500)
    }

    const handleClick = () => {
      if (props.trigger === 'hover')
        return
      show.value = !show.value
    }

    const events = {
      onMouseenter: mouseEnter,
      onMouseleave: mouseLeave,
      onClick: handleClick,
    }

    // 函数会重新渲染
    return () => {
      // ! tooltip 浮层依靠 reference 是否存在 来确定是否进行渲染显示
      // ? 若具名插槽 content存在 则优先渲染 插槽内容
      const renderTooltip = () => {
        if (!show.value)
          return
        if (!reference.value)
          return null

        const mouseEnter = () => {
          if (timer)
            clearTimeout(timer)
          timer = undefined
          show.value = true
        }

        const mouseLeave = () => {
          show.value = false
        }

        const events = {
          onMouseenter: mouseEnter,
          onMouseleave: mouseLeave,
        }

        return (
          <div ref={floating} style={floatingStyles.value} class={c()} {...events}>
            {slots.content?.() || props.title}
          </div>
        )
      }

      // ! 获取插槽内容 渲染子节点
      // ! 注意 当父组件内含有 注释时 vue 也会将其作为一个虚拟dom 传递给子组件
      function filterEmpty(children: VNodeChild[]): VNodeChild[] {
        return children?.filter((item: any) => item && !/^Symbol\(/.test(item.type.toString()))
      }

      // ? 判断是否为基本类型
      function isBaseType(val: unknown) {
        return typeof val === 'string' || typeof val === 'number' || typeof val === 'symbol' || val === null || val === undefined
      }

      // ? 过滤空节点
      const children = filterEmpty(slots.default?.() as VNodeChild[])

      // ? 若无子节点 则不进行渲染
      if (children && children.length < 1)
        return null

      // ? 若有多个子节点 则警告 只渲染第一个子节点
      if (children && children.length > 1) {
        console.warn('Tooltip can only have a child')
        return children
      }

      // ? 获取第一个元素
      const node = children?.[0]

      // ? 判断是否为基本类型
      if (isBaseType(node)) {
        console.warn('Tooltip must have a child component')
        return node
      }

      // ? 创建vnode
      // ? 这里使用node创建节点是为了保证节点的类型与传入的类型一致
      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })

      return (
        <>
          {tipNode}
          { renderTooltip && renderTooltip() }
        </>
      )
    }
  },
})
