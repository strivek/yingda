/**
 * Created by jeff on 14/8/11.
 */

define(['jquery', 'bootstrap', '../../../javascript/lib/jsviews', 'help'], function ($, boot, jsrender, hp) {
    //options；
    [
        {
            "id": "dt1",
            "title": "休闲系列",
            "subtitle": "掐腰款皮草",
            "info": "黑色厚实掐腰款皮草",
            "num": "8x12xk2",
            "salelink": "www.baidu.com",
            "img1":"../../images/look1.jpg",
            "img2":"../../images/look2.jpg",
            "img3":"../../images/look3.jpg",
            "img4":"../../images/look4.jpg"
        }
    ]
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
            this.isAjaxCompleted = 1;
        }

        return LightModalOptions;
    })();

    var Lightmodalbox = (function () {
        function Lightmodalbox(options) {
            this.options = options;
            this.ablbum = [];
            this.currentIndex = void 0;
            this.id = void 0;
            this.idList = [];
            this.jsonData = {};
            this.currentId = -1;
            this.init();
        };
        Lightmodalbox.prototype.init = function () {
            this.getIdList();
            this.start();
        };
        //获取json数据，与模板绑定，构建弹出层
        Lightmodalbox.prototype.build = function () {
            var self = this;
            hp.log("开始开准异步请求")
            //请求json数据
            var request = self.getJsonData();
            //回调函数
            request.done(function (data) {

                //存放数据
                hp.log("执行异步回调函数");
                self.jsondata = data[0];
                self.setJsonData();
            })
        };
        //监测事件，做好前期准备
        Lightmodalbox.prototype.start = function () {
            var self = this;
            //监测弹出事件。
            //TODO 从点击图片开始获取id,写一个配置id的方法
            $(document).on('click','.water-modal',function (e) {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            //上一页
            $(document).on("click", "#water-modal .prev", function () {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            //下一页
            $(document).on("click", '#water-modal .next', function () {
                self.currentId = $(this).data("id");//获取id
                self.build();//开始构造弹出modal
            });
            return false;
        };
        Lightmodalbox.prototype.getIdList = function () {
            var self = this;
            self.idList = [];
            var modalList = $(this.options.fireName);
            modalList.each(function () {
                var $this = $(this);
                var data = $this.data("id");
                self.idList.push(data);
            });
        }
        //获取json数据
        Lightmodalbox.prototype.getJsonData = function () {
            var self = this;
            var request = $.ajax({
                type: "GET",
                url: "/yingda/src/json/jsview.json",
                data: { id: self.currentId, location: "Boston" }
            })
            return request;
        };
        //将json数据绑定到html模板上
        //TODO  添加轮播初始化
        Lightmodalbox.prototype.setJsonData = function () {
            var template = $.templates("#detail-modal");
            this.setPreAndNext();
            template.link("#modal-body", this.jsondata);
            $('.carousel').carousel();
        };
        Lightmodalbox.prototype.setPreAndNext = function () {
            var self = this;
            var id = (function () {
                for (var i = 0, lens = self.idList.length; i < lens; i++) {
                    if (self.idList[i] == self.currentId) {
                        if (i == lens - 1) {
                            hp.log("翻页：列表尾部");
                            return{
                                "prev": (i - 1),
                                "next": 0
                            }
                        } else if (i == 0) {
                            hp.log("翻页:列表头部");
                            return {
                                "prev": (lens - 1),
                                "next": 1
                            }
                        } else {
                            hp.log("翻页：列表中间");
                            return{
                                "prev": (i - 1),
                                "next": (i + 1)
                            };
                        }
                    }
                }
            })()
            this.jsondata.prev = self.idList[id.prev];
            this.jsondata.next = self.idList[id.next];
        }


        Lightmodalbox.prototype.end = function () {

        };
        return Lightmodalbox;
    })();
    (function () {
        var options = new LightModalOptions();
        var lightmodalbox = new Lightmodalbox(options);
    })()
})
;

