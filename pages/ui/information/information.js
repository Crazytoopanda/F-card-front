// pages/ui/information/information.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"昵称",
        college:"计算机与大数据学院",
        password:"",
        UID:"231345",
        sex:true,
        resex:"",
    },
    getname:function(e){
        this.setData({
            name:e.detail.value,
        })
    },
    getcollege:function(e){
        this.setData({
            college:e.detail.value,
        })
    },
    getpassword:function(e){
        this.setData({
            password:e.detail.value,
        })
    },
    changesex:function(){
        this.setData({
            sex:!this.data.sex
        })
    },
    setinformation:function(){
        console.log("success");
        wx.login({
            success: (res) => {
                // 通过 code 换取openid
                if (res.code) {
                    wx.request({
                        url: "",
                        method: "post",
                        data: {
                            code: res.code,
                        },
                        success: (res) => {
                            if (res.data && res.data.openid) {
                                // 获取的 openid 存入storage，方便之后使用
                                wx.setStorageSync("openId", res.data.openid);
                            }
                        },
                    });
                }
            },
            fail: () => {},
            complete: () => {},
        });
        this.data.UID=wx.getStorageSync('openId');
        console.log(this.data.UID);
        if(this.data.sex){
            this.setData({
                resex:'男'
            })
        }
        else{
            this.setData({
                resex:'女'
            })
        }
        console.log(this.data.resex);
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
              "sex":this.data.resex,
              "college":this.data.college,
              "collegeInfluence":0,
              "coin":0,
              "phoneNumber":"00000000000",
              "dateTime":"00000",
              "towerNumber":0,
              "win":0,
              "battle":0,
            },
            
            success(res) {
              console.log(res);
              wx.navigateTo({
                url: "../../../pages/ui/mainDisplay/mainDisplay",
                })
            }
        });
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