module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查
  //开启代理服务器（方式一）
  /*devServer: {
    proxy: 'http://localhost:5000'
  },*/
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/atguigu': {//当请求连接中带/atguigu路径是时触发代理
        target: 'http://localhost:5000',//代理服务器连接
        pathRewrite: { '^/atguigu': '' },//正则表达式去掉连接中的/atguigu前缀
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
}