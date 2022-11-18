// pages/ui/setting/setting.js
Page({
    gotomain: function(){
        wx.navigateTo({
          url: "../../../pages/ui/mainDisplay/mainDisplay",
          })
      },
    /**
     * 页面的初始数据
     */
    data: {
        hidden1:true,
        hidden2:true,
        hidden3:true,
        hiddenhelp:true,
        hiddencall:true,
    },
    change1:function(){
        this.setData({
            hidden1:!this.data.hidden1
        })
    },
    change2:function(){
        this.setData({
            hidden2:!this.data.hidden2
        })
    },
    change3:function(){
        this.setData({
            hidden3:!this.data.hidden3
        })
    },
    changehelp:function(){
        this.setData({
            hiddenhelp:!this.data.hiddenhelp
        })
    },
    changecall:function(){
        this.setData({
            hiddencall:!this.data.hiddencall
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