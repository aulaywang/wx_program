// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'Kobe',
    lastname: 'Bryant',
    age: 22,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    isShow1:true,
    score: 45,
    movies: ['盗梦空间','星际穿越','大话西游'],
    nums: [
      [10,11,2,3],
      [102, 131, 32, 333],
      [10223, 11323, 2223, 3233],
    ],
    letters: ['a','b','c']
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    //console.log('-----')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    //console.log('-----')
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleSwitchShow1() {
    //console.log('-----')
    this.setData({
      isShow1: !this.data.isShow1
    })
  },
  handleIncrement1() {
    //console.log('-----')
    this.setData({
      score: this.data.score + 6
    })
  },
  handleIncrement2() {
    //console.log('-----')
    this.setData({
      score: this.data.score - 6
    })
  }
})