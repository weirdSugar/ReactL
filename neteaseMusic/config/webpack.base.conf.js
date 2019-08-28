const path=require('path');
const DIST_PATH=path.resolve(__dirname,'../dist');
const APP_PATH=path.resolve(__dirname,'../app')
module.exports={
  entry:{
    app:'./app/index.js',
  },
  output:{
    filename:'js/bundle.js',
    path:DIST_PATH,
  },

  module:{
    rules:[
      {
        test:/\.js?$/,
        use:'babel-loader',
        include:APP_PATH,
      },
      {
        test:/\.css$/,
        use:[
          { loader:'style-loader' },
          { loader:'css-loader' },
          {
            loader:'postcss-loader',
          },
        ]
      },
      {
        test:/\.less$/,
        use:[
          {  loader: "style-loader"  },
          {  loader: "css-loader" },
          {
            loader:'postcss-loader',
          },
          { loader:'less-loader' }
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {  loader: "style-loader"  },
          {  loader: "css-loader" },
          {
            loader:'postcss-loader',
          },
          { loader:'sass-loader' }
        ]
      },
      {
        test:/\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use:'url-loader',
        exclude:/node_modules/,
        options:{
          publicPath:'/',
          name:'images/[name].[ext]',
          limit:1024
        }
      }
    ]
  }
}