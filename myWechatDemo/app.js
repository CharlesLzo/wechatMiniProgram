//app.js
App({
  onLaunch: function () {
    this.globalData.name = 'pxh'
  },
  watch:function(method){
    var obj = this.globalData;
    Object.defineProperty(obj,"name", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._name = value;
        console.log('是否会被执行2')
        method(value);
      },
      get:function(){
        console.log('get!!!!!!!!!!!!!!');
        
      // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
        return this._name
      }
    })
  },
  globalData: {
    userInfo: null,
    _name:'msr'
  }
})