var path = require('path')

module.exports = {
  filenameHashing: false,

  pages: {
    app: {
      entry: 'src/app/main.ts'
    }
  },

  configureWebpack: (config) => {
    config.devtool = 'source-map'
  },

  chainWebpack: config => {
    Object.keys(module.exports.pages).forEach(page => config.plugins
      .delete(`html-${page}`)
      .delete(`preload-${page}`)
      .delete(`prefetch-${page}`))
    config.resolve.alias.set('@a', path.resolve(__dirname, 'src/app'))
  },

  css: {
    extract: true,
    loaderOptions: {
      css: {
        url: false
      }
    }
  }
}
