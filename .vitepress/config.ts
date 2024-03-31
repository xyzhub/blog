import { defineConfig } from 'vitepress'

import timeline from 'vitepress-markdown-timeline'

// eslint-disable-next-line node/prefer-global/process
const base = process.env.NODE_ENV === 'production' && !process.env.NODE_ENV_VERCEL ? '/nvcui/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Porco',
  description: '个人小站',
  base,
  head: [
    ['link', { rel: 'icon', href: `${base}logo.svg` }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap',
      },
    ],
  ],
  // ? 路由重写
  rewrites: {
    'docs/(.*)': '(.*)', // ? 配置根目录映射
    'packages/nvcui/src/:comp/(.*)': 'components/:comp/(.*)', // ? 这里的:comp/ 表示相同文件结构可以 使用动态路由参数 简历映射 :后的变量可以理解为占位符
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/src/(.*)': 'components/icons/(.*)',
  },

  // markdown配置
  markdown: {
    // 行号显示
    lineNumbers: true,

    // 时间线
    config: (md) => {
      md.use(timeline)
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true,
    },

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
            text: '组件库',
            items: [
              { text: '组件', link: '/components/' },
              { text: '工具', link: '/utils/' },
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
          text: '组件',
          collapsed: false,
          items: [
            {
              text: 'Space 间隔',
              link: '/components/space/',
            },

            {
              text: 'Button 按钮',
              link: '/components/button/',
            },

            {
              text: 'Input 输入框',
              link: '/components/input/',
            },
            {
              text: 'Tooltip 文字提示',
              link: '/components/tooltip/',
            },
            {
              text: 'Table 表格',
              link: '/components/table/',
            },
            {
              text: 'Virtual List 虚拟列表',
              link: '/components/virtual-list/',
            },
            {
              text: 'Notification 消息通知',
              link: '/components/notification/',
            },
            {
              text: 'Icons 图标',
              link: '/components/icons/',
            },
          ],
        },

      ],
      '/utils/': [
        {
          text: '工具',
          collapsed: false,
          items: [
            {
              text: 'useGenClass',
              link: '/utils/useGenClass/',
            },
          ],
        },
      ],

    },

    // 侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    // 返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    // 自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
