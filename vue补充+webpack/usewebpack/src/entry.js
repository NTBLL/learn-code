//导入jquery模块
const $ = require('jquery');
//导入自己的index模块
$(function () {
    $("li:even").css("color","red");
    $("li:odd").css("color","purple");
});

