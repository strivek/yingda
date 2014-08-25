require.config({
    baseUrl: "../javascript",
    paths: {
        zepto: "lib/zepto.min"
    }
});

require(['zepto', 'idangerous.swiper.js'], function () {
    var mySwiper = $('.m-swiper-container').swiper({
        loop: true,
        grabCursor: true
    });
    $('.arrow-left').on('click', function (e) {
        e.preventDefault()
        var swiper = $(this).parent('.m-swiper-container').data('swiper');
        swiper.swipePrev();
    });
    $('.arrow-right').on('click', function (e) {
        e.preventDefault()
        var swiper = $(this).parent('.m-swiper-container').data('swiper');
        swiper.swipeNext();
    });
});

require(['zepto'], function () {
    $('.m-textOnImg1').on('click', function (e) {
        e.preventDefault()
        $(this).children('ul').show();
        $(this).siblings().children('ul').hide();
    });
});


