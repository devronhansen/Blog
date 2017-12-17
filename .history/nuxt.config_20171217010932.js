module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ron`s blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },
  css: ['~/assets/css/tailwind.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  plugins: ['~plugins/vue-scrollto.js', '~plugins/vue-in-viewport-directive.js', '~plugins/vue-scroll-reveal.js'],
  build: {
    vendor: ['axios', 'vue-scrollto', 'vue-in-viewport-directive', 'vue-scroll-reveal'],

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
