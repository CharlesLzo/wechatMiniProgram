// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 生命周期
  onLoad: function () {
    
  },
  //事件处理函数
  gotoNext(){
    wx.navigateTo({
      url: '../views/products/ylSmart1908004/index',
      success: function(res){
        // success
        console.log('----res', res);
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  preGotoNext(){
    wx.navigateTo({
      url: '../views/function/preDownload01/index?id=1',
      success: function(res){
        // success
        console.log('-----res', res);
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
