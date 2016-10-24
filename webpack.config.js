var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    context: __dirname + '/public',
    entry: {app: ['./index.jsx']},
    devServer: { inline: true },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: 'scripts/AleHubFrontEnd.bundle.js'
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
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }
      ]
    },
    plugins: [
      new webpack.OldWatchingPlugin(),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"scripts/vendor.bundle.js"),
      new ExtractTextPlugin('styles/css/master.css', { allChunks: true })
    ]
  }
]
