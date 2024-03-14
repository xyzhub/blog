import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NVirtualList',
  setup() {
    const str = ref<string>('6666')
    return {
      str,
    }
  },

  render() {
    return <div>{ this.str }</div>
  },

})
