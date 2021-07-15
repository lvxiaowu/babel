const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "./public/index.html"),
});

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/main.js"],
  devServer: {
    contentBase: path.join(__dirname, "./src/"),
    publicPath: "/",
    host: "127.0.0.1",
    port: 3333,
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
