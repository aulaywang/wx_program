// pages/index/index.js

// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
// const name = app.globalData.name
Page({
  data:{
    list:[]
  },
  handleGetUserInfo(event){
    console.log('233')
    console.log(event)

  },
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'http://api.bilibili.com/x/relation/stat?vmid=163637592',
      success(res){
        console.log(res.data)
        // const data = res.data.data.list
        // this.setData({
        //   list: data
        // })
      }
    })
  },
  onReady() {
    console.log('onReady')
  },
  onShow(){
    console.log('onShow')


  },
  onHide(){
    console.log('onHide')

  },
  onUnload() {
    console.log('onUnload')

  }
})