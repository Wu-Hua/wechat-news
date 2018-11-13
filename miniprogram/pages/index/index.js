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
    newsContent: [
      {
        id: 0,
        styles: 'styles'
      },
      {
        id: 1,
        styles: 'styles hide'
      },
      {
        id: 2,
        styles: 'styles hide'
      },
      {
        id: 3,
        styles: 'styles hide'
      },
      {
        id: 4,
        styles: 'styles hide'
      },
      {
        id: 5,
        styles: 'styles hide'
      },
      {
        id: 6,
        styles: 'styles hide'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews();
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
    this.getNews(() => {
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

  getNews(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: 'gn'
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        console.log(news);
        console.log(newsLength);
      },
      complete: () => {
        callback && callback();
      }
    });
  },

  clickNavBarItem(e) {
    let navItem = [];
    let newsContent = [];
    for(let i = 0; i < 7 ; i++ ) {
      navItem.push({
        newType: '',
        styles: 'nav-item',
        id: i
      });
      newsContent.push({
        content: '',
        styles: 'styles hide',
        id: i
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
    newsContent[targetId].styles = 'styles';
    this.setData({
      navItem : navItem,
      newsContent: newsContent
    })
  }
})