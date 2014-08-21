require.config({
	baseUrl:"../javascript",
	paths:{
		jquery:"lib/jquery.min"
	}

});

require(['jquery', 'idangerous.swiper'], function($) {
    var mySwiper = $('.swiper-container').swiper({
        loop:true,
        grabCursor: true
    });
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        var swiper = $(this).parent('.swiper-container').data('swiper');
        swiper.swipePrev();
    });
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        var swiper = $(this).parent('.swiper-container').data('swiper');
        swiper.swipeNext();
    });
});



