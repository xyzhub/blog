import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '红猪',
  description: '欢迎来到我的小站',

  // ? 路由重写
  rewrites: {
    'docs/(.*)': '(.*)', // ? 配置根目录映射
    'packages/nui/src/:comp/(.*)': 'components/:comp/(.*)', // ? 这里的:comp/ 表示相同文件结构可以 使用动态路由参数 简历映射 :后的变量可以理解为占位符
    'packages/utils/src/(.*)': 'utils/(.*)',
  },
  // ? 主题配置
  themeConfig: {
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '夜间模式',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    // ? 导航区域配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '记录',
        items: [
          {
            text: 'vue',
            link: '/vue',
          },

          {
            text: '组件库',

            items: [
              { text: '组件', link: '/components/' },
              {
                text: '工具',
                link: '/utils/',
              },
            ],
          },
        ],
      },
      { text: '介绍', link: '/introduce' },
    ],

    // ? 侧边栏
    sidebar: {
      '/components/': [
        {
          text: 'space 间隔',
          link: '/components/space/',
        },

        {
          text: 'button 按钮',
          link: '/components/button/',
        },

        {
          text: 'input 输入框',
          link: '/components/input/',
        },
      ],
      '/utils/': [
        {
          text: 'useGenClass',
          link: '/utils/useGenClass/',
        },
      ],
    },

    docFooter: {

      prev: '上一页',
      next: '下一页',
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
