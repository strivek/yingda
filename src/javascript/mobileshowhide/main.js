require(['zepto'], function () {
    if($('.big-btn').length > 0){
        $('.big-btn').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.menu').toggle();
        })
    }
    if($('.showDetail').length > 0){
        $('.showDetail').on('click', function (e) {
            e.preventDefault();
            $(this).closest('dl').siblings('.detail').toggle();
        })
    }
});
