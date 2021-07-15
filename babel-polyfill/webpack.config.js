//创建webpack.config.js
var webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./main.js"], //入口文件
  mode: "development",
  output: {
    path: __dirname + "/build", //输出位置
    filename: "build.js", //输入文件
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.css$/, //支持正则
    //     loader: "style-loader!css-loader",
    //   },
    // ],
  },
  resolve: {
    extensions: [".js", ".json"],
  },
};
