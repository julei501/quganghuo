// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
  }


})

wx.cloud.init({ env: 'minicloud' })
const db = wx.cloud.database()
const test = db.collection('test')

