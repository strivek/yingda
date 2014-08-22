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
    var obj = $('.nav>li:not(:last):not(:first):not(:nth-last-child(2))');
//    alert(obj.html());
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
    $(".bk-toggle").mouseenter(function(){
       $(this).trigger("hover.navtoggle");
    })

});
require(["backgroundtoggle"],function($){

})


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
    $('.m-shop-pic .carousel').carousel({
        interval: 3000
    });
    $('.g-maininner-gf .carousel').carousel({
        interval: 3000
    });
    $('.m-content-cy .carousel').carousel({
        interval: 3000
    });
    $('.m-carousel-cy .carousel').carousel({
        interval: false
    });
});
//滚动条
require(['jquery', 'jquery.tinyscrollbar'], function ($) {
//    推荐效果
    $('.m-introlist').hover(function () {
        $(this).find('.title').stop().animate({'bottom': '0'});
    }, function () {
        $(this).find('.title').stop().animate({'bottom': '-26px'});
    });
})
require(['jquery', 'jquery.tinyscrollbar'], function($) {
    var $scrollbar = $("#scrollbar1");
    $scrollbar.tinyscrollbar();
});

require(['jquery', 'jquery.tinyscrollbar'], function($) {
    var $scrollbar1 = $("#scrollbar2");
    $scrollbar1.tinyscrollbar();
});
//下拉条
//require(['jquery', 'click'], function ($) {
//    var selectBtn1 = $('.select1');
////    var selectBtn2 = $('.select2');
//    var li = $('.choose li');
//    var choose = $('.choose');
//    selectBtn1.clickonoff(choose, li);
////    selectBtn2.clickon();
//    $('.u-input').focus(function () {
//        $(this).attr('value', '');
//    })
//});
////productListWomen.html 瀑布流
require(['jquery', 'jquery.waterfall'], function ($) {
    $('#productListWomen').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1, 		// 只发送一次请求
        colWidth:235,
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
//productListWomen.html 灯箱
require(['jquery', 'jquery.lightbox2'], function ($) {

});
//boutique.html 精品店下拉
require(['jquery'], function ($) {
    $('dl .detail').click(function () {
        $(this).toggleClass('color');
        $(this).closest('dl').siblings('.u-details').toggle();
        $(this).trigger("click.detail");
    })
});
//register.html 登陆页性别选择
require(['jquery','down'], function ($) {
    var selectBtn = $('.wrap-select .select');
    var li = $('.wrap-select ul li');
    var aSelect=$('.sexnone option');
    var aDisplay=$('.wrap-select ul');

    //城市
    var oSelect=$('.m-select .select1');
    var oli = $('.m-select ul li');
    var oDisplay=$('.m-select ul');
    selectBtn.down(li,aSelect,aDisplay);
    oSelect.down(oli,aSelect,oDisplay);

});
require(['jquery','jquery.lightbox'],function($){

});

require(['jquery'],function($){
    $('.boutique_map').click(function(){
        alert(1);
    })
});
require(['jquery'],function($){
    function changeSize(){
        var shop_pic = $('.m-shop-pic .carousel-inner').outerWidth(true);
        var winClient=$(window).width();
        if(winClient>1024) {
            var oWidth = Math.floor(shop_pic * 1.4);
        }else{
          var oWidth =shop_pic;
        }
        var perc = oWidth / winClient;
        var ml = (1 - perc) / 2 * 100 + '%';
        $('.m-boutique-content').css({'marginLeft': ml});

    }
    changeSize();
    $(window).resize(function(){
        changeSize();
    })
});