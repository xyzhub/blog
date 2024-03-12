import type { PropType, VNode, VNodeChild } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { useFloating } from '@floating-ui/vue'

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
  },
  setup(props, { slots }) {
    // const { c, cx, cm } = useGenClass('tooltip')

    const reference = ref(null)
    const floating = ref(null)

    // ? 动态计算位置信息
    const placement = computed(() => props.placement)

    const { floatingStyles } = useFloating(reference, floating, {
      placement,
    })

    return () => {
      // ! tooltip 浮层依靠 reference 是否存在 来确定是否进行渲染显示
      const renderTooltip = () => {
        if (!reference.value)
          return null
        return <div ref={floating} style={floatingStyles.value}>{props.title}</div>
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
