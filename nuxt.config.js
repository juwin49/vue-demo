/*
 * @Author              : juwin49
 * @AuthorEmail         : 912150269@qq.com
 * @AuthorDescription   : 
 * @Modifier            : 
 * @ModifierEmail       : 
 * @ModifierDescription : 
 * @Date                : 2021-06-11 11:01:34
 * @LastEditTime        : 2021-06-16 14:27:50
 */
module.exports = {
  eve:{
    // 全局变量
   homePage: "/demo/",
   PATH_TYPE: process.env.PATH_TYPE
  },
  server: {
    // 在这里只是配置本地的访问域名与端口
    port: 3001, // default: 3000
    host: "localhost" // default: localhost,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  //全局插件配置
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
