define(['jquery'], function ($) {
    function Backgroundtoggle() {
        this.obj = $(".bk-toggle");
        this.id = "";
        this.img = $(".u-index-bk.first");
        this.imgbk = $(".u-index-bk.two");
        this.jsonData = void 0;
        this.status = true;
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
    };
    Backgroundtoggle.prototype.getJsonData = function () {
        var self = this;
        var request = $.ajax({
            url: "../json/nav.json",
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
            if(self.status){
                self.img.attr("src", imgsrc);
                self.imgbk.stop().fadeOut(500);
                self.status = false;
            }else{
                self.imgbk.attr("src", imgsrc);
                self.imgbk.stop().fadeIn(500);
                self.status = true;
            }
        }
        image.src = imgsrc
    }
    return new Backgroundtoggle();

})