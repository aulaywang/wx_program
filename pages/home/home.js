// pages/home/home.js
Page({
  data: {
    name: 'Aulaywang',
    age: 18,
    students: [
      { id: 100, name: 'Alice', age: 30 },
      { id: 101, name: 'Ben', age: 28 },
      { id: 102, name: 'Cindy', age: 20 },
    ],
    counter: 0

  },
  handleBtnClick() {
    //console.log('发生了点击'),
    //this.data.counter += 1
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick() {
    //console.log('发生了点击'),
    //this.data.counter += 1
    this.setData({
      counter: this.data.counter - 1
    })
  }
})