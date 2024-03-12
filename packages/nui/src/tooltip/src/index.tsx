import { useGenClass } from '@nui/utils'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NTooltip',
  setup() {
    const { c, cx, cm } = useGenClass('tooltip')

    const flag = ref<boolean>(false)

    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm('test'))]: flag.value,
      }
    })

    const handleClick = () => {
      flag.value = !flag.value
    }

    return () => (
      <>
        <div class={cls.value}>12121</div>
        <button onClick={handleClick}>切换</button>
      </>
    )
  },
})
