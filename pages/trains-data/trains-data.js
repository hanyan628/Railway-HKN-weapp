// pages/trains-data/trains-data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1'],
    "lines": [
      {
        "name": "汉口本站",
        "stations": [
          "汉口"
        ]
      },
      {
        "name": "汉宜客专",
        "stations": [
          "汉川", "天门南", "仙桃西", "潜江", "荆州", "枝江北"
        ]
      },
      {
        "name": "武孝城际",
        "stations": [
          "天河机场", "孝感东", "毛陈"
        ]
      },
      {
        "name": "武仙城际",
        "stations": [
          "仙桃"
        ]
      },
    ]
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})