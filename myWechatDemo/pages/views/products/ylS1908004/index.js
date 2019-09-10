Page({

    /**
     * 页面的初始数据
     */
    data: {
      tabId:'',
      tabs:[
        {
          id:"1",
          content:"标签1"
        },
        {
          id:"2",
          content:"标签2"
        },
        {
          id:"3",
          content:"标签3"
        }
      ],
      duration: 300,// 滑动动画时长
      current: 0,// 当前所在滑块的 index
      currentItemId: 1,// 设置默认一开始显示第几个滑块
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
      // console.log('----------wx', wx);
      // console.log('----------e', e);
      // 控制tab标签的切换
      this.setData({
        tabId:e.target.id,
        current:e.target.id - 1
      });
    },
    // 滑动切换
    swiperChange(e){
      // console.log('----------eSW', e);
      if(e.detail.source === 'touch') {
        this.setData({
          tabId:e.detail.current + 1 + '',
          current:e.detail.current
        })
      }
    },
    
    /**
     * 生命周期函数--监听页面加载`
     */
    onLoad: function (options) {
      // 初始化数据
      this.setData({
        tabId:'1',
        current:0
      });
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