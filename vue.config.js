const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   host: 'localhost',//target host
  //     port: 8080,
  //   proxy:{
  //     '/':{
  //       target:'https://www.fastmock.site/mock/771c626f9140555d1ae5a7aadca5ddb2/api',
  //       changeOrigin:true
  //     }
  //   }
  // }
})
