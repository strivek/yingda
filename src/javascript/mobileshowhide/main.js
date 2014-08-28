require(['zepto'], function () {
    if($('.big-btn').length > 0){
        $('.big-btn:not(:nth-last-child(2))').on('tap', function (e) {
            e.preventDefault();
            $(this).siblings('.menu').toggle();
            $(this).parents().siblings().children('.menu').hide();
        })
    }
    if($('.showDetail').length > 0){
        $('.showDetail').on('tap', function (e) {
            e.preventDefault();
            $(this).closest('dl').siblings('.detail').toggle();
        })
    }
    $('.menu-btn').on('click', function(){
        $('.mainMenu').toggle();
        $('.mainMenu span').removeClass('on');
        $('.subMenu').hide();
    });
    $('.mainMenu li:not(:nth-last-child(2)) b').on('tap', function(){
        $(this).children('span').toggleClass('on');
        $(this).parents().siblings().children('b').children('span').removeClass('on');
        $(this).siblings('.subMenu').toggle();
        $(this).parents().siblings().children('.subMenu').hide();
    });
});

