// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    testbtn1:'#ffffff',
    testbtn2: '#8a8a8a',
    type: "组件",
    bar_Height: wx.getSystemInfoSync().statusBarHeight
    		// 获取手机状态栏高度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    btn1(){this.setData({testbtn1:'#8a8a8a',testbtn2:'#ffffff'})
      
      wx.redirectTo({
        url: '/pages/index/index',
      })
      console.log('btn1');
    },
    btn2(){
      this.setData({testbtn1:'#ffffff',testbtn2:'8a8a8a'})
      wx.redirectTo({
        url: '/pages/second/video-swiper',
      })
      console.log('btn2');
    }
  }
})
