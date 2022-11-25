// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  
  globalData: {
    rank_list_data11: "",
    rank_list_data12:"",
    user: {
    "collegeInfluence":999,
      "coin":5000,
      "name":"李福安" ,
      "password":"123456" ,
      "college":"计算机学院" ,
      "phoneNumber":"13110677554" ,
      "dateTime":"2022-07-04 00:00:00" ,
      "sex":"男" ,
      "battle":0,
      "win":0,
      "towerNumber":99,
      "uid":"679817" 
      },
    userInfo: null
  }
})
