require.config({
    baseUrl: "../javascript",
    paths: {
        jquery: "lib/jquery.min"
    }
});

require(['jquery', 'bootstrap', 'nav'], function ($, nav) {
//    $('.nav>li:not(:last):not(:first)').hover(function(){
//        $(this).navshow('.m-menu','.m-nav-list-bg');
//	})
//    $('.nav>li:not(:last)').on('hover click')
    var obj = $('.nav>li:not(:last):not(:first)');
//    alert(obj.html());
    var obj1 = $('.nav>li:not(:last)');
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
    obj1.hover(function () {
        if ($(window).width() > 1000) {
            $(this).navshow1('.m-menu', '.m-nav-list-bg');
        }
    });
//    obj1.mouseout(function(){
//        if($(window).width()>1024){
//        $(this).navshow2('.m-menu','.m-nav-list-bg');
//        }
//    })

});
//瀑布流调用
require(['jquery', 'jquery.waterfall'], function ($) {
    $('#waterfall').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1 		// 只发送一次请求
    });
});
//轮播
require(['jquery', 'bootstrap'], function ($) {

    $('.carousel').carousel({
        interval: 3000
    })
})
//滚动条
require(['jquery', 'jquery.tinyscrollbar'], function ($) {
    var $scrollbar = $("#scrollbar1");
    $scrollbar.tinyscrollbar();
})
//下拉条
require(['jquery', 'click'], function ($) {

    var selectBtn1 = $('.select1');
//    var selectBtn2 = $('.select2');
    var li = $('.choose li');
    var choose = $('.choose');
    selectBtn1.clickonoff(choose, li);
//    selectBtn2.clickon();
    $('.u-input').focus(function () {
        $(this).attr('value', '');
    })
})
require(['jquery', 'jquery.waterfall'], function ($) {
//    $('dl .detail').click(function(){
//        $(this).toggleClass('color');
//        $(this).closest('dl').siblings('.u-details').toggle();
//        $(this).trigger("click.detail");
//    })

    $('#productListWomen').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1, 		// 只发送一次请求
        createHtml: function (data) {
            return '<div class="wf_item_inner water-modal" data-id=' + data.id + ' data-toggle="modal" data-target="#water-modal"> ' +
                '<a href="' + data.url + '" class="thumb" target="_blank">' +
                '<img class="thumb_img"  src="' + data.imgSrc + '" />' +
                '</a>' +
                '<a style="position:absolute; right:10px; bottom:8px; display:block;color:#ffe3cd; font-size:40px;" class="iconfont" href="' + data.href + '" target="_blank">&#xe647</a>' +
                '</div>';
        }
    })
});
require(['jquery', 'jquery.lightbox2'], function ($) {

})

