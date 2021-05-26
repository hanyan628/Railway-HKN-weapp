// pages/18d/18d.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statistics_date: util.formatDate(new Date()),
    station_name: "",
    operater_name: "",
    passenger: "",
    revenue: "",
    pre_sale: "",
    message: ""
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    this.setData(e.detail.value);
    wx.setStorageSync("operater_name", this.operater_name);
    wx.setStorageSync("station_name", e.detail.value.station_name);
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var operater = wx.getStorageSync("operater_name");
    var station=wx.getStorageSync("station_name");
    if (operater){
      this.setData({operater_name: operater});
    };
    if (station){
      this.setData({station_name: station});
    };
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