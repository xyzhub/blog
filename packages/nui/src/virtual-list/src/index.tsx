import { useGenClass } from '@nui/utils'
import type { CSSProperties } from 'vue'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'NVirtualList',
  props: {
    height: {
      type: Number, //  滚动区域容器高度
      default: 300,
    },
    itemHeight: {
      type: Number, //  每个item的高度
      default: 40,
    },
    data: {
      type: Array,
      default: () => [],
    },
    buffer: { //  缓冲区
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const { c } = useGenClass('virtual-list')

    // ? 监听滚动事件
    const conatinerRef = ref<HTMLDivElement | null>(null)
    const scrollTop = ref(0)

    // ? 获取滚动区域内部高度
    const onScroll = (e: any) => {
      scrollTop.value = e.target.scrollTop || 0
    }

    // !组件挂载开始监听
    onMounted(() => {
      if (conatinerRef.value)
        conatinerRef.value.addEventListener('scroll', onScroll)
    })
    // ! 组件销毁移除监听事件
    onUnmounted(() => {
      if (conatinerRef.value)
        conatinerRef.value.removeEventListener('scroll', onScroll)
    })

    // ? 动态获取盒子高度
    const containerHeight = computed(() => {
      if (conatinerRef.value)
        return conatinerRef.value.clientHeight
      return props.height
    })

    const sliceItem = computed(() => {
      const itemHeight = props.itemHeight //  ?每个item的高度
      const buffer = props.buffer // ?缓冲区数量
      const showCounter = Math.ceil(containerHeight.value / itemHeight) //  ?显示的item数量 注意这里要向上取整
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer // ? 获取滚动后在可视区域内的item 索引
      // ? 处理counterIndex 为负数的情况
      const startIndex = Math.max(0, counterIndex) // ? 获取起始的索引

      // ! 这里不用startIndex的原因是为了去除开始的缓冲区 buffer * 2 - buffer
      const endIndex = counterIndex + showCounter + buffer * 2 // ? 获取结束的索引

      return props.data.slice(startIndex, endIndex).map((item, index) => {
        return {
          content: item,
          top: (startIndex + index) * itemHeight, // ? 每个item 滚动的top值
          key: `vi-${startIndex + index}`,
        }
      })
    })

    return {
      c,
      conatinerRef,
      containerHeight,
      sliceItem,
    }
  },

  render() {
    const { c, height, data, itemHeight, sliceItem } = this

    /* containerCls 为可视区域 */
    const containerCls = {
      [c()]: true,
    }

    const containerProperties: CSSProperties = {
      height: `${height}px`,
    }

    // ? 处理内容区域
    /* bodyCls 为内容区域 */
    const bodyCls = {
      [c('body')]: true,
    }

    // ? 计算内容区域高度
    const bodyHeight = data.length * itemHeight

    const bodyProperties: CSSProperties = {
      height: `${bodyHeight}px`,
    }

    // ? 处理item 数据渲染

    const renderItems = () => {
      const itemCls = {
        [c('item')]: true,
      }

      return sliceItem.map((li) => {
        const { top, key } = li

        const itemStyle: CSSProperties = {
          height: `${itemHeight}px`,
          top: `${top}px`,
        }

        return <div class={itemCls} style={itemStyle} key={key}>{key}</div>
      })
    }

    return (
      <div class={containerCls} style={containerProperties} ref="conatinerRef">
        <div class={bodyCls} style={bodyProperties}>
          {renderItems()}
        </div>
      </div>
    )
  },

})
