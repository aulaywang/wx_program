export default function request(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'post',
      data: options.data || {},
      success: function (res) {
        //console.log(res)
        resolve(res)
      },
      fail: function (err) {
        //console.log(err)
        reject(err)
      }
    })
  })
}