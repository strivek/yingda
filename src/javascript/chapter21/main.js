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
        this.listItem = $(".list-item");
        this.backBtn = $(".btn-return");
        this.init();
        this.prebtn = $(".prebtn");
        this.nextbtn = $(".nextbtn");
        this.backBtn = $(".btnreturn");
        this.currId = void 0;

    }

    Slidelight.prototype.init = function () {
        myScroll = new IScroll('#boxscroll', { mouseWheel: true, scrollX: true, scrollY: false, click: true});

        this.isdesktop = this.isDesktop();
        this.eventBind();
        this.parent();


    }

    Slidelight.prototype.eventBind = function () {
        var That=this;
        //指向问题存储
        //打开外层遮罩
        this.listItem.click($.proxy(this.doorOpen, this));
        //关闭外层遮罩
        $(".btnreturn").click($.proxy(this.closeDoor, this));
        //鼠标划入
        this.listItem.mouseenter($.proxy(this.hoverIn, this));
        //鼠标划出
        this.listItem.mouseleave($.proxy(this.hoverOut, this));
        //上一张
        $(".prebtn").on("click", $.proxy(this.prebtn, this));
        //下一张
        $(".nextbtn").on("click", $.proxy(this.nextbtn, this));
        //屏幕大小改变
//        $(window).resize($.proxy(this.resizeHover), this);
        $(window).on('resize',function(){
            That.resizeHover();
            That.parent();
        });
    };
    Slidelight.prototype.parent = function () {
        var This=this.listItem;
        var animateWid=this.listItem.width()*3;
        var screen=$(window).width();
        var disT=screen+animateWid;
        var totalWid=Itemlength*this.listItem.width();
        sport();
        //调用
        function sport(){
            //左右键控制运动
            $('.arrow-center .icon-yingdaicon10').click(function(){
                setAnimate1();
            });
            $('.arrow-center .icon-yingdaicon09').click(function(){
                setAnimate2();
            });
            function setAnimate1(){
                if(! This.parent().is(":animated")) {
                    if (parseInt(This.parent().css('left')) <= disT - totalWid) {
                        This.parent().animate({'left': -totalWid + screen + 'px'}, 500);
                    } else {
                        This.parent().animate({'left': '-=' + animateWid + 'px'}, 500)
                    }
                }
            };
            function setAnimate2(){
                if(!This.parent().is(":animated")) {
                    if (parseInt(This.parent().css('left')) > -animateWid) {
                        This.parent().animate({'left': 0}, 500)
                    } else {
                        This.parent().animate({'left': '+=' + animateWid + 'px'}, 500)
                    }
                }
            }
        }
    }

    Slidelight.prototype.isDesktop = function () {
        return  $(window).width() > 1024 ? true : $(window).height() > 1024;
    };
    Slidelight.prototype.closeDoor = function () {
        this.openDoor.timeScale(4).reverse();
        $(".list-item").on("mouseenter", $.proxy(this.hoverIn, this));
    };
    Slidelight.prototype.doorOpen = function (event) {
        listItem.off("mouseenter", $.proxy(this.hoverIn, this));
        listItem.off("mouseout", $.proxy(this.hoverOut, this));

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
        $(".m-slider .listdetail").attr("src", imglink);

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
        $(".m-slider .listdetail").attr("src", url);
    }
    Slidelight.prototype.getNextUrl = function (id) {
        var num = id.split("-")[1];
        if (num < 21) {
            num++;
        } else {
            num = 1;
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

//            clearInterval(timer);
//        alert(index);
        if (fromElem.attr("id") && fromElem.hasClass("list-item")) {
            this.extendDoor = new TimelineLite();
            if (this.isdesktop) {
                this.extendDoor.to(shade, .3, {autoAlpha: 0}, "sm");
            }
        } else {
            this.extendDoor = new TimelineLite();
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
//        this.parent();
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

