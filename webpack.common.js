const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name:'[name].[hash].[ext]',
      //       outputPath: 'imgs'
      //     },
      //   },
      // },
    ],
  },
};