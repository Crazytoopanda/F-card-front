// pages/ui/usermassage/usermassage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hidden1:true,
        sex:true,
        setsex:true,
        resex:"",
        gender:"",
        temp:"",
        UID:"668877",
        college:"",
        towerNumber:0,
        collegeInfluence:0,
        battle:1,
        win:0,
    },
    change1:function(){
        this.setData({
            hidden1:!this.data.hidden1,
            temp:this.data.gender,
            sex:this.data.setsex,
        })
    },
    changeset:function(){
        this.setData({
            gender:this.data.temp,
            hidden1:!this.data.hidden1,
            setsex:this.data.sex,
        })
        var that=this;
        if(this.data.sex){
            this.data.resex='男';
        }
        else{
            this.data.resex='女';
        }
    wx.request({
        url: 'http://110.40.186.46:8088/user/updateuser', 
        method: 'POST',
        header:{
            'content-type':'application/json',
        },
        data: {
          "uid":this.data.UID,
          "sex":this.data.resex,
          "name":this.data.gender,
        },
        success(res) {
            console.log("success");
          console.log(res);
        }
    });
    },
    getname:function(e){
        this.setData({
            temp:e.detail.value,
        })
    },
    changesex:function(){
        this.setData({
            sex:!this.data.sex
        })
    },
    gotomain: function(){
        wx.navigateTo({
          url: "../../../pages/ui/mainDisplay/mainDisplay",
          })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // wx.login({
        //     success: (res) => {
        //         // 通过 code 换取openid
        //         if (res.code) {
        //             wx.request({
        //                 url: "",
        //                 method: "post",
        //                 data: {
        //                     code: res.code,
        //                 },
        //                 success: (res) => {
        //                     if (res.data && res.data.openid) {
        //                         // 获取的 openid 存入storage，方便之后使用
        //                         wx.setStorageSync("openId", res.data.openid);
        //                     }
        //                 },
        //             });
        //         }
        //     },
        //     fail: () => {},
        //     complete: () => {},
        // });
        this.data.UID=wx.getStorageSync('openId');
    var that=this;
    wx.request({
        url: 'http://110.40.186.46:8088/user/getuserbyname', 
        method: 'GET',
        data: {
          UID:this.data.UID,
        },
        dataType: 'json',
        success(res) {
          console.log(res);
          that.setData({
            gender:res.data.user.name,
            college:res.data.user.college,
            towerNumber:res.data.user.towerNumber,
            battle:res.data.user.battle,
            win:res.data.user.win,
            collegeInfluence:res.data.user.collegeInfluence,
          });
          if(res.sex=="女"){
              that.setData({
                  sex:false,
              });
          }
        }
    });
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
