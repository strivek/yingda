require(['jquery'], function ($) {
    $(".g-top .icon .weixin").click(function () {
        $("#modal").removeClass("hidden").addClass("modal");
    });
    $("#modal").click(function () {
        $(this).removeClass("modal").addClass("hidden");
    });
});