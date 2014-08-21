define(['jquery'], function ($) {

    $.fn.navshow = function (b, c, d) {
        $(this).siblings().find(b).hide();
        if (d % 2 == 1) {
            $(this).find(b).show();
            $(c).show();
        } else {
            $(c).hide();
            $(this).find(b).hide();
        }
    };
    $.fn.navshow1 = function (b, c) {
        $(this).siblings().find(b).hide();
        $(this).find(b).toggle();

        if ($(this).find(b).css('display') == 'none') {
            $(c).hide();
        } else {
            $(c).show();
        }
    }
})