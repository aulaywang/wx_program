// pages/image/image.js
Page({

  data: {
      imagePath:''
  },

  handleChooseAlbum(){
    // console.log('success')
    wx.chooseImage({
      success: (res)=> {
        //取出路径
        //console.log(res)
        const path = res.tempFilePaths[0]
        //设置imagePath
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
  
})