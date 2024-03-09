import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '红猪的小站',
	description: 'this is vue components ui library',

	// ? 路由重写
	rewrites: {
		'docs/(.*)': '(.*)', // ? 配置根目录映射
		'packages/nui/src/:comp/(.*)': 'components/:comp/(.*)', // ? 这里的:comp/ 表示相同文件结构可以 使用动态路由参数 简历映射 :后的变量可以理解为占位符
	},
	// ? 主题配置
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// ? 导航区域配置
		nav: [
			{ text: '首页', link: '/' },
			{ text: '组件', link: '/components/' },
			{ text: '介绍', link: '/introduce/' },
		],

		sidebar: {
			'/components/': [
				{
					text: 'button',
					link: '/components/button/',
				},
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
		],
	},
})
