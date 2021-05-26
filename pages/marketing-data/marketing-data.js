// pages/marketing-data/marketing-data.js
var data_2019 = require("../../data/2019.js")
var data_2021 = require("../../data/2021.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active1: ['1'],
    active2: ['1'],
    precise_passenger_2019: data_2019.precise_passenger_2019,
    precise_revenue_2019: data_2019.precise_revenue_2019,
    target_passenger_2021: data_2021.target_passenger_2021,
    tartget_revenue_2021: data_2021.target_passenger_2021
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