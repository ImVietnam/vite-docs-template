import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'Công cụ Frontend thế hệ tiếp theo'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Tài liệu Vite 4 (phát hành)',
          link: 'https://vitejs.dev',
        },
        {
          text: 'Tài liệu Vite 3',
          link: 'https://v3.vitejs.dev',
        },
        {
          text: 'Tài liệu Vite 2',
          link: 'https://v2.vitejs.dev',
        },
      ]
    case 'release':
      return [
        {
          text: 'Tài liệu Vite 3',
          link: 'https://v3.vitejs.dev',
        },
        {
          text: 'Tài liệu Vite 2',
          link: 'https://v2.vitejs.dev',
        },
      ]
  }
})()

export default defineConfig({
  title: `Vite${additionalTitle}`,
  description: 'Next Generation Frontend Tooling',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: 'English' },
    zh: { label: '简体中文', link: 'https://cn.vitejs.dev' },
    ja: { label: '日本語', link: 'https://ja.vitejs.dev' },
    es: { label: 'Español', link: 'https://es.vitejs.dev' },
    pt: { label: 'Português', link: 'https://pt.vitejs.dev' },
  },

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
      text: 'Đề xuất thay đổi cho trang này',
    },

    socialLinks: [
      { icon: 'mastodon', link: 'https://elk.zone/m.webtoo.ls/@vite' },
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en'],
      },
    },

    carbonAds: {
      code: 'CEBIEK3N',
      placement: 'vitejsdev',
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: 'Copyright © 2019-present Evan You & Vite Contributors',
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Config', link: '/config/', activeMatch: '/config/' },
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: 'Tài nguyên',
        items: [
          { text: 'Đội ngũ', link: '/team' },
          { text: 'Phát hành', link: '/releases' },
          {
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/vite_js',
              },
              {
                text: 'Nhắn tin Discord',
                link: 'https://chat.vitejs.dev',
              },
              {
                text: 'Awesome Vite',
                link: 'https://github.com/vitejs/awesome-vite',
              },
              {
                text: 'Cộng đồng DEV',
                link: 'https://dev.to/t/vite',
              },
              {
                text: 'Tương thích với Rollup Plugin',
                link: 'https://vite-rollup-plugins.patak.dev/',
              },
              {
                text: 'Nhật ký thay đổi',
                link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
              },
            ],
          },
        ],
      },
      {
        text: 'Phiên bản',
        items: versionLinks,
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Hướng dẫn',
          items: [
            {
              text: 'Tại sao chọn Vite',
              link: '/guide/why',
            },
            {
              text: 'Bắt đầu',
              link: '/guide/',
            },
            {
              text: 'Tính năng',
              link: '/guide/features',
            },
            {
              text: 'CLI',
              link: '/guide/cli',
            },
            {
              text: 'Sử dụng Plugins',
              link: '/guide/using-plugins',
            },
            {
              text: 'Đóng gói trước Phần phụ thuộc',
              link: '/guide/dep-pre-bundling',
            },
            {
              text: 'Xử lý nội dung tĩnh',
              link: '/guide/assets',
            },
            {
              text: 'Xây dựng cho Sản xuất',
              link: '/guide/build',
            },
            {
              text: 'Triển khai một Trang Web Tĩnh',
              link: '/guide/static-deploy',
            },
            {
              text: 'Các biến và Chế độ Env',
              link: '/guide/env-and-mode',
            },
            {
              text: 'Hiển thị phía máy chủ (SSR)',
              link: '/guide/ssr',
            },
            {
              text: 'Tích hợp Backend',
              link: '/guide/backend-integration',
            },
            {
              text: 'So sánh',
              link: '/guide/comparisons',
            },
            {
              text: 'Xử lý Sự cố',
              link: '/guide/troubleshooting',
            },
            {
              text: 'Chuyển đổi từ v3',
              link: '/guide/migration',
            },
          ],
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Plugin API',
              link: '/guide/api-plugin',
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr',
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: 'Cấu hình Tham khảo',
              link: '/config/',
            },
          ],
        },
      ],
      '/config/': [
        {
          text: 'Cấu hình',
          items: [
            {
              text: 'Cấu hình Vite',
              link: '/config/',
            },
            {
              text: 'Tùy chọn Chia sẻ',
              link: '/config/shared-options',
            },
            {
              text: 'Tùy chọn Máy chủ',
              link: '/config/server-options',
            },
            {
              text: 'Tùy chọn Xây dựng',
              link: '/config/build-options',
            },
            {
              text: 'Tùy chọn Xem trước',
              link: '/config/preview-options',
            },
            {
              text: 'Tùy chọn Tối ưu hóa Dep',
              link: '/config/dep-optimization-options',
            },
            {
              text: 'Tùy chọn SSR',
              link: '/config/ssr-options',
            },
            {
              text: 'Tùy chọn Worker',
              link: '/config/worker-options',
            },
          ],
        },
      ],
    },
  },
})
