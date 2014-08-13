/**
 * Created by jeff on 14/8/11.
 */

define(['jquery', 'bootstrap'], function ($) {
    //options；
    var LightModalOptions = (function () {
        function LightModalOptions() {
            this.fadeDuration = 500;
            this.fitImagesInViewport = true;
            this.resizeDuration = 700;
            this.positionFromTop = 50;
            this.showImageNumberLabel = true;
            this.alwaysShowNavOnTouchDevices = false;
            this.wrapAround = false;
            this.fireName = ".water-modal"
        }
        return LightModalOptions;
    })();

    var Lightmodalbox = (function () {
        function Lightmodalbox(options) {
            this.options = options;
            this.ablbum = [];
            this.currentIndex = void 0;
            this.init();
        }
        Lightmodalbox.prototype.init = function () {
            this.start();
        };
        //TODO-jeff:1.生成模板，2.绑定弹出事件
        Lightmodalbox.prototype.build = function () {

        };
        //TODO-jeff:1.接收事件，2.获取数据，3.和模板融合，4，弹出
        Lightmodalbox.prototype.start = function () {
               $(window).on("click",this.options.fireName,function(e){
                    $(this).
               });
        };
        //TODO-jeff:1.检测是否已经存在,2.根据ID获取json数据
        Lightmodalbox.prototype.getnextData = function (id) {
            var data = {};
            return data;
        };
        //TODO-jeff:1.获取下一个data的值
        Lightmodalbox.prototype.end = function () {

        };
        return lightmodalbox;
    })();
    (function(){
        var  options = new LightModalOptions();
        var lightmodalbox = new Lightmodalbox(options);
    })()
});

