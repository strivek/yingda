require(['jquery', 'scrollto/jquery-scrollto'], function ($) {

    $('.progress-down').click(function () {
        var elem = $(this).closest('.screen').next(".screen");
        if (elem.length) {
            elem.ScrollTo({
                duration: 1000,
                easing: 'linear'
            });
        } else {
            $(".screen").eq(0).ScrollTo({
                duration: 1000,
                easing: 'linear'
            });
        }
    });
});

require(['jquery'], function ($) {
    if ($('.m-progressImg')) {
        var imgHeight = $('.bigImg').height();
        var imgWrapHeight = $('.m-progressImg').height();
        var imgMt = (imgHeight - imgWrapHeight) / 2;
        $('.bigImg').css('marginTop', -imgMt);
    }
});
