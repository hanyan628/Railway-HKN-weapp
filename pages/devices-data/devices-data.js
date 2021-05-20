// pages/devices-data/devices-data.js
var localData = require("../../data/local_data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stations: localData.station_overview,
    devices_kf: localData.device_overview_kf,
    devices_yd: localData.device_overview_yd,
    active1: [0],
    active2: [0],
    active3: [0],
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({
      [key]: event.detail,
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