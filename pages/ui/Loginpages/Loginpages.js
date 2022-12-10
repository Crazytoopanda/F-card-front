// pages/ui/Loginpages/Loginpages.js
const app=getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        hid_register: true,
        hid_lightBox1:true,
        hid_IDLogin: true,
        hid_lightBox2:true,
        name:"用户123",
        college:"计算机与大数据学院",
        password:"",
        sexFlag:true,
        resex:"",
        UID:""
    },
    setName:function(e){
        this.setData({
            name:e.detail.value,
        })
    },
    setCollege:function(e){
        this.setData({
            college:e.detail.value,
        })
    },
    setPassword:function(e){
        this.setData({
            password:e.detail.value,
        })
    },
    setSex:function(){
        this.setData({
            sexFlag:!this.data.sexFlag
        })
    },
    gotomain: function(){
        wx.navigateTo({
          url: "../../../pages/ui/mainDisplay/mainDisplay",
          })
      },
    
    /**
     * 封装request请求
     */
    request:function  (requestMapping, data, requestWay, contentType) {
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

    /**
     * 获取openId
     */
    async getOpenId() {
        const that = this
        return new Promise(function (resolve, reject) {
            wx.login({
              success: (yes) => {
                var requestMapping = '/user/getopenid'
                var data = {
                    code: yes.code
                }
                console.log(data)
                var requestWay = 'GET'
                var contentType = 'application/json'
                var p = that.request(requestMapping, data, requestWay, contentType)
                p.then(res => {
                    wx.setStorageSync("openId", res.data.data.openid)
                    console.log("openId",res.data.data.openid)
                    app.globalData.user.uid=wx.getStorageSync('openId')
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
     * 获取当前时间
     */
    getTime:function () {
        wx.request({
          url: 'http://www.fcard.site:8088//user/currenttime',
          method: 'GET',
          header:{
            'content-type':'application/json'
          },
          success:(res)=>{
              console.log("getTimeSuccessfully")
              return res
          },
          fail:(res)=>{
              console.log("getTimeFailed")
          }
        })
    },
    /**
     * 显示/隐藏注册窗口
     */
    hidRegister:function () {
        this.setData({
            hid_register: !this.data.hid_register,
            hid_lightBox1: !this.data.hid_lightBox1
        })
    },
    /**
     * 
     * 用户点击一键登录根据本机有无openId进行跳转，若没有则注册，如果有就直接进入游戏
     */
    LoginOrRegister:function () {
        this.setData({
            UID:wx.getStorageSync('openId')
        })
        if(this.data.UID!=""){
            console.log("uid exists!")
            this.gotomain()
        }
        else{
            this.hidRegister()
            if(this.data.sexFlag){
                this.setData({
                    sex:'男'
                })
            }
            else{
                this.setData({
                    sex:'女'
                })
            }
        }
    },
    /**
     * 创建用户
     */
    async createUser() {
        await this.getOpenId()
        console.log(this.data)
        this.setData({
            UID: app.globalData.user.uid
        })
        wx.request({
            url: 'http://110.40.186.46:8088/user/create', 
            method: 'POST',
            header:{
                'content-type':'application/json'
            },
            data: {
              "uid":this.data.UID,
              "name":this.data.name,
              "password":this.data.password,
              "sex":this.data.sex,
              "college":this.data.college,
              "collegeInfluence":0,
              "coin":0,
              "phoneNumber":"00000000000",
              "dateYime":this.getTime(),
              "towerNumber":0,
              "win":0,
              "battle":0,
            },
            success(res) {
              console.log("createUser",res);
              wx.navigateTo({
                url: "../../../pages/ui/mainDisplay/mainDisplay",
                })
            }
        });
    },
    /**
     * 显示/隐藏ID登录窗口
     */
    hidIDLogin:function () {
        this.setData({
            hid_IDLogin: !this.data.hid_IDLogin,
            hid_lightBox2: !this.data.hid_lightBox2
        })
    },
    /**
     * 输入ID和password
     */
    inputID:function(e){
        this.setData({
            UID:e.detail.value,
        })
    },
    inputPassword:function(e){
        this.setData({
            password:e.detail.value,
        })
    },
    /**
     * 输入完成ID和Password进行确认
     */
    IDLogin:function () {
        wx.request({
          url: 'http://110.40.186.46:8088/user/getuserbyname',
          method: 'GET',
          header:{
                'content-type':'application/json'
          },
          data:{
              "UID":this.data.UID,
          },

          success:(res)=>{
              if(this.data.UID!=null && this.data.password==res.data.user.password){
                  wx.showToast({
                    title: '登录成功！',
                  })
                  this.gotomain()
              }else{
                  wx.showToast({
                    title: 'ID或密码错误！',
                  })
              }
          },
          fail:(res)=>{
              console.log('fail')
          }
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