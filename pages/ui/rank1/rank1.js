// pages/主界面.js
var app = getApp();
var user_data = app.globalData.user;
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        wx.request({
          url: 'http://110.40.186.46:8088/rank/getAllRank',
          method: 'POST',
          data: user_data,
          header: {
            'content-type': 'application/json' 
          },
          success:  (res) => {
            console.log(res.data)
            console.log(res.data.RankTop10)
            this.setData({
                rank_list: res.data.RankTop10
            })
            console.log(this.data.rank_list)
            app.globalData.rank_list_data11=this.data.rank_list[0]['name']
            app.globalData.rank_list_data12=this.data.rank_list[0]['grade']
            app.globalData.rank_list_data13=this.data.rank_list[0]['college']

            app.globalData.rank_list_data21=this.data.rank_list[1]['name']
            app.globalData.rank_list_data22=this.data.rank_list[1]['grade']
            app.globalData.rank_list_data23=this.data.rank_list[1]['college']

            app.globalData.rank_list_data31=this.data.rank_list[2]['name']
            app.globalData.rank_list_data32=this.data.rank_list[2]['grade']
            app.globalData.rank_list_data33=this.data.rank_list[2]['college']
            // console.log(app.globalData.rank_list_data11)
            this.setData({
                rank_list_data11:app.globalData.rank_list_data11,
                rank_list_data12:app.globalData.rank_list_data12,
                rank_list_data13:app.globalData.rank_list_data13,
                rank_list_data21:app.globalData.rank_list_data21,
                rank_list_data22:app.globalData.rank_list_data22,
                rank_list_data23:app.globalData.rank_list_data23,
                rank_list_data31:app.globalData.rank_list_data31,
                rank_list_data32:app.globalData.rank_list_data32,
                rank_list_data33:app.globalData.rank_list_data33,
            })
        },
        })
        // console.log(app.globalData.rank_list_data11)
        // // console.log(this.data.rank_list[0]['college'])
        // // app.globalData.rank_list_data11=this.data.rank_list[0]['college']
        // console.log(app.globalData.rank_list_data11)

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
    gotomessage1(){
        wx.navigateTo({     
            url:"../rank1/rank1"     
        })                 
     }, 
     gotomessage2(){
        wx.navigateTo({     
            url:"../rank3/rank3"     
        })                 
     }, 
     gotomessage3(){
        wx.navigateTo({     
            url:"../rank2/rank2"     
        })                 
     }, 
     gotomessage4(){
        wx.navigateBack({
            delta:1
    })             
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