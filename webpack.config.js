var webpack = require('webpack');
var path = require('path')

module.exports = {
  context: __dirname + '/src',
  entry: './index.jsx',
  output: {
    path: __dirname + '/src/build',
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
      },
      // {
      //   test: /\.scss$/,
      //   loader: 'style!css!sass'
      // }
    ]
  },
  // plugins: [
  //   new webpack.OldWatchingPlugin(),
  // //   new webpack.optimize.CommonsChuckPlugin(/* chunkName = */"vendor", /*filename=*/'vendor.bundle.js')
  // ]
}
