/*
 * Created by GaoFei on 14/8/22.
 */
require(['jquery',"bkgroundtoggle/backgroundtoggle"], function ($) {
    var winWid;
    winWid=parseInt($(window).width());
    $(window).resize(function(){
        winWid=parseInt($(window).width());
    })
    if(winWid>1024){
        $(".u-fullscreen-index.first").bktoggle();
    }

})