require.config({
    baseUrl:"../javascript",
    paths:{
        jquery:"lib/jquery.min"
    }

});
require(['jquery', 'bootstrap','nav'], function($,nav) {
//    $('.nav>li:not(:last):not(:first)').hover(function(){
//        $(this).navshow('.m-menu','.m-nav-list-bg');
//	})
//    $('.nav>li:not(:last)').on('hover click')
    var obj=$('.nav>li:not(:last):not(:first)');
//    alert(obj.html());
    var obj1=$('.nav>li:not(:last)');
    var number=0;
    obj.attr('num',number);
    obj.on('click',function(){
        if($(window).width()<1000) {
            $(this).attr('num', parseInt($(this).attr('num')) + 1);
            $(this).siblings().attr('num', 0);
            var _that = $(this).attr('num');

            $(this).navshow('.m-menu', '.m-nav-list-bg', _that);
        }
    });
    obj1.hover(function(){
        if($(window).width()>1000){
            $(this).navshow1('.m-menu','.m-nav-list-bg');
        }
    });
//    obj1.mouseout(function(){
//        if($(window).width()>1024){
//        $(this).navshow2('.m-menu','.m-nav-list-bg');
//        }
//    })

});
//瀑布流调用
require(['jquery','jquery.waterfall'],function($){
    $('#waterfall').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1 		// 只发送一次请求
    });
});

require(['jquery', 'bootstrap'], function($) {
    $('.carousel').carousel({
        interval: 3000
    });
//    推荐效果
    $('.m-introlist').hover(function(){
        $(this).find('.title').stop().animate({'bottom':'0'});
    },function(){
        $(this).find('.title').stop().animate({'bottom':'-26px'});
    })
});
require(['jquery', 'jquery.tinyscrollbar'], function($) {
    var $scrollbar = $("#scrollbar1");
    $scrollbar.tinyscrollbar();
})
require(['jquery', 'click'], function($) {

    var selectBtn1 = $('.select1');
//    var selectBtn2 = $('.select2');
    var li = $('.choose li');
    var choose=$('.choose');
    selectBtn1.clickonoff(choose,li);
//    selectBtn2.clickon();

    $('.u-input').focus(function(){
        $(this).attr('value','');
    })

    $('dl .detail').click(function(){
        $(this).toggleClass('color');



        $(this).closest('dl').siblings('.u-details').toggle();
        $(this).trigger("click.detail");
    })





})

