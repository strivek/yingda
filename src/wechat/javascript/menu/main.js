require(['zepto'], function () {
    $('.menu').on('click', function(){
        $('.menu-box').toggle();
    });
    /*$('.menu-box li').on('tap', function(){
        $(this).children('span').toggleClass('on');
        $(this).parents().siblings().children('b').children('span').removeClass('on');
        $(this).siblings('.subMenu').toggle();
        $(this).parents().siblings().children('.subMenu').hide();
    });*/
});

