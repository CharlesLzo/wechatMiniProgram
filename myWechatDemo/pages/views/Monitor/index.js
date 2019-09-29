var App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    App.setWatcher('name', _this.watch())
  },
  /**
  * 自定义函数
  */ 
  watch(value){
    console.log('---------回调函数返回的值', value)
    
  }
})