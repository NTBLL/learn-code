/**
 * 格式化日期
 * @param date  Date对象
 * @returns {string}    格式化后的日期对象的字符串
 */
function parseDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    month = month > 10 ? month : "0" + month;
    day = day > 10 ? day : "0" + day;
    hour = hour > 10 ? hour : "0" + hour;
    minute = minute > 10 ? minute : "0" + minute;
    second = second > 10 ? second : "0" + second;

    return year + "年" + month + "月" + day + "日"
        + " " + hour + ":" + minute + ":" + second;

}