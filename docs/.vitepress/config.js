export default {
  title: '原子化服务',
  base: '/as-doc/',
  themeConfig: {
    siteTitle: '原子化服务',
    // logo: '/images/logo.png',

    nav: [
      { text: '快速开始', link: '/quickstart/introduction' },
      { text: 'API', link: '/api/' },
      {
        text: 'SDK',
        items: [
          {
            text: 'Web 运行时',
            items: [
              { text: 'Javascript', link: '/sdk/javascript/' },
              { text: 'Vue', link: '/sdk/vue/' },
              { text: 'React', link: '/sdk/react/' }
            ]
          },
          {
            text: '移动运行时',
            items: [
              { text: 'Android', link: '/sdk/android/' },
              { text: 'iOS', link: '/sdk/ios/' },
              { text: '小程序', link: '/sdk/mp/' }
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/as-doc' }
    ],

    sidebar: {
      '/quickstart/': [
        {
          items: [
            { text: '介绍', link: '/quickstart/introduction' },
            { text: '创建原子化服务', link: '/quickstart/set-rules-and-actions' },
            { text: '上架原子化服务', link: '/quickstart/data-analyze' },
            { text: '为最终用户提供运行时', link: '/quickstart/data-analyze' },
          ]
        }
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

      '/sdk/java/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/java/register' },
            { text: '设备认证', link: '/sdk/java/auth' },
            { text: '设备注销', link: '/sdk/java/logout' },
            { text: '设备删除', link: '/sdk/java/delete' },
          ]
        }
      ],

      '/sdk/go/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/go/register' },
            { text: '设备认证', link: '/sdk/go/auth' },
            { text: '设备注销', link: '/sdk/go/logout' },
            { text: '设备删除', link: '/sdk/go/delete' },
          ]
        }
      ],

      '/sdk/node/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/node/register' },
            { text: '设备认证', link: '/sdk/node/auth' },
            { text: '设备注销', link: '/sdk/node/logout' },
            { text: '设备删除', link: '/sdk/node/delete' },
          ]
        }
      ],

      '/sdk/python/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/python/register' },
            { text: '设备认证', link: '/sdk/python/auth' },
            { text: '设备注销', link: '/sdk/python/logout' },
            { text: '设备删除', link: '/sdk/python/delete' },
          ]
        }
      ],
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
}