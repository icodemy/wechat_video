
Page({
  data: {
    videoList: [{
      id: 0,
      url: 'http://txmov2.a.kwimgs.com/upic/2022/01/09/10/BMjAyMjAxMDkxMDMwMzZfOTA5NDY1OTcyXzY0NTA3OTMzMDc4XzBfMw==_b_B03762bc1d8b250184bd7ec8ec367638f.mp4?tag=1-1649919337-vdg-0-xt6krktbvd-6371920bcbe2e5b1&clientCacheKey=3xhvr2e2ypfttmg_b.mp4&tt=b&bp=13330'
    },
    {
      id: 1,
      url: 'http://txmov2.a.kwimgs.com/upic/2022/01/25/16/BMjAyMjAxMjUxNjQxMjZfMTczODcwNjk4M182NTcyNDY4NDQyOF8wXzM=_b_Bad756cfb386ba86a8e985c55acdb4ea9.mp4?tag=1-1649920726-vdg-0-zensahsham-5f1186c4ad9c0d5b&clientCacheKey=3xsz7x63iba7xim_b.mp4&tt=b&bp=13330'
    },
    {
      id: 2,
      url: 'http://txmov2.a.kwimgs.com/upic/2022/02/16/08/BMjAyMjAyMTYwODU1NDlfMTcwNjA0MTQ1N182NzY4NjE1NzE4N18xXzM=_b_B1e8db220903a2a1f997de16c2cec1473.mp4?tag=1-1649920800-vdg-0-yqjhqawzb8-2350b5773d5da022&clientCacheKey=3xcivrvev2wpi5q_b.mp4&tt=b&bp=13330'
    }
    ],
    videoindex: 3,
    listlength: 4,
  },

  onPlay(e) { },
  onPause(e) {
    // console.log('pause', e.detail.activeId)
  },
  onEnded(e) { },
  onError(e) { },
  onWaiting(e) { },
  onTimeUpdate(e) { },
  onProgress(e) {
  },
  onLoadedMetaData(e) {
  },

  change(e) {
    let that = this
    var current_index = e.detail.activeId
    // console.log(e.detail);
    var rest = that.data.listlength - current_index
    console.log('rest', rest);
    if (rest === 4) {
      //获取6条视频
      for (var i = 0; i < 9;i++) {
        wx.request({
          url: 'https://api.klizi.cn/API/video/ks.php?data=&type=json&lx=',
          success: function (res) {
            // console.log('onload', '================');
            if (res.data.视频链接 !== null) {
              var videolist = []
              videolist.push({ id: that.data.videoindex, url: res.data.视频链接 })
              // console.log('preload');
              // console.log('preload data:', videolist);
              that.setData({
                videoList: videolist,
                videoindex: that.data.videoindex + 1,
                listlength: that.data.listlength + 1
              })
            }else{
              i = i - 1
            }
          },
          fail(error) {
            console.log('error', error);
            i = i - 1
          }
        })
      }
    }

  },

  onReady: function () {
    let that = this
    //获取9条视频
    for (var i = 0; i < 9;i++) {
      wx.request({
        url: 'https://api.klizi.cn/API/video/ks.php?data=&type=json&lx=',
        success: function (res) {
          // console.log('onload', '================');
          if (res.data.视频连接 !== null) {
            var videolist = []
            videolist.push({ id: that.data.videoindex, url: res.data.视频链接 })
            // console.log('onready');
            // console.log('request data:', videolist);
            that.setData({
              videoList: videolist,
              videoindex: that.data.videoindex + 1,
              listlength: that.data.listlength + 1
            })
          }else{
            i = i - 1
          }

        },
        fail(error) {
          console.log('error', error);
          i = i - 1
        }
      })
    }
  }
})
