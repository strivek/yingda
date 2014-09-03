require(['jquery', 'scrollto/jquery-scrollto'], function ($) {
    if ($('.fs-down')) {
        /*$('.fs-down').mouseenter(function(){
            $(this).toggleClass('a-bounceinT');
        });
        $('.fs-down').mouseout(function(){
            $(this).toggleClass('a-bounceinT');
        });*/
        $('.fs-down').click(function () {
            var elem = $(this).closest('.m-fullscreen').next(".m-fullscreen");
            if (elem.length) {
                elem.ScrollTo({
                    duration: 1000,
                    easing: 'linear'
                });
            } else {
                $(".m-fullscreen").eq(0).ScrollTo({
                    duration: 1000,
                    easing: 'linear'
                });
            }
        });
    }
});