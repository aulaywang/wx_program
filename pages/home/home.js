// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 1000,
      icon: 'loading',
      //image: '/assets/icon/icon.png',
      mask: true,
      success: function () {
        console.log('展示弹窗成功')
      },
      fail: function () {
        console.log('展示弹窗失败')
      },
      complete: function () {
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容哈哈哈',
      // showCancel: false,
      cancelText:'退出',
      cancelColor: 'red' ,
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消')
        }
        if (res.confirm) {
          console.log('用户点击了确定')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      //必须手动隐藏
      wx.hideLoading()
    },1000)
    
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })

  },
  onShareAppMessage: function(options){
    
  }
})