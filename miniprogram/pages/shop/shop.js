var app = getApp()
Page({
  data: {
    hidden: true,
    count: '1',
    "bnrUrl": [{
      "url": "img/1.jpg"
    }, {
      "url": "img/2.jpg"
    }, {
      "url": "img/3.jpg"
    }],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    goodsList: [
      {
        id: 132,
        imgUrl: 'img/1.jpg',
        title: '黄道益1瓶',
        oldPrice: 75,
        newPrice: 62
      },
      {
        id: 122,
        imgUrl: 'img/2.jpg',
        title: '奶粉',
        oldPrice: 300,
        newPrice: 260
      },
      {
        id: 302,
        imgUrl: 'img/3.jpg',
        title: '雅诗兰黛小棕瓶',
        oldPrice: 1250,
        newPrice: 928
      },
      {
        id: 132,
        imgUrl: 'img/1.jpg',
        title: '黄道益1瓶',
        oldPrice: 75,
        newPrice: 62
      },
      {
        id: 122,
        imgUrl: 'img/2.jpg',
        title: '奶粉',
        oldPrice: 300,
        newPrice: 260
      },
      {
        id: 302,
        imgUrl: 'img/3.jpg',
        title: '雅诗兰黛小棕瓶',
        oldPrice: 1250,
        newPrice: 928
      }
    ]
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight + 'px'
        });
      }
    })
  },
  search: function (e) {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  showCar: function (e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})