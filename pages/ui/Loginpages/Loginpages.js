// pages/ui/Loginpages/Loginpages.js
const app=getApp()
Page({
    
    gotomain: function(){
        wx.navigateTo({
          url: "../../../pages/ui/mainDisplay/mainDisplay",
          })
      },
    gotoid: function(){
        wx.navigateTo({
          url: "../../../pages/ui/IDlogin/IDlogin",
          })
      },
    /**
     * 页面的初始数据
     */
    data: {

    },

    request:function  (requestMapping, data, requestWay, contentType) {
        console.log('12356')
        wx.showLoading({
          title: '请稍后',
        })
        return new Promise(function (resolve, reject) {
            console.log('请求中。。。')
            wx.request({
              url: 'http://110.40.186.46:8088' + requestMapping,
              data: data,
              header: {
                    'content-type': contentType // 默认值
              },
              timeout: 3000,
              method: requestWay,
              success: (res)=> {
                  //console.log(res)
                  if (res.data.success == false || res.data.statusCode == 404) {
                    reject(res)
                    } else {
                        resolve(res)
                    }
              },
              fail: (e) => {  
                  wx.showToast({
                  title: '连接失败',
                  icon: 'none'
                  })},
              complete: () => {
                  wx.hideLoading()
              }
            })
        })
        
    },

    getOpenId:function (app) {
        const that = this
        return new Promise(function (resolve, reject) {
            wx.login({
              success: (yes) => {
                var requestMapping = '/user/getopenid'
                var data = {
                    code: yes.code
                }
                var requestWay = 'GET'
                var contentType = 'application/json'
                var p = that.request(requestMapping, data, requestWay, contentType)
                console.log(p)
                p.then(res => {
                    app.globalData.user.uid = res.data;
                    resolve(res)
                }).catch(e=>{
                    reject(e)
                })
              },
              fail(e){
                  console.log(e)
              }
            })
        })
    },
    
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})