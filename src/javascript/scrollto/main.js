require(['jquery', 'scrollto/jquery-scrollto'], function ($) {

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
});

/*require(['jquery'], function ($) {
    if ($('.m-progressImg')) {
        var docWidth = $(document).width();
        var imgHeight = $('.bigImg').height();
        var imgWrapHeight = $('.m-progressImg').height();
        var imgMt = Math.abs(imgHeight - imgWrapHeight) / 2;
        $('.bigImg').css('marginTop', imgMt);
        if(docWidth > 1902){
            $('.bigImg').css('marginTop',-imgMt);
        }
    }
});*/