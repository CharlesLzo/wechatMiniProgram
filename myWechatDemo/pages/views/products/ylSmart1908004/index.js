Page({

    /**
     * 页面的初始数据
     */
    data: {
      isClick:true,
      interval: '2000',// 自动切换时间间隔
      duration: '300',// 滑动动画时长
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ]
    },
    
    /**
    * 自定义函数
    */ 
    tabClick(e){
      // console.log('----------this', this);
      console.log('----------------e', e.target.id);
      let id = e.target.id;
      // let ele = document.getElementsById('tab1');
      // console.log('========ele', ele);
      let query = wx.createSelectorQuery().select('tab1')
      console.log('========query', query);
      this.setData({
        "background":"red"
      })
      
      
      
    },
    
    /**
     * 生命周期函数--监听页面加载`
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