// pages/battle/chooseLevel/chooseLevel.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        situationDynamic: 1, 
        touchStartLoca: 0, 
        touchEndLoca: 0
    },
    /**
     * 触摸事件，开始, 移动与结束
     */
    touchStartOper: function(e) {
        this.data.touchStartLoca = e.touches[0].pageX
        this.data.touchEndLoca = e.touches[0].pageX
    },
    touchMoveOper: function(e) {
        this.data.touchEndLoca = e.touches[0].pageX
    },
    touchEndOper: function(e) {
        let start = this.data.touchStartLoca
        let end = this.data.touchEndLoca
        if(start < end - 25) {
            let temp = this.data.situationDynamic
            if(temp > 1) {
                this.setData({
                    situationDynamic: temp - 1
                })
            }
        } else if(start > end + 25) {
            let temp = this.data.situationDynamic
            if(temp < 9) {
                this.setData({
                    situationDynamic: temp + 1
                })
            }
        }
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