import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('..', import.meta.url)) // ? 获取基础路径

const alias = [
  {
    find: /^nui/,
    replacement: path.resolve(baseUrl, 'packages/nui/src'), // ? 组装为绝对路径
  },

  {
    find: /^@nui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'), // ? 组装为绝对路径
  },

  {
    find: /^@nui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'), // ? 组装为绝对路径
  },
]

export default alias
