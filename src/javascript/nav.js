define(['jquery'],function($){

    $.fn.navshow = function(b,c) {

        $(this).find(b).toggle();
        $(c).toggle();
    }

})