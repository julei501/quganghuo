Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "../shop/img/1.jpg",
      "../shop/img/2.jpg",
      "../shop/img/3.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "../shop/img/1.jpg",
      "../shop/img/2.jpg",
      "../shop/img/3.jpg"
    ],
    // 对象
    detail: {},  
    showModalStatus: false,//是否显示
    gg_id: 0,//规格ID
    gg_txt: '',//规格文本
    gg_price: 0,//规格价格
    guigeList: [{ guige: '100', price: '150' }, { guige: '200', price: '150' }, { guige: '300', price: '150' }],
    num: 1,//初始数量
  },
  onLoad: function (options) {
    var that = this
    // 字符串转json
    var info = JSON.parse(options.Mesgs);
    console.log(info)
    that.setData({
      // 把从index页面获取到的属性值赋给详情页的detail，供详情页使用
      detail: info
    })

  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '../car/car'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },

  filter: function (e) {
    //console.log(e);
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, price = e.currentTarget.dataset.price
    self.setData({
      gg_id: id,
      gg_txt: txt,
      gg_price: price
    });
  },

  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  addCar: function (e) {

    var goods = this.data.goodsList;

    goods.isSelect = false;

    var count = this.data.goods.count;

    var title = this.data.goods.title;

    if (title.length > 13) {

      goods.title = title.substring(0, 13) + '...';

    }

    // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  

    var arr = wx.getStorageSync('cart') || [];

    console.log("arr,{}", arr);

    if (arr.length > 0) {

      // 遍历购物车数组  

      for (var j in arr) {

        // 判断购物车内的item的id，和事件传递过来的id，是否相等  

        if (arr[j].goodsId == goodsId) {

          // 相等的话，给count+1（即再次添加入购物车，数量+1）  

          arr[j].count = arr[j].count + 1;

          // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  

          try {

            wx.setStorageSync('cart', arr)

          } catch (e) {

            console.log(e)

          }

          //关闭窗口

          wx.showToast({

            title: '加入购物车成功！',

            icon: 'success',

            duration: 2000

          });

          this.closeDialog();

          // 返回（在if内使用return，跳出循环节约运算，节约性能） 

          return;

        }

      }

      // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  

      arr.push(goods);

    } else {

      arr.push(goods);

    }

    // 最后，把购物车数据，存放入缓存  

    try {

      wx.setStorageSync('cart', arr)

      // 返回（在if内使用return，跳出循环节约运算，节约性能） 

      //关闭窗口

      wx.showToast({

        title: '加入购物车成功！',

        icon: 'success',

        duration: 2000

      });

      this.closeDialog();

      return;

    } catch (e) {

      console.log(e)

    }

  }   
})