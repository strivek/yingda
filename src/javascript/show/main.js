require(['jquery'], function ($) {
    $(document).ready(function () {
        $(".show").click(function (e) {
            var $show = $(this);
            var $detail = $(this).siblings(".detail");
            var $alldetail = $(".detail");
            if ($detail.hasClass("showdetail")) {
                $alldetail.removeClass("showdetail");
            }
            else {
                $alldetail.removeClass("showdetail");
                $detail.addClass("showdetail");
            }
            e.preventDefault();
            return false;
        });
        });
    $(document).ready(function(){
        $(".p-list").click(function(e){
            var $main=$(this).parent();
            var $allmain = $(".main");
            if($main.hasClass("line"))
            {
                $allmain.removeClass("line");
            }
            else{
                $allmain.removeClass("line");
                $main.addClass("line");
            }
            e.preventDefault();
            return false;
        });
        });
});

require(['jquery'], function ($) {

    if($(".m-pg-yearbook").length < 1) return false;

    var btns = $(".m-show-1");
    var cnt = $(".m-detail");

    for(var i=0; i<btns.length; i++){
        btns[i].index = i;
        btns[i].onclick = function(){
            for(var j=0; j<cnt.length; j++){
                cnt[j].style.display = "none";
            }
            cnt[this.index].style.display = "block";
        };
    }

});