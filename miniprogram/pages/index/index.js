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
    newsList: [
      {
        type:'gn',
        show: true
      },
      {
        type: 'gj',
        show: false
      },
      {
        type: 'cj',
        show: false
      },
      {
        type: 'yl',
        show: false
      },
      {
        type: 'js',
        show: false
      },
      {
        type: 'ty',
        show: false
      },
      {
        type: 'other',
        show: false
      },
    ],
    News: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews('gn');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let newsType = null;
    for (let i = 0; i < this.data.navItem.length; i++) {
      if (this.data.navItem[i].styles === 'nav-item nav-item-active') {
        newsType = this.data.newsList[i];
      }
    }
    this.getNews(newsType,() => {
      wx.stopPullDownRefresh()
    });
  },

  getNews(newsType,callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', //仅为示例，并非真实的接口地址
      data: {
        type: newsType
      },
      success: res => {
        const news = res.data.result;
        const newsLength = news.length;
        let News = [];
        for(let i = 0 ; i < newsLength; i++) {
          News.push({
            id: news[i].id,
            title: news[i].title,
            date: news[i].date,
            time: news[i].date.substring(11, 16),
            source: news[i].source,
            firstImage: news[i].firstImage
          })
        }
        this.setData({
          News: News
        })
      },
      fail: err => {
        console.log(err);
      },
      complete: () => {
        callback && callback();
      }
    });
  },
  // 点击新闻类型
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
    this.setData({
      navItem : navItem,
    });

    let newsType = this.data.newsList[targetId].type;
    this.getNews(newsType);
  },

  clickNews(target) {
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + target.currentTarget.dataset.id
    })
  },
})