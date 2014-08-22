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