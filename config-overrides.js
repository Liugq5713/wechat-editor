const workboxPlugin = require('workbox-webpack-plugin')
console.log('workboxPlugin', workboxPlugin)
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config
}
