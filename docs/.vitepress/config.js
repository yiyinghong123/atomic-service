export default {
  title: '原子化服务',
  base: '/atomic-service/',
  themeConfig: {
    siteTitle: '原子化服务',
    // logo: '/images/logo.png',

    nav: [
      { text: '快速开始', link: '/quickstart/introduction' },
      {
        text: '教程',
        items: [
          { text: '前端', link: '/tutorials/frontend/' },
          { text: '后端', link: '/tutorials/backend/' },
        ]
      },
      { text: 'UI 组件', link: '/component/' },
      { text: 'API', link: '/api/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/atomic-service' }
    ],

    sidebar: {
      '/quickstart/': [
        {
          items: [
            { text: '介绍', link: '/quickstart/introduction' },
            { text: '准备工作', link: '/quickstart/preparation' },
            { text: '开发', collapsible: true, items: [
                { text: '前端', link: '/quickstart/develop/frontend' },
                { text: '后端', link: '/quickstart/develop/backend' },
              ] 
            },
            { text: '发布', link: '/quickstart/publish-as' },
          ]
        }
      ],

      '/component/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            {
              text: 'Element', link: '/component/element'
            },
            {
              text: 'Text', link: '/component/text'
            },
            {
              text: 'Button', link: '/component/button'
            },
            {
              text: 'Input', link: '/component/input'
            },
            {
              text: 'Image', link: '/component/image'
            }
          ]
        },
      ],

      '/api/': [
        {
          text: '帐号管理',
          collapsible: true,
          items: [
            { text: '注册帐号', link: '/api/account/register' },
            { text: '登录', link: '/api/account/login' },
            { text: '登出', link: '/api/account/logout' },
            { text: '删除帐号', link: '/api/account/delete' },
          ]
        },
        {
          text: '租户管理',
          collapsible: true,
          items: [
            { text: '创建租户', link: '/api/tenant/create' },
            { text: '获取租户 Access Token', link: '/api/tenant/get-access-token' },
            { text: '删除租户', link: '/api/tenant/delete' },
          ]
        },
        {
          text: '应用管理',
          collapsible: true,
          items: [
            { text: '创建应用', link: '/api/application/create' },
            { text: '获取应用列表', link: '/api/application/list' },
            { text: '获取应用详情', link: '/api/application/detail' },
            { text: '更新应用', link: '/api/application/update' },
            { text: '删除租户', link: '/api/application/delete' },
          ]
        },
        {
          text: '原子化服务管理',
          collapsible: true,
          items: [
            { text: '创建原子化服务', link: '/api/as/create' },
            { text: '上传原子化服务', link: '/api/as/upload' },
            { text: '发布原子化服务', link: '/api/as/publish' },
            { text: '下载原子化服务', link: '/api/as/download' },
            { text: '获取某应用下的原子化服务列表', link: '/api/as/list' },
            { text: '获取原子化服务详情', link: '/api/as/detail' },
            { text: '更新原子化服务', link: '/api/as/update' },
            { text: '删除原子化服务', link: '/api/as/delete' },
          ]
        },
        {
          text: '日志',
          collapsible: true,
          items: [
            { text: '日志上传', link: '/api/log/upload' },
            { text: '日志查询', link: '/api/log/query' },
          ]
        },
        {
          text: '运营',
          collapsible: true,
          items: [
            { text: '用户查询', link: '/api/data/query-user' },
            { text: '运行情况查询', link: '/api/data/query-run' },
            { text: '下载量查询', link: '/api/data/query-download' },
          ]
        }
      ],

      '/tutorials/frontend/': [
        {
          items: [
            { text: '初始化', link: '/tutorials/frontend/init' },
          ]
        }
      ],

      '/tutorials/backend/': [
        {
          items: [
            { text: '初始化', link: '/tutorials/backend/init' },
          ]
        }
      ],
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
}