const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: { // どのjsファイルに集約するか
    main: path.resolve(__dirname, './src/entry.js') // 何をインポートするかなどは集約するjsファイルに書く
  },
  output: { // 書き出し先
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html')
      }
    ),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js'
      //'vue-loader': require.resolve(__dirname, '')
    }
  }
}