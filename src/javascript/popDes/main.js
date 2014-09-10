require(['jquery'], function ($) {
    $(function(){
        $(".pic-list").hover(function () {

                $(this).find(".move").stop().animate({bottom: '0px'});
            },
            function () {
                $(this).find(".move").stop().animate({bottom: '-40px'});
            }
        );
        });
});