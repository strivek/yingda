/**
 * Created by GaoFei on 14/8/22.
 */
//boutique.html 精品店下拉
require(['jquery'], function ($) {
    $('.m-shop-detail dl .detail').click(function () {
        $(this).toggleClass('color');
        $(this).closest('dl').siblings('.u-details').toggle();
        $(this).trigger("click.detail");
    })
});


//精品店模块贴合
require(['jquery'], function ($) {
    function changeSize() {
        $('.m-boutique-content').fadeIn('100');
        var shop_pic = $('.m-shop-pic .item').outerWidth(true);
//      $('.m-shop-pic .item').width(shop_pic);


        var winClient = $(window).width();
        if (winClient > 1024) {

            var oWidth = Math.floor(shop_pic * 1.4);
        } else {
            var oWidth = shop_pic;
        }
        var perc = oWidth / winClient;
        var ml = (1 - perc) / 2 * 100 + '%';
        $('.m-boutique-content').css({'marginLeft': ml});
    }
    if ($('.m-shop-pic .carousel-inner').length > 0) {
        changeSize();
        $(window).resize(function () {

            changeSize();
        })
    }
});

