const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const basicConfig = require('./webpack.base.config')

module.exports = merge(basicConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss|less)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
})
