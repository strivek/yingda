/**
 * Created by jeff on 14/8/11.
 */

define(['jquery'], function ($) {
    //options；
    var LightboxOptions = (function () {
        function LightboxOptions() {
            this.fadeDuration = 500;
            this.fitImagesInViewport = true;
            this.resizeDuration = 700;
            this.positionFromTop = 50;
            this.showImageNumberLabel = true;
            this.alwaysShowNavOnTouchDevices = false;
            this.wrapAround = false;
        }

        return LightboxOptions;
    })();

    var lightbox = (function () {
        function Lightbox(options) {
            this.ablbum = [];
            this.currentIndex = void 0;
            this.init();
        }

        Lightbox.prototype.init = function () {
            this.start();
        };
        //TODO-jeff:1.生成模板，2.绑定弹出事件
        Lightbox.prototype.build = function () {

        };
        //TODO-jeff:1.接收事件，2.获取数据，3.和模板融合，4，弹出
        Lightbox.prototype.start = function () {

        };
        //TODO-jeff:1.检测是否已经存在,2.根据ID获取json数据
        Lightbox.prototype.getnextData = function (id) {
            var data = {};
            return data;
        };
        //TODO-jeff:1.获取下一个data的值
        Lightbox.prototype.end = function () {

        };
    })();

});
