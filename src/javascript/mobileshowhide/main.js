require(['zepto'], function () {
    if($('.big-btn').length > 0){
        $('.big-btn').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.menu').toggle();
            $(this).parents().siblings().children('.menu').hide();
        })
    }
    if($('.showDetail').length > 0){
        $('.showDetail').on('click', function (e) {
            e.preventDefault();
            $(this).closest('dl').siblings('.detail').toggle();
        })
    }
    $('.menu-btn').on('click', function(){
        $('.mainMenu').toggle();
        $('.mainMenu span').removeClass('on');
        $('.subMenu').hide();
    });
    $('.mainMenu li:not(:nth-last-child(2)) b').on('click', function(){
        $(this).children('span').toggleClass('on');
        $(this).parents().siblings().children('b').children('span').removeClass('on');
        $(this).siblings('.subMenu').toggle();
        $(this).parents().siblings().children('.subMenu').hide();
    });
});
