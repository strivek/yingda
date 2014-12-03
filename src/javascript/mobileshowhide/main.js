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
    var back='<a title="返回顶部" href="javascript:;" class="backTop"><img src="../images/arrow.png" width="100%" alt=""/></a>';
    $('body').append(back);
    var backTop = $('.backTop');
    var scrollTop;
    var mobileHei = $(window).height();
    console.log('手机高度'+mobileHei);
    if (backTop.length > 0) {
//        $(window).scrollTop=300;
//        alert($(window).scrollTop());
        $(window).scroll(function () {
            scrollTop = $(window).scrollTop();

            if (scrollTop > mobileHei){
                if($('.backTop:hidden')){
                    backTop.show();
                }

//                backTop.on('click',function(){
////                   $(this).hide();
//                    alert(1);
//                })
            } else {
                backTop.hide();
            }
        });
    }






    function scroll(scrollTo, time) {
        var scrollFrom = parseInt(document.body.scrollTop),
            i = 0,
            runEvery = 5; // run every 5ms

        scrollTo = parseInt(scrollTo);
        time /= runEvery;

        var interval = setInterval(function () {
            i++;

            document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;

            if (i >= time) {
                clearInterval(interval);
            }
        }, runEvery);
    }
    backTop.on('click',function(){
        scroll('0', 500);
    })

});

