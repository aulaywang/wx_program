const TOKEN = 'token'

App({
  globalData: {
    token:''
  },
  onLaunch: function () {
    //先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //判断token是否有值
    if (token && token.length !== 0){
      //验证是否过期
      this.check_token(token)
    }else{
      //登录操作
      this.login()
    }
    
  },
  check_token(token){
    console.log('执行了验证token操作')
    wx.request({
      url: '',
      method: '',
      header:{

      },
      success: (res) => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  login(){
    console.log('执行了登录操作')
    wx.login({
      //code只有五分钟有效期
      success: (res) => {
        //console.log(res)
        //获取code
        const code = res.code;
        //将code发送给服务器
        wx.request({
          url: '',
          data: {

          },
          success: (res) => {
            //console.log(res)
            //取出token
            const token = res.data.token;
            //将token保存在globalData中
            this.globalData.token = token;
            //console.log(this.globalData.token)
            //进行本地/同步存储
            // wx.setStorage({
            //   key: '',
            //   data: '',
            // })
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
  
})
