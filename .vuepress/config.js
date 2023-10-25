const {getChildren} = require("vuepress-sidebar-atuo")
const path = require('path');
const shiki = require('shiki');

module.exports = {
  title: "郭峰博客",
  description: 'Technology Stack',
  dest: './public',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
  ],
  plugins: require('./plugins.js'),
  theme: 'reco',
  sidebarDepth: 5,
  themeConfig: {
    mode: 'light',
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    subSidebar: 'auto',
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'feng.guo',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2020',

    /**
     * 密钥 (if your blog is private)
     */
    // keyPage: {
    //   keys: ['Zhangyize020110'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */
    // valineConfig: {
    //   appId: 'RJ50RF5BLtwKMFRExnOMqh3k-gzGzoHsz',// your appId
    //   appKey: 'W30Aug6XcrXrCkirCwdsvcEV', // your appKey
    //   showComment: false
    // },
  },

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
            md.set({
                html: true
            });
            // md.use(require('markdown-it-katex'))
            // md.use(require('markdown-it-mathjax3'), { tex: {tags: 'ams'} })
        }
    },
  }
