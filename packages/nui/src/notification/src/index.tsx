import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NNotification',
  setup() {
    const msgList = ref<any[]>([])

    const add = () => {
      msgList.value.push({
        msg: `${new Date().getTime()}msg`,
        time: new Date().getTime(),
      })
    }

    const remove = () => {
      msgList.value.shift()
    }

    return () => {
      const renderMsg = () => {
        return msgList.value.map((item, index) => {
          return (
            <div key={index}>
              <span class="time">
                {item.msg}
                --
                {item.time}
              </span>
            </div>
          )
        })
      }

      return (
        <>
          <div>notification</div>
          <div>
            <button onClick={add}>增加</button>
            <button onClick={remove}>减少</button>
          </div>

          {renderMsg()}
        </>
      )
    }
  },
})
