var App = getApp();

function Watcher() {
  let changeValue = null;
  let resArr = [];
  Object.defineProperty(this, 'changeValue', {
    configurable: true,
    enumerable: true,
    get: function() {
        console.log('get!!!!!!!!!!!!');

      return changeValue;
    },
    set: function(value) {
      console.log('-=-=-=-=-=-=-=-value', value);

      changeValue = value;
      resArr.push({ val: changeValue });
      fn(resArr);
    }
  });

  this.getWatching = function(){ 
    console.log('==========resArr', resArr);
    
    return resArr; 
  };
}

Page({
  data: {
    idea: '',
    newIdea: '',
  },
  onLoad: function (options) {    
    console.log('--------App', App);
    
    App.watch(this.watchBack)
  },
  // attached: function () {
  //   let that = this;
  //   app.setWatching('showDebug', (v)=>{
  //       that.setData({
  //           showDebug: app.globalData.showShop
  //       });
  //   });
  // },
  watchBack: function (name){
    console.log(22222);
    console.log('this.name==' + name)
  },
  // 探索--鼠标失焦监听数据变化
  checkValue(e){
    let oldValue = this.data.idea;
    let ewValue = e.detail.value;
    console.log('--------oldValue', oldValue);
    console.log('--------newValue', ewValue);
    
    let obj = new Watcher(this.backMethod);
    if(ewValue === oldValue) {
      obj.changeValue;
    } else {
      obj.changeValue = ewValue;
      let reses = obj.getWatching();
      this.setData({idea: reses[0].val});
      console.log('--------this.data.idea', this.data.idea);
    }
  },
})