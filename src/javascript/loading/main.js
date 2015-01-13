require(['jquery'], function ($) {
//    var img=$('<img>');
//    var oDiv=$('<div>');
//    img.attr('src','../images/44.gif');
//    img.addClass('imgload');
//    oDiv.addClass('Divbg');
//    $('body').prepend(oDiv);
//    $('body').prepend(img);

    var num=$('img').length-1;
        var timer = null;
        timer = setInterval(
            function(){
                loading();
            }
            ,300);
        function loading(){
            if ($('img').eq(num).height()> 0) {
                clearInterval(timer);
                $('.Divbg').hide();
                $('.imgload').hide();
                if ($('.Divbg').is(':hidden')) {
                    $('.home').fadeIn(2000, function () {
                        setTimeout(function () {
                            $('.home').fadeOut(1000);
                            $('.home-img').fadeOut(1000);
                        }, 1000)
                    });
                }
            }
        }
});
