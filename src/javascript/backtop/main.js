require(['jquery'], function ($) {
    var backtop='<a title="返回顶部" href="javascript:;" class="backTop"><img src="../images/arrow.png" width="100%" alt=""/></a>';
    $('body').append(backtop);
    var winHei=$(window).height();
    var back=$('.backTop');
    var scrollTop;

    function scroll() {
        scrollTop = $(window).scrollTop();
        if(scrollTop>winHei){
            back.fadeIn();
        }else{
            back.fadeOut();
        }
    }
    $(window).scroll(scroll
    );

    back.on('click',function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    })
});