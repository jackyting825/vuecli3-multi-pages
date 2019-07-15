const plugins = []

if (process.env.NODE_ENV === 'production') {
  // 移除掉console.log()
  plugins.push('transform-remove-console')
} else {
}

module.exports = {
  presets: ['@vue/app'],
  plugins
}
