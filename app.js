App({
  onLaunch: function () {
    console.log('初始化完成')
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
    // setTimeout(function(){
    //   const err=new Error()
    //   throw err
    // },3000)
  },

  onShow: function (options) {
    console.log('界面显示')
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;

    }
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },

  onHide: function () {
    console.log('被隐藏')
  },

  onError: function (msg) {
    console.log('发生错误')
  },

  globalData : {
    name:'Aulaywang',
    age: 18
  }
})
