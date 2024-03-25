import type { ComponentResolver } from 'unplugin-vue-components/types'

export function NuiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('N')) {
        return {
          name,
          from: 'nvcui',
        }
      }
    },

  }
}
