var App = getApp();

function watcher(key) {
  let changeValue = null;
  let resArr = [];
  let pattern = {
    get: function() {
        console.log('get!');

      return changeValue;
    },
    set: function(value) {
      changeValue = value;
      resArr.push({ key: changeValue });
    }
  };

  Object.defineProperty(this, key, pattern);

  this.getWatching = function(){ 
    return resArr; 
  };
}

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}






Page({
  data: {
    idea: '',
    newIdea: ''
  },
  onLoad: function (options) {    
    
  },
  checkValue(e){
    let ele = this.data.idea;// oldValue
    let val = e.detail.value;// newValue
    console.log('--------oldValue', ele);
    console.log('--------newValue', val);
    
    if(val === ele) return;
    if(val != ele){
      console.log('爸爸触发了');
      
      let obj = new watcher('newObj');
      obj.changeValue;
      obj.changeValue = val;
      let changeValue = obj.getWatching();
      console.log('-=-=-=-=-=-===changeValue', changeValue);
      this.setData({newIdea: changeValue});
      console.log('--------this.data.newIdea', this.data.newIdea);
      
    }
  },
  getValue(){
    var arc = new Archiver();
    arc.temperature; // 'get!'
    arc.temperature = 11;
    arc.temperature = 13;
    var res = arc.getArchive(); // [{ val: 11 }, { val: 13 }]
    console.log('-=-=-=-=-=-=--=-res', res);
  },
  otherEvent(){
    // let Person = {}
    // Object.defineProperty(Person, 'sex', {
    //   configurable: true,
    //   enumerable: true,
    //   value: '男',
    //   writable:false,
    // })
    // console.log('---------给person对象写入一个属性', Person);
 
    // Person.sex = '女';
    // console.log('----------修改后的person', Person);
  }
  
})