const merge=require('webpack-merge')
const baseConfig=require('./webpack.base.conf.js')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const path=require('path')
module.exports=merge(baseConfig,{
  mode:'production',
  entry:{
    framework:['react','react-dom']
  },
  output:{
    filename:"js/[name].[chunkhash:5].js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../public/index.html'),
      inject:'body',
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace:true,
        removeAttributeQuotes:true
      }
    }),
    new CleanWebpackPlugin()
  ],
  optimization:{
    splitChunks:{
      chunks:'all',
      minChunks:1,
      minSize:0,
      cacheGroups:{
        framework:{
          test:"framework",
          name:"framework",
          enforce:true,
        }
      }
    }
  }
})