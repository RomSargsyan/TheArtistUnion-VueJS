require('dotenv').config();
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/vue-paper-dashboard-nuxt/' : '/';

export default {
  mode: 'universal',
  router: {
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Artist Union',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/logo.ico' },
    ]
  },

  env: {
    API_URL: "http://localhost:3000/"
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // { src: "swiper/dist/css/swiper.css" }

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: "~/plugins/vue-swiper.js", ssr: false },
  ],

  // auth: {
  //   credentials: true,
  //   resetOnError: true,
  //   redirect: false,
  //   redirect: {
  //     login: '/auth/login',
  //     logout: '/auth/login',
  //     callback: '/auth/login',
  //     home: '/',
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/login', method: 'post', propertyName: 'token' },
  //         user: { url: '/me', method: 'get', propertyName: 'user' },
  //         logout: { url: '/logout', method: 'post', propertyName: 'token' },
  //         // logout: false,
  //       },
  //       tokenRequired: true,
  //       globalToken: true,
  //       tokenType: 'Bearer',
  //       tokenName: 'Authorization',
  //     }
  //   },
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/font-awesome',
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Axios modules configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://localhost:3000/",
    proxyHeaders: false,
    credentials: false
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: ['BModal', 'BNavItemDropdown', 'BDropdownItem'],
    directives: ['VBModal'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: [
      'axios',
    ],
    extractCSS:true,
      extend(config, ctx) {
    }
  }
}
