const path=require('path');
const DIST_PATH=path.resolve(__dirname,'../dist');
const APP_PATH=path.resolve(__dirname,'../src')
module.exports={
  entry:{
    app:'./index.js',
  },
  output:{
    filename:'js/bundle.js',
    path:DIST_PATH,
  },
  module:{
    rules:[
      {
        test:/\.js?$/,
        loader:'babel-loader',
        // include:APP_PATH
        exclude:/node_moudles/,
      },
      {
        test:/\.(css|scss)$/,
        use:[
          { loader:'style-loader' },
          { loader:'css-loader' },
          { loader:'sass-loader' },
        ]
      },
      // {
      //   test:/\.scss$/,
      //   use:[
      //     { loader:'style-loader' },
      //     { loader:'css-loader' },
      //     { loader:'sass-loader' },
      //   ]
      // },
      {
        test:/\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        loader:'url-loader',
        exclude:/node_modules/,
        options:{
          publicPath:'/',
          name:'images/[name].[ext]',
          limit:10000
        }
      }
    ]
  }
}