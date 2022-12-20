module.exports = {
  
    devServer: {
      // baseUrl:""
      // baseUrl:"./",
      // public:"10.101.218.243",
      // host:"10.101.218.243",
        // disableHostCheck: true,
        proxy: {
          '/users': {
              target: 'http://localhost:3001',
              // target:"",
              pathRewrite:{'^/users':'/users'},
              ws: true,
              // ws: true,
              changeOrigin: true
          },
          '/subject': {
            target: 'http://localhost:3001/',
            // target:"",
            pathRewrite:{'^/subject':'/subject'},
            ws: true,
            // ws: true,
            changeOrigin: true
        },
        '/tianqi': {
          target: 'https://apis.tianapi.com/',
          // target:"",
          pathRewrite:{'^/tianqi':'/tianqi'},
          ws: true,
          // ws: true,
          changeOrigin: true
      }
      }

      },
      
}