const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath:'/miaomiao', //项目中引入静态资源（js、css）时的基础路径
  transpileDependencies: true,
  devServer:{
    host: 'localhost',//target host
      port: 8080,
    proxy:{
      '/api':{
        target:'https://www.fastmock.site/mock/771c626f9140555d1ae5a7aadca5ddb2/api',
        changeOrigin:true,
        pathRewrite:{'^/api':''}
      }
    }
  }
})
