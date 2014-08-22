require.config({
    baseUrl: "../javascript",
    packages: ['waterfall', 'lightbox', 'lightbox2', 'formselected', 'scrollbar', 'bkgroundtoggle', 'navdropdown'
        , 'carousel', 'others','xscroll'],
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap',
        jsviews: 'lib/jsviews',
        help: 'lib/help'
    }
});

//home.html
require(['bkgroundtoggle']);

require(['waterfall']);

<<<<<<< HEAD
//looknews.html
//productListWomen.html
//productListMen.html
require(['lightbox']);
=======
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
>>>>>>> 注册页修改

//productListMen.html
//productListWomen.html
require(['lightbox2']);

<<<<<<< HEAD
//register.html
require(['formselected']);

require(['scrollbar']);

require(['navdropdown']);

require(['carousel']);

require(['xscroll']);

require(['others']);
=======
    //城市
    var oSelect=$('.m-select .select1');
    var oli = $('.m-select ul li');
    var oDisplay=$('.m-select ul');
    selectBtn.down(li,aSelect,aDisplay);
    oSelect.down(oli,aSelect,oDisplay);
>>>>>>> 注册页修改


<<<<<<< HEAD
=======
});

require(['jquery'],function($){
    $('.boutique_map').click(function(){
        alert(1);
    })
});
>>>>>>> 注册页修改
