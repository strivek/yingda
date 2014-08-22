/**
 * Created by GaoFei on 14/8/22.
 */
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