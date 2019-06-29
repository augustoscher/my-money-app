const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//webpack é responsável por carregar os seus recursos de maneira modular e estática

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['','.js','.jsx'],
    alias: {
      modules: __dirname + '/node_modules',
    }
  }

}