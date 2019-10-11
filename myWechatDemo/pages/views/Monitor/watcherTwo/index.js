
// const { watch, computed } = require('./vuefy.js')
import { watch, computed } from './watcher.js'

Page({
  data: {
    test: { a: 123 },
    test1: 'test1',
  },
  onLoad() {
    console.log('----------this', this);
    
    // computed(this, {
    //   test2: function() {
    //     return this.data.test.a + '2222222'
    //   },
    //   test3: function() {
    //     return this.data.test.a + '3333333'
    //   }
    // })
    watch(this, {
      test: function(newVal) {
        console.log('--------------------newVal', newVal)
        
        this.setData({ test1: newVal.a })
      }
    })
  },
  changeTest() {
    this.setData({ test: { a: Math.random().toFixed(2) } })
  },
})