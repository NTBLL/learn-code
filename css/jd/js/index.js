// 头部关闭按钮事件
$(function () {
    $(".J_event span").on("click",function (e) {
        $(".J_event").hide();
        e.stopPropagation();
    });
});