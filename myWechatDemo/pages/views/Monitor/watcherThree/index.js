/**
 * 
 * @param {*} ctx 上下文环境
 * @param {*} obj 要监听的对象
 */
function watch (ctx, obj){
    Object.keys(obj).forEach(key => {
        console.log('----key', key);
        console.log('----key的value', ctx.data[key]);

        defineReactive(ctx.data, key, ctx.data[key], value=>{
            obj[key].call(ctx, value);
        })
    })
}

/**
 * 
 * @param {*} data 上下文环境里所有的数据（记为数据对象A）
 * @param {*} key 数据对象A里每个数据对应的键——监听对象
 * @param {*} val 监听对象对应的值
 * @param {*} fn 
 */
function defineReactive(data, key, val, fn) {
    let subs = data['$' + key] || [];
    Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get: function() {
          if (data.$target) {
            subs.push(data.$target)
            data['$' + key] = subs
          }
          return val
        },
        set: function(newVal) {
          if (newVal === val) return
          fn && fn(newVal)
          if (subs.length) {
            // 用 setTimeout 因为此时 this.data 还没更新
            setTimeout(() => {
              subs.forEach(sub => sub())
            }, 0)
          }
          val = newVal
        },
    })
}

Page({
    data:{
        money: 123,
        newMoney:"……",
        name: '快，叫爸爸！',
        newName: 'emm~'
    },
    onLoad:function(options){
        
        watch(this, {
            money: function (newVal) {
                console.log('---------newVal', newVal);
                
                this.setData({ newMoney: newVal });
            },
            name: function (newVal) {
                console.log('---------newVal', newVal);
                
                this.setData({ newMoney: newVal });
            }
        })
    },
    changeVal(){
        this.setData({
            money: Math.random().toFixed(2),
            name: '儿砸，我是你爸爸~！'
        });
    }
})