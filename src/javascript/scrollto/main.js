require(['jquery','scrollto/jquery-scrollto'], function($){
    $('.pd1').click(function(){
        $('#pb1').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    });
    $('.pd2').click(function(){
        $('#pb2').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    });
    $('.pd3').click(function(){
        $('#pb3').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    });
    $('.pd4').click(function(){
        $('#pb4').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    })
});
