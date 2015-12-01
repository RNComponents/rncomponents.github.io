var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: 8081
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
    path.resolve(__dirname, 'index.jsx')
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.scss$/, loader: ['style', 'css', 'sass']},
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
