// index.js
//生成随机颜色
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({

  data:{
    msg:''
  },

  //选择视频
  chooseVideo: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      compressed:false,
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  reset:function(){
    this.videoContext.seek(0)
  },
  //开始播放
  play: function () {
    this.videoContext.play()
  },
  //暂停播放
  pause: function () {
    this.videoContext.pause()
  },
  //保存视频
  saveVideo: function () {
    var src = this.data.src
    wx.saveVideoToPhotosAlbum({
      filePath: src,
      success: function (res) {
        wx.showToast({
          title: '保存成功！',
        })
      }
    })
  },

  
  //更新弹幕文本
  bindInputBlur: function (e) {
    this.data.msg = e.detail.value
  },
  //发送弹幕
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.data.msg,
      color: getRandomColor()
    })
    this.setData({msg:''})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
})
