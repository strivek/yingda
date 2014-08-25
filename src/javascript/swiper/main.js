require(['zepto', 'swiper/idangerous.swiper'], function () {
    if($('.m-swiper-container').length > 0){
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
    }
});