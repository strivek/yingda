define(['jquery'], function ($) {

    'use strict';

    var defaults = {

    };


    function Backgroundtoggle() {
        this.obj = $(".bk-toggle");
        this.id = "";
        this.img = $(".u-fullscreen-index.first");
        this.defaultimg = this.img.attr("src");
        this.imgbk = $(".u-fullscreen-index.two");
        this.jsonData = void 0;
        this.status = true;
        this.url = "/homeImg.asp";
        this.init();
    };
    Backgroundtoggle.prototype.init = function () {
        var self = this;
        var request = this.getJsonData();

        request.done(function (data) {
            self.jsonData = data[0];
            self.eventBind();
        });
    };
    Backgroundtoggle.prototype.eventBind = function () {
        var self = this;
        this.obj.on("hover.navtoggle", function (e) {
            self.id = $(this).data("nav");
            if (self.id != null) {
                self.setbk();
            }
        })
        $(".m-nav-list-bg").on("hover.hide", function (e) {
            self.status = true;
            self.img.add(self.imgbk).attr("src", self.defaultimg);
        })
    };
    Backgroundtoggle.prototype.getJsonData = function () {
        var self = this;
        var request = $.ajax({
            url: self.url,
            type: "GET",
            dataType: "json"
        });
        return request;
    }
    Backgroundtoggle.prototype.setbk = function () {

        var self = this;
        var imgsrc = this.jsonData[this.id];
        var image = document.createElement("img");
        // For debugging, output successful preloading msg
        image.onload = function () {
            if (self.status) {
                self.img.attr("src", imgsrc);
                self.imgbk.stop().fadeOut(500);
                self.status = false;
            } else {
                self.imgbk.attr("src", imgsrc);
                self.imgbk.stop().fadeIn(500);
                self.status = true;
            }
        }
        image.src = imgsrc
    };

    $.fn.bktoggle = function (options) {
        options = $.extend(true, {}, defaults, options);
        return this.each(function () {
            var $this = $(this);
            $this.data('plugin', new Backgroundtoggle($this, options));
        });
    };

})
