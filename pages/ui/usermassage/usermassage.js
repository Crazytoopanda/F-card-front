// pages/ui/usermassage/usermassage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hidden1:true,
        sex:true,
        setsex:true,
        gender: "昵称",
        temp:"",
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