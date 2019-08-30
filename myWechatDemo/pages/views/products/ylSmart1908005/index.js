
Page({

    /**
     * 页面的初始数据
     */
    data: {
      num: 0,
      nodes:[
        {
          name:"于老师",
          hobbys:['抽烟', '喝酒', '烫头'],
          other: "摇滚癫狂魔王"
        },
        {
          name:"刚老师",
          hobbys:['说', '学', '逗', '唱'],
          other: "半个戏子说笑话"
        }
      ]
    },
    
    /**
    * 自定义函数
    */ 
    // 
    reduce(e){
      console.log('-----this', this);
      console.log('---------e', e);

      
      
      this.setData({
        num:num--
      })
    },
    add(){
      this.setData({
        num:num++
      })
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