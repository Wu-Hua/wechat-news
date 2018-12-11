// miniprogram/pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    title: null,
    source: null,
    date: null,
    readCount: null,
    firstImage: null,
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.getDetailNew();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getDetailNew(() => {
      wx.stopPullDownRefresh()
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getDetailNew: function (callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail', //仅为示例，并非真实的接口地址
      data: {
        id: this.data.id
      },
      success: res => {
        const news = res.data.result;
        console.log(news);
        this.setData({
          title: news.title,
          source: news.source,
          date: news.date.substring(11, 16),
          readCount: news.readCount,
          firstImage: news.firstImage,
          content: news.content
        })
      },
      fail: err => {
        console.log(err)
      },
      complete: () => {
        callback && callback();
      }
    });
  },
  backIndex: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  }
})