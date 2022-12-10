// pages/ui/store/store.js
const app = getApp()

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
        rank: "",
        coin : app.globalData.user.coin,
        uid: app.globalData.user.uid,
        collegeInfluence: app.globalData.user.collegeInfluence
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
        if (this.data.coin < 1000) {
            wx.showToast({
              title: '金币不足！',
            })
        }
        else{
            wx.request({
                url:'http://110.40.186.46:8088/personalCard/rollpersonalcard', //必填，其他的都可以不填
                data:{  
                   "uid":app.globalData.user.uid, 
                   "collegeInfluence":app.globalData.user.collegeInfluence
                },
                header:{  
                   'content-type':'application/json'
                },
                method:'POST',  
                success:(res)=>{
                    console.log(res)
                    this.setData({
                        coin: this.data.coin - 1000,
                        drawedCard_name: res.data.personalCard.cardName,
                        rank: res.data.personalCard.rank,
                        hid_drawCard: !this.data.hid_drawCard,
                        hid_lightBox1: !this.data.hid_lightBox1
                    })
                    wx.request({
                      url: 'http://110.40.186.46:8088/user/updateuser ',
                      data:{  
                        "uid":app.globalData.user.uid,
                        "coin": this.data.coin
                     },
                     header:{  
                        'content-type':'application/json'
                     },
                     method:'POST', 
                     success:(res)=>{
                         console.log(res)
                     },
                     fail:()=>{
                        console.log('failed!')
                     }
                    })
                },
                fail(){  
                    console.log('fail')
                }
            })
        }
    
    },

    /**
     * 抽完卡点击背景弹窗消失
     */
    hidDrawCard:function () {
        this.setData({
            hid_drawCard: !this.data.hid_drawCard,
            hid_lightBox1: !this.data.hid_lightBox1,
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