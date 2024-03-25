import { mount } from '@vue/test-utils'
import { NButton } from 'nvcui'

describe('button', () => {
  it('type', () => {
    const btn = mount(<NButton type="primary">测试</NButton>)

    const cls = btn.find('button').element.classList.contains('nvcui-button--primary')

    expect(cls).toBe(true)

    btn.unmount()
  })

  it('size', () => {
    const btn = mount(<NButton size="sm">测试</NButton>)
    const cls = btn.find('button').element.classList.contains('nvcui-button--sm')
    expect(cls).toBe(true)
    btn.unmount()
  })

  it('click', () => {
    let status = false

    const handleClick = () => {
      status = true
    }

    const btn = mount(<NButton onClick={handleClick}>测试</NButton>)

    btn.trigger('click')

    expect(status).toBe(true)
    btn.unmount()
  })
})
