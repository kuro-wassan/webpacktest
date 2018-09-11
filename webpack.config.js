const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoader} = require('vue-loader');

module.exports = {
  entry: { // どのjsファイルに集約するか
    main: path.resolve(__dirname, './src/entry.js') // 何をインポートするかなどは集約するjsファイルに書く
  },
  output: { // 書き出し先
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html')
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: '/\.vue$/',
        use: ['vue-loader']
      }
    ]
  }
}