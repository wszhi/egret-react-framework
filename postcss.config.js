module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('cssnano')(),
    require('postcss-plugin-px2rem')({
      remValue: 200,
      mediaQuery: true,
      exclude: /(node_module)/,
    }),
  ],
}
