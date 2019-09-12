//Component Object
Component({
  properties: {
    //弹窗标题 
    title: {
      type: String,
      value: '标题' // 默认值
    },
    // 弹窗内容 
    content: {
      type: String,
      value: '弹窗内容'
    },
    exterCtrl: {
      type: Boolean
    },
    // // 弹窗确认按钮文字 
    // confirmText: {
    //   type: String,
    //   value: '确定'
    // },
    // myProperty:{
    //   type:String,
    //   value:'',
    //   observer: function(){}
    // },
  },
  data: {
    isShow: false,
    exterCtrl : false,
    title : '',
    content : '',
    srueBtn : true,
    cancelBtn : true
  },
  methods: {
    //隐藏弹框 
    hideDialog() { 
      this.setData({ 
        isShow: !this.data.isShow, 
        exterCtrl: true 
      }) 
    },
    //展示弹框 
    showDialog() { 
      this.setData({ 
        isShow: !this.data.isShow 
      }) 
    },
    confirmEvent() { 
      this.triggerEvent("confirmEvent"); 
      this.setData({ 
        "exterCtrl": true 
      }) 
    },
    GetInfo(e) { 
      console.log('-------dialog之GetInfo中的e', e); 

      this.triggerEvent("GetInfo", e.detail); 
    },
  },
  created: function(){
    console.log('---create');
    
  },
  attached: function(){
    console.log('---attached');
    
  },
  ready: function(){
    console.log('---ready');
    
  },
  moved: function(){
    console.log('---moved');
    
  },
  detached: function(){
    console.log('---detached');
    
  },
});