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
        "collegeInfluence": 50,
        "grade": 100,
        "name": "李福安",
        "rank": 1,
        "college": "计算机学院",
        "dateTime": "2022-11-4"
      },
    userInfo: null
  }
})
