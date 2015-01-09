require(['jquery', 'scrollto/jquery-scrollto'], function ($) {
    $('.fs-down').click(function () {
        var elem = $(this).closest('.m-fullscreen,.m-fullscreen-first').next(".m-fullscreen");
        if (elem.length) {
            elem.ScrollTo({
                duration: 1000,
                easing: 'linear'
            });
        } else {
            $(".m-fullscreen-first").ScrollTo({
                duration: 1000,
                easing: 'linear'
            });
        }
    });

});