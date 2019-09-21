$(function () {
    // 初始化fullpage
    $(".contianer").fullpage({
        //设置每一屏背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //设置内容顶部对齐
        verticalCentered: false,
        //设置导航
        navigation: true,
        //当完全进入某一屏幕时触发回调函数
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass("now");
        },
        //当离开某一屏时触发
        onLeave: function (index, nextIndex) {

            if (index == 2 && nextIndex == 3) {
                $(".section").eq(index - 1).addClass("leaved");
            }else if(index == 3 && nextIndex == 4){
                $(".section").eq(index - 1).addClass("leaved");
            }
        },
        //组件加载完毕后执行的回调函数
        afterRender: function () {
            $(".more").on("click", function () {
                //调用向下滑动一个屏幕
                $.fn.fullpage.moveSectionDown();
                return false;
            });


            //当购物车执行完动画后执行
            $(".screen04 .cart").on("animationend",function () {
               $(".screen04 .address img:first").show();
               $(".screen04 .address img:last").fadeIn();
            });

        },

        //切换屏幕时间
        scrollingSpeed:1000

    });
});