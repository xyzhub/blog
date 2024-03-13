import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => {
    return (
      <div>
        <table>
          <thead>
            <th>1</th>
            <th>1</th>
            <th>1</th>
            <th>1</th>
          </thead>
          <tbody>
            <tr>
              <td>c1</td>
              <td>c2</td>
              <td>c3</td>
              <td>c4</td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}, {
  name: 'NTable',
})
