var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders:[
      { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
