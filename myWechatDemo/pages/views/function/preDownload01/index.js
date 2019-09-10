var app =  getApp();

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
     * 生命周期函数--监听页面加载`
     */
    onLoad: function (options) {
      // var num = app.getCurrentPages();
      // console.log('------页面栈', num);
      
      // 初始化数据
      this.setData({
        tabId:'1',
        current:0
      });
    },
    // 用户点击右上角分享
    onShareAppMessage: function () {
  
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
     * 小程序路由探索
     */
    gotoPage1(){// switchTab-跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      wx.switchTab({
        url: '../../../index/index',
        success: function(res){
          console.log('111------res', res);
          
          // success
          wx.showToast({
            title:'成功111',
            icon:'none'
          })
        },
        fail: function() {
          // fail
          wx.showToast({
            title:'失败',
            icon:'none'
          })
        },
        complete: function() {
          // complete
          wx.showToast({
            title:'好好学习，天天向上！',
            icon:'none'
          })
        }
      })
    },
    gotoPage2(){// reLaunch-关闭所有页面，打开到应用内的某个页面
      wx.reLaunch({
        url:'../../products/ylSmart1908002/index'
      })
    },
    gotoPage3(){// redirectTo-关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      wx.redirectTo({
        url: '../../products/ylSmart1908003/index',
        success: function(res){
          console.log('333------res', res);

          // success
          wx.showToast({
            title:'成功进入333',
            icon:'none'
          })
        },
        fail: function() {
          // fail
          wx.showToast({
            title:'失败',
            icon:'none'
          })
        },
        complete: function() {
          // complete
          wx.showToast({
            title:'好好学习，天天向上！',
            icon:'none'
          })
        }
      })
    },
    gotoPage4(){// navigateTo-保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
      wx.navigateTo({
        url: '../../products/ylSmart1908005/index',
        success: function(res){
          console.log('444------res', res);

          // success
          wx.showToast({
            title:'成功进入444',
            icon:'none'
          })
        },
        fail: function() {
          // fail
          wx.showToast({
            title:'失败',
            icon:'none'
          })
        },
        complete: function() {
          // complete
          wx.showToast({
            title:'好好学习，天天向上！',
            icon:'none'
          })
        }
      })
    },
    gotoPage5(){// navigateBack-关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
        success: function(res){
          console.log('返回上一页了');
          
          // success
          wx.showToast({
            title:"成功返回上一页",
            icon: 'none'
          })
        },
        fail: function() {
          // fail
          wx.showToast({
            title:'失败',
            icon:'none'
          })
        },
        complete: function() {
          // complete
          wx.showToast({
            title:'好好学习，天天向上！',
            icon:'none'
          })
        }
      })
    }
  })