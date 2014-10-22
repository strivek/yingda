require(['jquery'], function ($) {
//    var img=$('<img>');
//    var oDiv=$('<div>');
//    img.attr('src','../images/44.gif');
//    img.addClass('imgload');
//    oDiv.addClass('Divbg');
//    $('body').prepend(oDiv);
//    $('body').prepend(img);


        var timer = null;
        timer = setInterval(
            function(){
                loading();
            }
            ,300);
        function loading(){
//                console.log("loading..");
//            alert($('img').length);
            var num=$('img').length-2;
//            alert($('img').last().attr('src'));
//                console.log($('.u-fullscreen-index').last().height());
            if ($('img').eq(num).height()> 0) {
                alert(2222);
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