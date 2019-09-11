Page({

    /**
     * 页面的初始数据
     */
    data: {
      phone : ''
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
  
    },
    /**
    * 自定义函数
    */ 
    formSubmit: function(e) {// 提交表单
      console.log('--------------form发生了submit事件，携带数据为：', e.detail.value)
      // 掉接口传值
      // ....
    },
    formReset: function() {// 重置表单
      console.log('-----------------form发生了reset事件')
    },


    phoneBlur(){
      wx.showToast({
        title : "请输入11位手机号码",
        icon : "none"
      })
    },
    phoneInput(){
      wx.showToast({
        title : "请输入11位手机号码",
        icon : "none"
      })
    }
  })