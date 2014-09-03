require(['jquery', 'iscroll', 'tweenTime', 'tweenLite', 'tweenCss', 'flexslider'], function ($, scroll) {

    /**
     * Created by Administrator on 2014/5/26.
     * Updated by GaoFei on 2014/9/1.
     */
    var Slidelight = function Slidelight() {
        this.isdesktop = "";
        this.extendDoor = {};
        this.openDoor = {};
        this.flexslider = "";
        this.time = "";
        this.init();
        this.prebtn = $(".prebtn");
        this.nextbtn = $(".nextbtn");
        this.backBtn = $(".btnreturn");
        this.currId = void 0;

    }

    Slidelight.prototype.init = function () {
        myScroll = new IScroll('#boxscroll', { mouseWheel: true, scrollX: true, scrollY: false, bounceTime: 1200, click: true});

        this.isdesktop = this.isDesktop();
        this.eventBind();

    }
    Slidelight.prototype.eventBind = function () {

        $(".list-item").click($.proxy(this.doorOpen, this));
//
        $(".btnreturn").click($.proxy(this.closeDoor, this));

        $(".list-item").mouseenter($.proxy(this.hoverIn, this)).mouseleave($.proxy(this.hoverOut, this));

        $(".prebtn").on("click", $.proxy(this.prebtn, this));

        $(".nextbtn").on("click", $.proxy(this.nextbtn, this));

        $(window).resize($.proxy(this.resizeHover), this);

    }
    Slidelight.prototype.isDesktop = function () {
        return  $(window).width() > 1024 ? true : $(window).height() > 1024 ? true : false;
    };
    Slidelight.prototype.closeDoor = function () {
        this.openDoor.timeScale(4).reverse();
        $(".list-item").on("mouseenter", $.proxy(this.hoverIn, this));
    };
    Slidelight.prototype.doorOpen = function (event) {
        $(".list-item").off("mouseenter", $.proxy(this.hoverIn, this));
        $(".list-item").off("mouseout", $.proxy(this.hoverOut, this));

        this.openDoor = new TimelineLite({ onReverseComplete: $.proxy(this.resumehover, this)});

        var index = $(event.currentTarget).index(),
            screen = $(window).width(),
            time = 2,
            bf = $(".list-item:lt(" + index + ")"),
            af = $(".list-item:gt(" + index + ")"),
            cur = $(event.currentTarget),
            slideId = cur.attr("id").split("-")[1] - 1,
            zindex = $(".m-sld .inner,.m-sld"),
            arrBefore = [cur],
            wrap = $(".wrap"),
            imglink = $("#" + cur.attr("id")).data("link");
        console.log(imglink);
        $(".m-slider img").attr("src", imglink);

        this.currId = cur.attr("id");

        bf.length != 0 ? arrBefore.push(bf) : "";

        if (screen > 1440) {

            time = 2.5;

        } else if (screen > 1000) {
            time = 1.3;


        } else if (screen > 700) {
            time = 1.8;
        }

        this.openDoor
            .to(arrBefore, time, {css: {left: '-' + screen}}, "open")
            .to(af, time, {css: {left: screen}}, "open")
            .to(this.backBtn, .2, {css: { zIndex: 110}}, "open")
            .to(zindex, 0, {css: {zIndex: 0}});
        event.stopPropagation();
    };
    Slidelight.prototype.prebtn = function (event) {
        var url = this.GetPreUrl(this.currId);
        this.setImgUrl(url);

    };
    Slidelight.prototype.nextbtn = function (event) {
        var url = this.getNextUrl(this.currId);
        console.log(url);
        this.setImgUrl(url);
    };
    Slidelight.prototype.setImgUrl = function (url) {
        $(".m-slider img").attr("src", url);
    }
    Slidelight.prototype.getNextUrl = function (id) {
        console.log(this.currId);
        var num = id.split("-")[1];
        if (num < 21) {
            num++;
        } else {
            num = 0;
        }
        this.currId = "step-" + num;
        return $("#" + this.currId).data("link");

    };
    Slidelight.prototype.GetPreUrl = function (id) {
        var num = id.split("-")[1];
        if (num > 1) {
            num--;
        } else {
            num = 21;
        }
        this.currId = "step-" + num;
        return $("#" + this.currId).data("link");

    };

    Slidelight.prototype.resumehover = function (e) {
        $(".list-item").on("mouseenter", mousehover);
    };
    Slidelight.prototype.hoverIn = function (event) {
        var cur = $(event.currentTarget),
            index = cur.index(),
            bf = $(".list-item:lt(" + index + ")"),
            af = $(".list-item:gt(" + index + ")"),
            fromElem = $(event.relatedTarget),
            shade = cur.find(".shade");


        if (fromElem.attr("id")) {
            this.extendDoor = new TimelineLite();
            this.extendDoor.to(bf, .3, {css: {left: '-30px'}}, 'sm')
                .to(af, .3, {left: '-30px'}, 'sm')
                .to(cur, .3, {left: '-30px', width: '340px'}, 'sm')
                .to(fromElem, .3, {width: '310px'}, 'sm');

            if (this.isdesktop) {
                this.extendDoor.to(shade, .3, {autoAlpha: 0}, "sm");
            }
        } else {

            this.extendDoor = new TimelineLite();

            this.extendDoor.to(bf, .3, {left: '-30px'}, 'sm')
                .to(af, .3, {left: '-30px'}, 'sm')
                .to(cur, .3, {left: '-30px', width: '340px'}, 'sm')
            if (this.isdesktop) {
                this.extendDoor.to(shade, .3, {autoAlpha: 0}, "sm");
            }
        }
    };
    Slidelight.prototype.hoverOut = function (event) {
        this.extendDoor = new TimelineLite();
        var shade = $(event.currentTarget).find(".shade");
        if (this.isdesktop) {
            this.extendDoor.to(shade, .3, {autoAlpha: .8});
        }
    }
    Slidelight.prototype.resizeHover = function () {
        this.isdesktop = $(window).width() > 1024 ? true : $(window).height() > 1024 ? true : false;
        if (this.isdesktop) {
            $(".list-item .shade").css("opacity", ".8");
        } else {
            $(".list-item .shade").css("opacity", ".5");
        }
    }

    if ($("#boxscroll").length > 0) {
        var c = new Slidelight();
    }


})