const baseWebpackConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "js/[name].[hash:16].js"
    // publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: false
      }
    })
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: "1122",
    compress: true,
    historyApiFallback: true,
    hotOnly: true,
    open: true
  }
});
