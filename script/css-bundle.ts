// less 转 css

import { fileURLToPath } from 'node:url'

import path from 'node:path'
import fg from 'fast-glob'

import fs from 'fs-extra'

import less from 'less'

// ? 获取目录地址
const nuiDir = fileURLToPath(new URL('../packages/nui', import.meta.url))

// ? 遍历文件 获取less

const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/style', // ? 排除的less文件
], {

  cwd: nuiDir, // ? 指定默认目录
})

// console.log(lessFiles)

async function compile() {
  // ? 遍历文件
  for (const file of lessFiles) {
    // ? 组合文件路径
    const filePath = path.resolve(nuiDir, file)
    // ? 读取less文件内容
    const lessCode = fs.readFileSync(filePath, 'utf-8')

    // ? less 转 css
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)], // ? 指定less文件所在目录

    })

    // ? 处理输出目录结构

    console.log('file', file.replace(/^src\//, '').replace('less', 'css'))

    const targetFilePath = file.replace(/^src\//, '').replace('less', 'css')
    const esDir = path.resolve(nuiDir, `./es/${targetFilePath}`)
    const libDir = path.resolve(nuiDir, `./lib/${targetFilePath}`)

    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}
compile()
