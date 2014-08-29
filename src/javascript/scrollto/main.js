require(['jquery', 'scrollto/jquery-scrollto'], function ($) {

    $('.pd1').click($.proxy(scrollto,$,"#pb1"));

    $('.pd2').click($.proxy(scrollto,$,"#pb2"));

    $('.pd3').click($.proxy(scrollto,$,"#pb3"));

    $('.pd4').click($.proxy(scrollto,$,"#pb4"));

    function scrollto(obj, durating, easeing) {
        $(obj).ScrollTo({
            duration: durating || 1000,
            easing: easeing || 'linear'
        });
    }
});
