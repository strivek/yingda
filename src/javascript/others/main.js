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
//require(['jquery'], function ($) {
//    function changeSize() {
//        $('.m-boutique-content').fadeIn('100');
//        var shop_pic = $('.m-shop-pic .item').outerWidth(true);
//        console.log(shop_pic);
//
//
//
//
//
//        var winClient = $(window).width();
//        if (winClient > 1024) {
//
//            var oWidth = Math.floor(shop_pic * 1.4);
//        } else {
//            var oWidth = shop_pic;
//        }
//
//        var perc = oWidth / winClient;
//        var ml = (1 - perc) / 2 * 100 + '%';
//        $('.m-boutique-content').css({'marginLeft': ml});
//    }
//    if ($('.m-shop-pic .carousel-inner').length > 0) {
//        changeSize();
//        $(window).resize(function () {
//
//            changeSize();
//        })
//    }
//});

require(['jquery'], function ($) {
        var winWid=$(window).width();
    var oUl=$('.m-showcase ul').eq(0);
    var oUlhtml=oUl.html();
    oUl.html(oUlhtml+oUlhtml);
        var aLi=$('.m-showcase ul li');
        imgWid=Math.floor(winWid*0.28);
        var aImg=$('.m-showcase ul img');
        aImg.css('width',imgWid);
        var  imgHei=aImg.height();
      //aImg.height(imgHei);
        aLi.height(imgHei);
        oUl.height(imgHei);
        $('.m-showcase').height(imgHei);
       // alert( $('.m-showcase').height());
        aLi.width(imgWid);
        var liWid=aLi.outerWidth(true);
        var liLen=aLi.length;
        var timeId=null;
        var ulWid=liWid*liLen;
      var speed=-1;
        oUl.width(ulWid);
        timeId=setInterval(slider,2);
        oUl.hover(function(){
            clearInterval(timeId);
        },function(){
            timeId=setInterval(slider,2);
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
            speed=-1;
        });
        $('.right').click(function(){
            speed=1;
        });
//    $(window).resize(function(){
//        clearInterval(timeId);
//
//
//
//        var winWid=$(window).width();
//        var oUl=$('.m-showcase ul').eq(0);
//        var oUlhtml=oUl.html();
//        oUl.html(oUlhtml+oUlhtml);
//        var aLi=$('.m-showcase ul li');
//
//        imgWid=Math.floor(winWid/3);
//        var aImg=$('.m-showcase ul img');
//        aImg.width(imgWid);
//        var  imgHei=aImg.height();
//        aLi.height(imgHei);
//        oUl.height(imgHei);
//        $('.m-showcase').height(imgHei);
//        // alert( $('.m-showcase').height());
//        aLi.width(imgWid);
//        var liWid=aLi.width();
//        var liLen=aLi.length;
//
//        var ulWid=liWid*liLen;
//
//        oUl.width(ulWid);
//        timeId=setInterval(slider,3);
//
//
//    });
});
//滚动条
require(['jquery'], function ($) {
//   推荐效果

    $('.m-introlist').hover(function () {
        if($(window).width()>1024){
        $(this).find('.title').stop().animate({'bottom': '0'});
    }}, function () {
        if($(window).width()>1024){
        $(this).find('.title').stop().animate({'bottom': '-26px'});
    }});
    if($(window).width()<=1024){
        $('.m-introlist').find('.title').css('bottom','0');
    }

});

require(['jquery'], function ($) {
//   推荐效果
    if($(window).width()<=1024){
    $('input').focus(function(){
            $('.g-footer').fadeOut();
    });
    $('input').blur(function(){
            $('.g-footer').fadeIn();

    })
    }
});


require(['jquery'], function ($) {
//首页预加载
    $(function(){
        $('.home').hide();
            $('.home').fadeIn(2000,function(){
               setTimeout(function(){
                  $('.home').fadeOut(1000);
                  $('.home-img').fadeOut(1000);
               },1000)
            });


    });
    });
require(['jquery'], function ($) {
    var img=$('<img>');
    var oDiv=$('<div>');
    img.attr('src','../images/44.gif');
    img.addClass('imgload');
    oDiv.addClass('Divbg');
    $('body').append(oDiv);
    $('body').append(img);
    $('img').load(function(){
        oDiv.hide();
        img.hide();
    })

});
require(['jquery'], function ($) {
    $(function(){
        var img= $('.m-main1-gf img');
        var img1=$('.set_table img');
        if(img.length>0){

       img.load(
            picChange(img)
        );
        }
        if(img1.length>0){
        img1.load(
            picChange(img1)
        );
        }
    })

    function picChange(img){
        function picSize(){
            var winWid=$(window).width();
            var winHei=$(window).height();
            var imgWid=img.eq(0).width();
            var imgHei=img.eq(0).height();
            var Wid=winWid/imgWid;
            var Hei=winHei/imgHei;
           // alert(imgHei);
            if(Wid>Hei){
                img.width(winWid);
                img.height('auto');
                // alert(img.height());
                img.css('marginLeft',0);
            }else{

                img.height(winHei);
                img.width('auto');
                // alert(img.width());
                var marginLeft=-(img.width()-$(window).width())/2;
//                    if()
                img.css('marginLeft',marginLeft);
//                   aaaaaaaaaaaaaaaaa
            }
        };
        picSize();
        $(window).resize(function(){
            picSize();
        })
    }
});
require(['jquery'], function ($) {
    if(!$(".itisvideo")) return false;

    $(".videoevent").eq(0).on("click",function(){
        var itisvideo = $(".itisvideo").eq(0);
        var havevideo = itisvideo.attr("date-havevideo");
        var objVideo = itisvideo.find("object,embed");

        //yingdabrand.html视频
        if(havevideo == "haveyingdabrand") {
            itisvideo.css({"display": "block"});
            itisvideo.find(".myVideo").get(0).play();
            return false;
        }

        //yingdastyle.html视频
        if(havevideo == "haveyingdastyle") {
            $(this).css({"display":"none"});
            itisvideo.css({"z-index":"3"});
            objVideo.css({"left":"0"});
            itisvideo.find(".myVideo").get(0).play();
            return false;
        }

        //seasonfashion.html视频
        if(havevideo == "haveseasonfashion") {
            $(this).find("img").css({"display":"none"});
            itisvideo.css({"z-index":"3"});
            objVideo.css({"left":"0"});
            itisvideo.find(".myVideo").get(0).play();
            return false;
        }
    });
});






//大美之旅新增上下滑动JS
require(['jquery'], function ($) {
    var slideTopWrap = $(".m-w-slideTop");
    var slideTop = $(".m-w-slideTop .m-slideTop");

/*    for(var i=0; i<slideTop.length; i++){

        slideTop[i].style.top = (slideTopWrap.get(0).offsetHeight * i) + "px";

    }*/

/*    for(var j=0; j<slideTop.length; j++){
        if(slideTop[j].offsetTop != "0"){
            slideTop[j].style.display = "none"
        }
    }*/

});
//大美之旅新增上下滑动JS End