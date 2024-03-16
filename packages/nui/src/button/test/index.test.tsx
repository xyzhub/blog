import { mount } from '@vue/test-utils'
import { NButton } from 'nui'

describe('button', () => {
  // ? 测试按钮的类型
  it('type', () => {
    // ? 组件挂载
    const btn = mount(<NButton type="primary">测试</NButton>)

    // ? 判断当前组件类名中是否含有 primary 类名
    // ! 注意这里的find找的是真实的dom元素
    const cls = btn.find('button').element.classList.contains('nui-button--primary')

    expect(cls).toBe(true)

    // ! 测试完毕后需要销毁组件
    btn.unmount()
  })

  // !测试按钮的尺寸
  it('size', () => {
    const btn = mount(<NButton size="sm">测试</NButton>)
    const cls = btn.find('button').element.classList.contains('nui-button--sm')
    expect(cls).toBe(true)
    btn.unmount()
  })

  // !测试按钮的事件

  it('click', () => {
    // ? 声明一个变量
    let status = false

    // ? 声明一个函数
    const handleClick = () => {
      status = true
    }

    // ? 组件绑定事件
    const btn = mount(<NButton onClick={handleClick}>测试</NButton>)

    // ? 触发点击事件
    btn.trigger('click')

    expect(status).toBe(true)
    // ! 测试完毕后需要销毁组件1
    btn.unmount()
  })
})
