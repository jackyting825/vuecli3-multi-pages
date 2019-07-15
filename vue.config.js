'use strict'
const titles = require('./title.js')
const glob = require('glob')
const pages = {}
const path = require('path')

glob.sync('./src/pages/**/main.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/main.js')[0]
  pages[chunk] = {
    entry: path,
    template: 'public/index.html',
    title: titles[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  pages,
  publicPath: './',
  devServer: {
    open: true, //配置自动启动浏览器
    proxy: {
      '/guest': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  },
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('named-chunks'), // 超过6个页面build卡着不动,通过禁用named-chunks plugin解决 https://github.com/vuejs/vue-cli/issues/2318
    // 'src/static' 目录下为外部库文件，不参与 eslint 检测
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('public'))
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'jquery' : '$',
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    }
  }
}

