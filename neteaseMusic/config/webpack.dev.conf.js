const baseWebpackConfig=require('./webpack.base.conf');
const merge=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
const path=require('path')
module.exports=merge(baseWebpackConfig,{
  mode:'development',
  output:{
    filename:'js/[name].[hash:16].js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'public/index.html',
      inject:'body',
      minify:{
        // html5:true
      },
      
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    port:'1122',
    contentBase:path.join(__dirname,'../public'),
    compress:true,
    // historyApiFallback:true,
    hot:true,
    https:false,
    open:true,
  }
})