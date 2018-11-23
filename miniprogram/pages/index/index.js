// miniprogram/pages/inner-page/inner-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItem: [
      {
        newType: '国内',
        styles: 'nav-item nav-item-active',
        id: 0
      }, 
      {
        newType: '国际',
        styles: 'nav-item',
        id: 1        
      },
      {
        newType: '财经',
        styles: 'nav-item',
        id: 2        
      },
      {
        newType: '娱乐',
        styles: 'nav-item',
        id: 3        
      },
      {
        newType: '军事',
        styles: 'nav-item',
        id: 4        
      },
      {
        newType: '体育',
        styles: 'nav-item',
        id: 5        
      },
      {
        newType: '其他',
        styles: 'nav-item',
        id: 6        
      }
    ],
    newsShow: [
      {show: true},
      { show: false },
      { show: false },
      { show: false },
      { show: false },
      { show: false },
      { show: false }
    ],
    gnNews: null,
    gjNews: null,
    cjNews: null,
    ylNews: null,
    jsNews: null,
    tyNews: null,
    otherNews: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGnNews();
    this.getGjNews();
    this.getCjNews();
    this.getYlNews();
    this.getJsNews();
    this.getTyNews();
    this.getOtherNews();
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
    this.getGnNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getGjNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getCjNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getYlNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getJsNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getTyNews(() => {
      wx.stopPullDownRefresh()
    });
    this.getOtherNews(() => {
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

  getGnNews(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'gn'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let gnNews = [];
        console.log(res);
        for(let i = 0 ; i < newsLength; i++) {
          gnNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          gnNews: gnNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },


  getGjNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'gj'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let gjNews = [];
        for (let i = 0; i < newsLength; i++) {
          gjNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          gjNews: gjNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  getCjNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'cj'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let cjNews = [];
        for (let i = 0; i < newsLength; i++) {
          cjNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          cjNews: cjNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  getYlNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'yl'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let ylNews = [];
        for (let i = 0; i < newsLength; i++) {
          ylNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          ylNews: ylNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  getJsNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'js'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let jsNews = [];
        for (let i = 0; i < newsLength; i++) {
          jsNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        jsNews[0].firstImage = ''
        this.setData({
          jsNews: jsNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  getTyNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'ty'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let tyNews = [];
        for (let i = 0; i < newsLength; i++) {
          tyNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          tyNews: tyNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  getOtherNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'other'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let otherNews = [];
        for (let i = 0; i < newsLength; i++) {
          otherNews.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          otherNews: otherNews
        })
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  clickNavBarItem(e) {
    let navItem = [];
    let newsContent = [];
    let newsShow = [];
    for(let i = 0; i < 7 ; i++ ) {
      navItem.push({
        newType: '',
        styles: 'nav-item',
        id: i
      });
      newsShow.push({
        show: false
      })
    }
    navItem[0].newType = '国内';
    navItem[1].newType = '国际';
    navItem[2].newType = '财经';
    navItem[3].newType = '娱乐';
    navItem[4].newType = '军事';
    navItem[5].newType = '体育';
    navItem[6].newType = '其他';

    const targetId = e.target.dataset.id;
    navItem[targetId].styles = 'nav-item nav-item-active';
    newsShow[targetId].show = true;
    this.setData({
      navItem : navItem,
      newsShow: newsShow
    })
  }
})