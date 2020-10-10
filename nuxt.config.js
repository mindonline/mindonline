import { exec } from 'child_process'
import colors from 'vuetify/es5/util/colors'

// eslint-disable-next-line
let GIT_VERSION = {
  hash: 'unknown',
  branch: 'unknown',
  time: null
}

exec('git rev-parse --short HEAD', (error, stdout, stderr) => {
  GIT_VERSION.hash = !error && !stderr ? stdout.trim() : 'nogit'
})

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  GIT_VERSION.branch = !error && !stderr ? stdout.trim() : 'nobranch'
})

exec('git --no-pager log --pretty=format:"%at" -n1', (error, stdout, stderr) => {
  GIT_VERSION.time = !error && !stderr ? parseInt(stdout.trim()) : null
})

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//use.fontawesome.com/releases/v5.8.2/css/all.css' }
    ]
  },
  /*
  ** Env variables
   */
  env: {
    // eslint-disable-next-line object-shorthand
    GIT_VERSION: GIT_VERSION
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: {
        memoryLimit: 1024,
        workers: 1
      },
      ignoreNotFoundWarnings: false
    }],
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    icons: {
      iconfont: 'fa'
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend (config, ctx) {
    }
  }
}
