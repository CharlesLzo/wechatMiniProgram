Page({

    /**
     * 页面的初始数据
     */
    data: {
  
    },
    
    // 图片加载成功
    imgLoadSuccess(){
      console.log("图片加载成功");
      
    },
    imgLoadSuccessBase64(){
      console.log("Base64网络-图片加载成功");
      
    },
  
    // 图片加载失败
    imgLoadFail(){
      console.log("图片加载失败");
      
    },
    imgLoadFailBase64(){
      console.log("Base64网络-图片加载失败");
      
    }
   
  })