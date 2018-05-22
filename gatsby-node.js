/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const lost = require('lost')
const cssnext = require('postcss-cssnext')
const cssnested = require('postcss-nested')
const atImport = require('postcss-import')

exports.modifyWebpackConfig = function(config) {
  config.config.merge({
    postcss: [
      atImport(),
      cssnested,
      lost(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      })
    ]
  })

  return config
}
