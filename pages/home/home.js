// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  onLoad: function (options) {
    //1、原生方式发送网络请求
    this.get_data_origin()
    //2、封装request发送网络请求
    //Promise最大的好处是防止出现回调地狱
    request({
      url: 'http://httpbin.org/post',
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin(){
    //发送网络请求
    //发送最简单的get请求
    // wx.request({
    //   url: 'https://api.bilibili.com/x/relation/stat?vmid=163637592',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    //发送带参数的get请求
    // wx.request({
    //   url: 'https://api.bilibili.com/x/relation/stat?vmid=163637592',
    //   data:{
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    //发送post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function(err){
    //     console.log(err)
    //   },
    //   complete: function (comp) {
    //     console.log(comp)
    //   },
    // })
  }
})