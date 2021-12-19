const babelConfig = require('./babel.config');

module.exports = {
  // entry: ['@babel/polyfill', './main.js'], useBuiltIns:entry ,需要手动引入  import '@bable/polyfill';
  entry: ['./main.js'], //入口文件
  mode: 'development',
  output: {
    path: __dirname + '/build',
    filename: 'webpack_build.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};
