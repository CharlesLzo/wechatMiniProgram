//app.js
App({
  onLaunch: function () {

  },
  setWatcher:function(){
    Object.defineProperty(this,'globalData',{
      get:()=>{
        return this._globalData
      },
      set:(value)=>{
        let current = getCurrentPages().reverse()[0]
        if(current.data.globalData){
          current.setData({
            globalData: value
          })
        }
        this._globalData = value
      }
    })
  },
  // setWatcher: function(key, fn){
  //   console.log('------要监听的数据', key);

  //   var obj = this.globalData;
  //   console.log('---------globalData', obj);
    
  //   // var ele = obj[key];//obj[key]这个不能放在Object.defineProperty里
  //   // if(ele){
  //   //   fn(ele);
  //   // }
  //   Object.defineProperty(obj, key, {
  //     configurable: true,
  //     enumerable: true,
  //     set: function (value) {
  //       console.log('--------->this:', this);
        
  //       console.log('--------set时的key值', key);

  //       this['_' + key] = value;
  //       fn(value);    //数据有变化的时候回调函数，实现同步功能
  //     },
  //     get: function () {
  //       // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
  //       console.log('--------get时的key值', key);

  //       return this._name;
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null,
  // },
  _globalData: {},
})