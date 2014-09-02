/**
 * Created by gaofei on 14/8/21.
 */
//TODO-UPDAT 改为jquery插件方式
//productListWomen.html 灯箱
require(['jquery', 'lightbox2/jquery.lightbox2'], function ($, LightModal) {
    var sc = jQuery("[name=sc]").val();
    var LightModalOptions = (function () {
        function LightModalOptions() {
            this.fireClass = ".water-modal";
            this.modalId = "#water-modal";
            this.jsonData = "";
            this.currentId = -1;
            this.isAjaxCompleted = 1;
            this.url = "../json/productListWomen.json";
        }
        return LightModalOptions;
    })();
    var options = new LightModalOptions();
    var modalElem = $(options.modalId).length;
    if (modalElem) {
        var lightmodal = new LightModal(options);
    }
});
//productListMen.html 灯箱
require(['jquery', 'lightbox2/jquery.lightbox2'], function ($, LightModal) {
    var LightModalOptions = (function () {
        function LightModalOptions() {
            this.fireClass = ".water-modal";
            this.modalId = "#water-modal-men";
            this.jsonData = "";
            this.currentId = -1;
            this.isAjaxCompleted = 1;
            this.url = "../json/productListWomen.json";
        }

        return LightModalOptions;
    })();
    var options = new LightModalOptions();
    var modalElem = $(options.modalId).length;
    if (modalElem) {
        var lightmodal = new LightModal(options);
    }
});
