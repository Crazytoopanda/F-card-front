// pages/ui/store/store.js
const app = getApp()
var uid = app.global.uid
var collegeInfluence = app.global.collegeInfluence
var coin = app.global.coin

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hid_drawCard:true,
        hid_help:true,
        hid_lightBox1:true,
        hid_lightBox2:true,
        drawedCard_name: "",
        rank: ""
    },

    /**
     * 用户点击“返回”返回到主界面
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
        if (coin < 500) {
            wx.showToast({
              title: '金币不足！',
            })
        }
        else{
            app.global.coin = coin - 500
            wx.request({
                url:'http://www.fcard.site:8088/personalCard/rollpersonalcard', //必填，其他的都可以不填
                data:{  
                   uid, 
                   collegeInfluence
                },
                header:{  
                   'content-type':'application/json'
                },
                method:'POST',  
                dataType:'JSON',  
                responseType:'JSON', 
                success(res){
                    console.log(res)
                    this.setData({
                        drawedCard_name: res.data.cardName,
                        rank: res.data.rank,
                        hid_drawCard: !this.data.hid_drawCard,
                        hid_lightBox1: !this.data.hid_lightBox1
                    })

                },
                fail(){  
                    console.log('fail')
                }
            })
        }
    
    },

    /**
     * 用户点击“？”显示帮助
     */
    viewHelp:function(){
        this.setData({
            hid_help:!this.data.hid_help,
            hid_lightBox2:!this.data.hid_lightBox2
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