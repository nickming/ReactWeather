/**
 * Created by nickming on 2017/5/13.
 */
'use strict';

/**
 * 根据日期获取星期
 * @param date
 * @returns {*}
 */
function getWeekdayByDate(date) {
    let a = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    let day = new Date(date).getDay();
    var today = getNowFormatDate();
    var tomorrow = getTomorrowFormatDate();
    if (today === date)
        return '今天';
    else if (date === tomorrow)
        return '明天'
    else
        return a[day];
}

/**
 * 获取今天的时间戳
 * @returns {string}
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    return currentdate;
}

/**
 * 获取明天的时间戳
 * @returns {string}
 */
function getTomorrowFormatDate() {
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    return currentdate;
}

/**
 * 根据时间戳获取月日
 * @param date
 */
function getMonthAndDayByDate(date) {
    return date.substring(8,date.length)+'日';
}

/**
 * 根据时间戳获取时分
 * @param date
 */
function getHoursAndMinsByDate(date) {
    return date.substring(11,date.length);
}


module.exports = {
    getWeekdayByDate: getWeekdayByDate,
    getMonthAndDayByDate: getMonthAndDayByDate,
    getHoursAndMinsByDate:getHoursAndMinsByDate
}