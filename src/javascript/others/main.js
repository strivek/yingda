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
        console.log(shop_pic);





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

require(['jquery'], function ($) {
        var oUl=$('.m-showcase ul').eq(0);
        var oUlhtml=oUl.html();
        oUl.html(oUlhtml+oUlhtml);
        var aLi=$('.m-showcase ul li');
        var liWid=aLi.outerWidth(true);
        var liLen=aLi.length;
        var timeId=null;
        var ulWid=liWid*liLen;
      var speed=-10;
        oUl.width(ulWid);
        timeId=setInterval(slider,30);
        oUl.hover(function(){
            clearInterval(timeId);
        },function(){
            timeId=setInterval(slider,30);
        });

        function slider(){
            if(speed<0){
                if(parseInt(oUl.css('left'))<=-ulWid/2){
                    oUl.css('left',0);
                }else{
                    oUl.css({'left':'+='+speed+'px'});
                }
            }
            if(speed>0){
                if(parseInt(oUl.css('left'))>=0){

                    oUl.css('left',-ulWid/2+'px');
                }else{
                    oUl.css({'left':'+='+speed+'px'});
                }
            }

        }
        $('.left').click(function(){
            speed=-10;
        });
        $('.right').click(function(){
            speed=10;
        });
});

