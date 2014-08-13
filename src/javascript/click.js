define(['jquery'], function ($) {
    $.fn.extend({
        clickonoff: function (click1, click2) {

            this.click(function () {
                $(this).siblings(click1).toggle();

            });
            $(click2).click(function () {

                var val = $(this).attr('val');
                var oText = $(this).text();
                $(this).parent().siblings().text(oText);
                $(click1).slideUp(10);

            })
        }
    })
    $('u-input').focus(function(){
        $(this).attr('value','');
    })
//    $.fn.clickon=function(){
//        this.click(function(){
//            if($('.select1').text()=='保密'){
//                alert($('.select1').text());
//            }
//
//        })
//    }

});