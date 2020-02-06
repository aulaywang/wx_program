// pages/home/home.js
Page({

  data: {
    counter: 0,
    isShow: true

  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event){
    console.log(event)
    //const item = event.detail.index;
    //console.log(item)
  },
  handleIncrementCpn(){
    //console.log('------')
    //获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel)
    //通过setData修改组件数据(最好不要在这边修改，而是在myselect.js中修改)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    //做一个接口
    my_sel.incrementCounter(10)
  },
  handleChangeShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  }
  
})