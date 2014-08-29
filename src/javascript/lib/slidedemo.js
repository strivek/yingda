/**
 * Created by Administrator on 2014/5/26.
 */
(function ($) {


    var isdesktop
    var extendDoor;
    var openDoor;
    var flexslider;
    var time;

    init();


    $(".list-item").click(doorOpen);

    $(".btn-return").click(closeDoor);

    $(".list-item").mouseenter(hoverIn).mouseleave(hoverOut);

    $(window).resize(resizeHover)


    function init() {
        myScroll = new IScroll('#boxscroll', { mouseWheel: true, scrollX: true, scrollY: false, bounceTime: 1200, click: true});

        isdesktop = isDesktop();


        flexslider = $('.flexslider').flexslider({
            slideshow: false
        });
    }

    function isDesktop() {
        return  $(window).width() > 1024 ? true : $(window).height() > 1024 ? true : false;
    }

    function closeDoor() {

        openDoor.timeScale(4).reverse();
        $(".list-item").on("mouseenter",hoverIn);
    }

    function doorOpen(event) {

        $(".list-item").off("mouseenter",hoverIn);
        $(".list-item").off("mouseout",hoverOut());

        openDoor = new TimelineLite({ onReverseComplete: resumehover});

        var index = $(this).index(),
            screen = $(window).width();
        time = 2;

        bf = $(".list-item:lt(" + index + ")"),
            af = $(".list-item:gt(" + index + ")"),
            cur = $(this),
            slideId = $(this).attr("id").split("-")[1] - 1,
            zindex = $(".m-sld .inner,.m-sld"),
            backBtn = $(".btn-return"),
            slide = $(".m-flexslider"),
            arrBefore = [cur],
            wrap = $(".wrap");
        bf.length != 0 ? arrBefore.push(bf) : "";

        if (screen > 1440) {

            time = 2.5;

        } else if (screen > 1000) {
            time = 1.3;


        } else if (screen > 700) {
            time = 1.8;
        }
        $(".g-sld .flex-control-paging li").eq(slideId).find("a").click();
        openDoor.to(wrap, 0, {css: {display: 'none'}})
            .to(arrBefore, time, {css: {left: '-' + screen}}, "open")
            .to(af, time, {css: {left: screen}}, "open")
            .to(backBtn, .2, {css: { zIndex: 110}}, "open")
            .to(zindex, 0, {css: {zIndex: 0}})

        event.stopPropagation();
    }

    function resumehover(e) {
        $(".list-item").on("mouseenter", mousehover);
    }

    function hoverIn(e) {
        console.log($(e.relatedTarget).attr("id"));

        var index = $(this).index(),
            bf = $(".list-item:lt(" + index + ")"),
            af = $(".list-item:gt(" + index + ")"),
            cur = $(this),
            fromElem = $(e.relatedTarget),
            shade = $(this).find(".shade");
        if (fromElem.attr("id")) {
            extendDoor = new TimelineLite();
            extendDoor.to(bf, .3, {css: {left: '-30px'}}, 'sm')
                .to(af, .3, {left: '-30px'}, 'sm')
                .to(cur, .3, {left: '-30px', width: '340px'}, 'sm')
                .to(fromElem, .3, {width: '310px'}, 'sm')
            if (isdesktop) {
                extendDoor.to(shade, .3, {autoAlpha: 0}, "sm");
            }


        } else {

            extendDoor = new TimelineLite();

            extendDoor.to(bf, .3, {left: '-30px'}, 'sm')
                .to(af, .3, {left: '-30px'}, 'sm')
                .to(cur, .3, {left: '-30px', width: '340px'}, 'sm')
            if (isdesktop) {
                extendDoor.to(shade, .3, {autoAlpha: 0}, "sm");
            }

        }
    }

    function hoverOut(e) {
        var shade = $(this).find(".shade");
        if (isdesktop) {
            extendDoor.to(shade, .3, {autoAlpha: .8});
        }
    }

    function resizeHover(e) {
        isdesktop = $(window).width() > 1024 ? true : $(window).height() > 1024 ? true : false;
        if (isdesktop) {
            $(".list-item .shade").css("opacity", ".8");
        } else {
            $(".list-item .shade").css("opacity", ".5");
        }

    }

}(jQuery));