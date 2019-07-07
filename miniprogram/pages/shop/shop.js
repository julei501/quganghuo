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
        id: 1,
        imgUrl: 'img/1.jpg',
        title: '黄道益1瓶',
        oldPrice: 75,
        newPrice: 62,
        stock: '99',
        sales: '12'
      },
      {
        id: 2,
        imgUrl: 'img/2.jpg',
        title: '奶粉',
        oldPrice: 300,
        newPrice: 260,
        stock: '115',
        sales: '35'
      },
      {
        id: 3,
        imgUrl: 'img/3.jpg',
        title: '雅诗兰黛小棕瓶',
        oldPrice: 1250,
        newPrice: 928,
        stock: '150',
        sales: '26'
      }
    ]
  },
  onLoad: function () {
    //var that = this
    //调用应用实例的方法获取全局数据
    //app.getUserInfo(function (userInfo) {
      //更新数据
     // that.setData({
     //   userInfo: userInfo
     // })
    //})
    //wx.getSystemInfo({
     // success: function (res) {
      //  that.setData({
      //    height: res.windowHeight + 'px'
       // });
     // }
   // })
  },
  search: function (e) {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  showCar: function (e){

    var that = this
    //获取当前点击元素的id(索引值)
    var Id = e.currentTarget.id;
    //获取当前点击元素的属性值。
    var mesg = that.data.list[Id];
    //因为获取到的值是个对象，url只能传字符串，所以必须把它转化为字符串。
    mesg = JSON.stringify(mesg);
    wx.navigateTo({
      url: '../detail/detail?Mesgs=' + mesg,
    })
  },
  // 方法
  detail: function (e) {
    var that = this
    //获取当前点击元素的id(索引值)
    var Id = e.currentTarget.id;
    //获取当前点击元素的属性值。
    var mesg = that.data.goodsList[Id];
    //因为获取到的值是个对象，url只能传字符串，所以必须把它转化为字符串。
    mesg = JSON.stringify(mesg);
    //跳转到详情页 
    wx.navigateTo({
      //在接收页面的url后面加上“？自定义名称=字符串”就可以通过url传值
      url: '../detail/detail?Mesgs=' + mesg,

    })
  }
})