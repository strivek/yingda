require(['zepto'], function () {
    if ($('.big-btn').length > 0) {
        $('.big-btn:not(:nth-last-child(2))').on('tap', function () {
            $(this).siblings('.menu').toggle();
            $(this).parents().siblings().children('.menu').hide();
        })
    }
    if ($('.showDetail').length > 0) {
        $('.showDetail').on('tap', function () {
            $(this).closest('dl').siblings('.detail').toggle();
        })
    }
    $('.menu-btn').on('click', function () {
        $('.mainMenu').toggle();
        $('.mainMenu span').removeClass('on');
        $('.subMenu').hide();
    });
    $('.mainMenu li:not(:nth-last-child(2)) b').on('tap', function () {
        $(this).children('span').toggleClass('on');
        $(this).parents().siblings().children('b').children('span').removeClass('on');
        $(this).siblings('.subMenu').toggle();
        $(this).parents().siblings().children('.subMenu').hide();
    });
});


//手机端回到顶部
require(['zepto'], function () {

    var backTop = $('.backTop');
    var scrollTop;
    var mobileHei = $(window).height();
    if (backTop.length > 0) {
//        $(window).scrollTop=300;
//        alert($(window).scrollTop());
        $(window).scroll(function () {
            scrollTop = $(window).scrollTop();
            if (scrollTop > mobileHei) {
                backTop.show();
//                backTop.on('click',function(){
////                   $(this).hide();
//                    alert(1);
//                })
            } else {
                backTop.hide();
            }
        });
    }

//    backTop.on("click",function(){
//       window.scrollTop(0);
//        alert($(window).scrollTop());
//    })
});

