define(['jquery'], function ($) {
    function Backgroundtoggle() {
        this.obj = $(".bk-toggle");
        this.id = "";
        this.img = $(".u-index-bk");
        this.jsonData = void 0;
        this.init();
    };
    Backgroundtoggle.prototype.init = function () {
        var self = this;
        var request = this.getJsonData();

        request.done(function (data) {
            self.jsonData = data[0];
            console.log("获取全部json数据成功");
            self.eventBind();
            console.log("开始数据绑定");
        });
    };
    Backgroundtoggle.prototype.eventBind = function () {
        var self = this;
        this.obj.on("hover.navtoggle", function (e) {
            self.id = $(this).data("nav");
            console.log("navid-->" + self.id);
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
        var imgsrc = this.jsonData[this.id];
        console.log("获取ID对应src-->" + imgsrc);
        this.img.attr("src", imgsrc);
    }
    return new Backgroundtoggle();


})