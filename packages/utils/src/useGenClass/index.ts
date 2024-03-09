/**
 *
 * @param componentName
 * @returns componentClassName
 */
export function useGenClass(componentName: string) {
  const prefix: string = 'nui'

  const classname = `${prefix}-${componentName}`

  const c = (suffix: string): string => {
    return `${classname}-${suffix}`
  }

  return {
    c,
  }
}
