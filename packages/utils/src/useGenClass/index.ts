import classnames from 'classnames'
import { computed } from 'vue'

/*
* BEM 规则
*   b__ele--mod
* B: block  块
* E: element 元素
* M: modifier 修饰符
*/

type BEMTYPE = string | [string, 'B' | 'E' | 'M' | undefined]

/**
 * @param componentName
 * @returns componentClassName
 */
export function useGenClass(componentName: string) {
  const prefix: string = 'nui'

  const clsname = `${prefix}-${componentName}`

  /**
   *
   * @param arg
   * @returns BEMTYPE
   */
  const c = (...arg: BEMTYPE[]): string => {
    if (arg.length) {
      return arg.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
          const cname = cur[0]
          const sign = cur[1]
          if (sign === 'B')
            return `${pre}-${cname}`
          else if (sign === 'E')
            return `${pre}__${cname}`
          else
            return `${pre}--${cname}`
        }
        return `${pre}-${cur}`
      }, clsname) as string
    }
    return clsname
  }

  const cm = (m: string): BEMTYPE => [m, 'M']

  const ce = (e: string): BEMTYPE => [e, 'E']

  /**
   *
   * @param callback
   * @returns ComputedRef<string>
   */
  const cx = (callback: () => Record<string, boolean>) => {
    return computed(() => classnames(callback()))
  }

  return {
    c,
    cx,
    cm,
    ce,
  }
}
