import { generate, gold, green } from '@ant-design/colors'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const blue = generate('#2988e6')
const red = generate('#fb5051')

let colorsData: string = ''

/**主色 */
colorsData += '\n/*Primary Color Var*/\n'
blue.forEach((currentColor, index) => {
	colorsData += `--nui-color-primary-${index + 1}: ${currentColor}; \n`
})

/**成功色 */
colorsData += '\n/*Success Color Var*/\n'
green.forEach((currentColor, index) => {
	colorsData += `--nui-color-success-${index + 1}: ${currentColor}; \n`
})

/**警告 */
colorsData += '\n/*Warning Color Var*/\n'
gold.forEach((currentColor, index) => {
	colorsData += `--nui-color-warning-${index + 1}: ${currentColor}; \n`
})

/**错误 */
colorsData += '\n/*Error Color Var*/\n'
red.forEach((currentColor, index) => {
	colorsData += `--nui-color-error-${index + 1}: ${currentColor}; \n`
})

// ? 获取根路径
const baseUrl = fileURLToPath(new URL('../', import.meta.url))

// ? 指定css文件路径
const cssFilePath = path.resolve(
	baseUrl,
	'packages/nui/src/style/theme/color.less'
)

try {
	// ? 生成颜色文件
	writeFileSync(cssFilePath, `:root {${colorsData}}`)
} catch (error) {
	console.log(error)
}
