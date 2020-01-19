const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const { SERVER_URL } = process.env
console.log(process.env.NODE_ENV)
console.log('================')
console.log(`
  SERVER_URL: ${SERVER_URL}
`)
console.log('================')
if (!SERVER_URL) {
  console.error('SERVER_URL may not set')
  process.exit(1)
}

module.exports = {
  stats: { children: false },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  entry: {
    main: [path.resolve(__dirname, '../src/game') + '/Main.ts', path.resolve(__dirname, '../src') + '/index.tsx'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: process.env.NODE_ENV === 'production' ? 'bundle.[chunkhash:8].js' : 'bundle.main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        include: [path.join(__dirname, '../src')],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ogg|mp3|ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name][hash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify(SERVER_URL),
    }),
    new HtmlWebpackPlugin({
      title: 'Game',
      template: path.resolve(__dirname, '../src') + '/index.html',
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../src/game/resource'), to: 'resource' },
      { from: path.resolve(__dirname, '../libs'), to: 'libs' },
    ]),
    new HardSourceWebpackPlugin(),
  ],
}
