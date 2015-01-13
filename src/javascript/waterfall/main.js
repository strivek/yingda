//瀑布流调用
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    $(function(){
        // 一次性全部加载到本地，再部分显示
//        $('#waterfall').waterfall({
////        	url: 'json/water.json',
////        	perNum: 5,			// 每次显示五个
////        	ajaxTimes: 1 		// 只发送一次请求
//        });


        // 按需加载方式
//        var wf_page = 0;
        $('#waterfall').waterfall({
            url: '../json/look.json',
            perNum: 2,			// 每次显示五个
            ajaxTimes: 1,		// 只发送一次请求
//            baseUrl:'images/',如果引用跟路径需要在图片地址中添加

            createHtml: function(data) {
//                return '<div class="wf_item_inner">' +
//                    '<a href="'+ data.url +'" class="thumb" target="_blank">' +
//                    '<img class="thumb_img"  src="'+ data.imgSrc +'" />' +
//                    '</a>' +
//                    '<p class="desc" style="margin-top:1px;">'+ data.title +'</p>' +
//                    '<a style="display:block;color:#060;" href="'+data.image+'" target="_blank">查看大图</a>' +
//                    '</div>';
//            }
                return '<div class="wf_item_inner">' +
                    '<a href="newsdetails.asp?id=' + data.coId + '" class="thumb" target="_blank">' +
                    '<img class="thumb_img"  src="' + data.imgSrc + '"  style="height:auto"/>' +
                    '<div class="waterfall-content">' +
                    '<h3 class="title"><a href="newsdetails.asp?id=' + data.title + '" target="_blank">' + data.title + '</a></h3>' +
                    '<p class="time-line"><span class="time">' + data.time + '</span></p>' +
                    '<p class="desc">' + data.describe + '</p>' +
                    '<p class="text-right" style="text-align: right"><a href="newsdetails.asp?id=' + data.coId + '" target="_blank">' + '详情>' + '</a></p>' +
                    '</div></div>';
            }
        });
    });
});

require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    var gender = $("[name=sc]").val();
    var ser = encodeURI($("[name=ser]").val());


    $('#productList').waterfall({
        url: '../json/look.json',
        perNum: 5,	 // 每次显示五个
        ajaxTimes: 1, 	 // 只发送一次请求
        colWidth: 235,
//        imgUrlName: 'prImg',
//        baseUrl:'/uploads/product/s',
        createHtml: function (data) {
            return '<div class="wf_item_inner water-modal" data-id=' + data.imgSrc + ' data-toggle="modal" data-target="#water-modal"> ' +
                '<a href="' + data.imgSrc + '" class="thumb" target="_blank">' +
                '<img class="thumb_img"  src="' + data.imgSrc + ' " />' +
                '</a>' +
                '<a style="position:absolute; right:10px; bottom:8px; display:block;color:#ffe3cd; font-size:40px;" class="iconfont icon-yingdaicon08" href="' + data.imgSrc + '" target="_blank"></a>' +
                '</div>';
        }
    });
});