require(['jquery'], function ($) {
    $(function(){

        $(".m-list3").hover(function () {

                $(this).find(".move").stop().animate({bottom: '0px'});
            },
            function () {
                $(this).find(".move").stop().animate({bottom: '-40px'});
            }
        );
    });
    $(function(){

            var oul = $('.imglb ol');
            var ali = $('.imglb ol li');
            var alien=ali.length;
            var olWid=ali.outerWidth()*alien;
            oul.width(olWid);


            var numLi = $('span i');
            var aliWidth = ali.eq(0).width();
            var _now = 0;	//这个是控制数字样式的计数器
            var _now2 = 0;	//这个是控制图片运动距离的计数器
            var timeId;
            var aimg = $('.imglb ol img');
            numLi.click(function(){
                var index = $(this).index();
                _now = index;
                _now2=index;

                $(this).addClass('active').siblings().removeClass();
                oul.animate({'left':-aliWidth*index},500);
            });
            function slider(){
                if(_now==numLi.size()-1){
                    ali.eq(0).css({
                        'position':'relative',
                        'left': olWid
                    });
                    _now=0;
                }else{
                    _now++;
                }

                _now2++;

                numLi.eq(_now).addClass('active').siblings().removeClass();
                oul.animate({'left':-aliWidth*_now2},500,function(){
                    if(_now==0){
                        ali.eq(0).css('position','static');
                        oul.css('left',0);
                        _now2=0;
                    }
                });
            }

            timeId = setInterval(slider,1500);
            $('.imglb').hover(function(){
                clearInterval(timeId);
            },function(){
                timeId = setInterval(slider,1500);
            });
        });

});