// pages/ui/store/store.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hid_drawCard:true,
        hid_help:true,
        hid_lightBox1:true,
        hid_lightBox2:true
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

    },

    /**
     * 用户点击“走访”抽卡一次
     */
    gotoMain:function(){
        wx.navigateTo({
            url: "../../../pages/ui/mainDisplay/mainDisplay",
        })

    },
    /**
     * 用户点击“走访”抽卡一次
     */
    drawCard:function(){
            this.setData({
                hid_drawCard:!this.data.hid_drawCard,
                hid_lightBox1:!this.data.hid_lightBox1
            })
    
    },

    /**
     * 用户点击“？”显示帮助
     */
    viewHelp:function(){
        this.setData({
            hid_help:!this.data.hid_help,
            hid_lightBox2:!this.data.hid_lightBox2
        })

    }
})