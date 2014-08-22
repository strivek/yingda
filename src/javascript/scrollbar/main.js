/*
 * Created by GaoFei on 14/8/21.
 */

//滚动条
require(['jquery', 'scrollbar/jquery.tinyscrollbar'], function ($) {
//   推荐效果
    $('.m-introlist').hover(function () {
        $(this).find('.title').stop().animate({'bottom': '0'});
    }, function () {
        $(this).find('.title').stop().animate({'bottom': '-26px'});
    });
})
require(['jquery', 'scrollbar/jquery.tinyscrollbar'], function ($) {
    $("#scrollbar1").tinyscrollbar();
});
require(['jquery', 'scrollbar/jquery.tinyscrollbar'], function ($) {
    $("#scrollbar2").tinyscrollbar();
});


