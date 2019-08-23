
Page({

    /**
     * 页面的初始数据
     */
    data: {
      interval: '2000',// 自动切换时间间隔
      duration: '300',// 滑动动画时长
      current: '0',// 当前所在滑块的 index
      currentItemId: '2',// 设置默认一开始显示第几张图片
      displayMultipleItems: '1',// 设置一次显示几张图片
      previousMargin: '10px',// 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMmargin: "10px",// 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      easingFunction: 'default',// 指定 swiper 切换缓动动画类型
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ]
    },
    
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })