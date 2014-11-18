/**
 * Created by GaoFei on 14/8/22.
 */
//boutique.html 精品店下拉
require(['jquery'], function ($) {

//    $('.m-shop-detail dl .detail').click(function () {
//        $(this).toggleClass('color');
//        $(this).closest('dl').siblings('.u-details').toggle();
//        $(this).trigger("click.detail");
//
//   })
    //店铺
    var detail='.m-shop-detail dl .detail';
    $('body').on('click',detail,show);
});


function show() {
    $(this).toggleClass('color');
    $(this).closest('dl').siblings('.u-details').toggle();
    $(this).trigger("click.detail");

}

////精品店模块贴合
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
    $(window).resize(function(){
        clearInterval(timeId);



        var winWid=$(window).width();
        var oUl=$('.m-showcase ul').eq(0);
       var oUlhtml=oUl.html();
        oUl.html(oUlhtml+oUlhtml);
        var aLi=$('.m-showcase ul li');

        imgWid=Math.floor(winWid/3);
        var aImg=$('.m-showcase ul img');
        aImg.width(imgWid);
       var  imgHei=aImg.height();
        aLi.height(imgHei);
        oUl.height(imgHei);
        $('.m-showcase').height(imgHei);
        // alert( $('.m-showcase').height());
       aLi.width(imgWid);
        var liWid=aLi.width();
        var liLen=aLi.length;

        var ulWid=liWid*liLen;

       oUl.width(ulWid);
       timeId=setInterval(slider,3);

    });
});
////滚动条
require(['jquery'], function ($) {
////   推荐效果

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
////   推荐效果
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
    $(function(){
        var img= $('.m-main1-gf img');
        var img1=$('.set_table img');
        if(img.length>0){
            picChange(img);

        }
        if(img1.length>0){
        img1.load(
            picChange(img1)
        );
        }
    });

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
    if($(".itisvideo").langth < 1) return false;

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

require(['jquery'], function ($) {
    var concealStateBox = $(".m-privacy").eq(0);

    if(concealStateBox.length < 1) return false;

    $(document).click(function(event){
        var target = event.target;

        if(target.className == "modal-backdrop fade in"){

            $(concealStateBox).modal('hide');

        }
    });

});

require(['jquery'], function ($) {

    var conbtn = $(".m-main1-cy .j-con-btn > a");


   if(conbtn.length>0){

       var right = $(".m-main1-cy .right").eq(0);
       var oldHtml = right.html();

       var request= $.ajax({
           type:"GET",
           url: '../json/publicintereset.json'
       });
       request.done(function (data){

           for(var k=0; k<conbtn.length; k++){
               conbtn[k].Index = k+1;
               conbtn[k].onmouseenter = function(){
                   right.html('');
                   for(var i=0; i<data[this.Index].length; i++){
                       right.html(right.html() + '<h4 class="title"></h4><div class="con"><img src="../images/'+data[this.Index][i]+'" alt="图片展示"/><p>应大向四川受灾地区捐款。</p></div>');
                   }
               }
           }



       });

       var oldTop = right.position().top;


       $(document).scroll(function(){
           if($(document).scrollTop() > oldTop){
               right.animate({"top":$(document).scrollTop()},{
                   duration:30
               });
           }
       });
   }



});





require(['jquery'], function ($) {
    var marLeft
  if($('.fixed').length>0){
      if($(window).width()>1169){
          marLeft=$('.container').css('marginLeft');
          $('.fixed').css('left',marLeft+30);
          $(window).resize(function(){
              marLeft=$('.container').css('marginLeft');
              $('.fixed').css('left',marLeft+30);
          })
      }

  }

});




