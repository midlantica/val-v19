module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'val-19',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Valentina Harper Art & Design' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  **
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    //
    // CSS file in the project
    '@/assets/css/vendor/HTML5Boilerplate.css',
    // '@/assets/css/vendor/normalize.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins
  */
  plugins: [
    // '~/node_modules/modernizr'
    // { src: '~/plugins/svg-sprite-loader', ssr: false },
    // { src: '~/plugins/vLightbox.js', ssr: false }
    { src: '~/plugins/vueImg.js', ssr: false }
    // ssr: false to only include it on client-side
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        // include: /assets\/img\/svgs/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    }
  },
  vendor: ['vLightbox']
}
