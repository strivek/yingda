/**
 * Created by jeff on 14/8/11.
 */

define(['jquery', 'bootstrap', 'jsviews', 'help'], function ($, boot, jsrender, hp) {
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
            this.fireName = ".water-modal";
            this.jsonData = "";
            this.currentId = -1;
        }
        return LightModalOptions;
    })();

    var Lightmodalbox = (function () {
        function Lightmodalbox(options) {
            this.options = options;
            this.ablbum = [];
            this.currentIndex = void 0;
            this.id = void 0;
            this.jsonData = {};
            this.currentId = -1;
            this.init();
        };
        Lightmodalbox.prototype.init = function () {
            this.start();
        };
        //获取json数据，与模板绑定，构建弹出层
        Lightmodalbox.prototype.build = function () {
            var self = this;
            //请求json数据
            var request = self.getJsonData();
            //回调函数
            request.done(function (data) {
                //存放数据
                self.jsondata = data[0];
                self.setJsonData();
            })
        };
        //监测事件，做好前期准备
        Lightmodalbox.prototype.start = function () {
            var self = this;
            //监测弹出事件。
            //TODO 从点击图片开始获取id,写一个配置id的方法
            $("#water-modal").on('show.bs.modal', function (e) {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            //上一页
            $("#water-modl .prev").on("click", function () {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            //下一页
            $("#water-modl .next").on("click", function () {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            return false;
        };
        Lightmodalbox.prototype.setId = function () {

        }
        //获取json数据
        Lightmodalbox.prototype.getJsonData = function () {
            var self = this;
            var request = $.ajax({
                type: "POST",
                url: "/yingda/src/json/jsview.json",
                data: { name: "John", location: "Boston" }
            })
            return request;

        };
        //将json数据绑定到html模板上
        //TODO  添加轮播初始化
        Lightmodalbox.prototype.setJsonData = function () {
            var template = $.templates("#detail-modal");
            template.link("#modal-body", this.jsondata);
        };

        Lightmodalbox.prototype.end = function () {

        };
        return Lightmodalbox;
    })();
    (function () {
        var options = new LightModalOptions();
        var lightmodalbox = new Lightmodalbox(options);
    })()
});

