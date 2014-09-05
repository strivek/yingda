/**
 * Created by GaoFei on 14/8/22.
 */
require(['jquery', 'bootstrap', 'navdropdown/nav'], function ($, nav) {
    var obj = $('.nav>li:not(:last):not(:first):not(:nth-last-child(2))');
    var obj1 = $('.nav>li:not(:last):not(:nth-last-child(2))');
    var number = 0;
    obj.attr('num', number);
    obj.on('click', function () {
        if ($(window).width() < 1000) {
            $(this).attr('num', parseInt($(this).attr('num')) + 1);
            $(this).siblings().attr('num', 0);
            var _that = $(this).attr('num');
            $(this).navshow('.m-menu', '.m-nav-list-bg', _that);
        }
    });
    obj1.mouseenter(function () {

        if ($(window).width() > 1000) {
            $(this).navshow1('.m-menu', '.m-nav-list-bg');
        }
    });
    obj1.mouseleave(function () {

        if ($(window).width()> 1000) {
            $(this).navshow2('.m-menu', '.m-nav-list-bg');
        }
    });
    $(".bk-toggle").mouseenter(function () {
        $(this).trigger("hover.navtoggle");
    });
})
