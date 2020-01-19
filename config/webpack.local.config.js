const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const PORT = 8080
const HOST = '0.0.0.0'
const URL = `http://${HOST}:${PORT}`


module.exports = merge(basicConfig, {
  mode: 'development',
  devtool: 'eval', // for best build performance when use HMR
  devServer: {
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    quiet: true,
    hot: true, // enable HMR on the server
    compress: true,
    contentBase: path.resolve(__dirname, '../src'),
    port: PORT,
    host: HOST,
    publicPath: URL,
    historyApiFallback: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
