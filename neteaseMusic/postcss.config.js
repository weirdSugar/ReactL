
module.exports={
  plugins:()=>[
    require('postcss-preset-env')({
      autoprefixer:{
        browser:'>1%'
      }
    }),
    require('px2rem')({remUnit:37.5})
  ]
}