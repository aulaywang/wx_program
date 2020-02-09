// pages/detail/detail.js
Page({

  onLoad: function (options) {
    console.log(options)
  },
  onUnload(){
    // console.log('页面退出')
    // getCurrentPages
    const pages = getCurrentPages()
    //console.log(pages)
    const home = pages[pages.length - 2]

    // 调用页面对象的setData
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
  

  
})