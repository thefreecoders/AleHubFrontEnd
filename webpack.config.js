var webpack = require('webpack');
var path = require('path')

module.exports = {
  context: __dirname + '/public',
  entry: './index.jsx',
  output: {
    path: __dirname + '/public/scripts',
    filename: 'AleHubFrontEnd.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
}
