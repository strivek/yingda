//瀑布流调用
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    $('#waterfall').waterfall({
        url: 'news.asp',
        perNum: 5,	 // 每次显示五个
        ajaxTimes: 1, 	 // 只发送一次请求
        createHtml:function(data){
            if(data.coImg==null){
                return '<div class="wf_item_inner">' +
                    '<div class="waterfall-content">' +
                    '<h3 class="title"><a href="newsdetails.asp?id=' + data.coId + '" target="_blank">' + data.coTitle + '</a></h3>' +
                    '<p class="time-line"><span class="time">' + data.coTime + '</span></p>' +
                    '<p class="desc">' + data.coDescribe + '</p>' +
                    '<p class="text-right" style="text-align: right"><a href="newsdetails.asp?id=' + data.coId + '" target="_blank">' + '详情>' + '</a></p>' +
                    '</div></div>';
            }else{
                return '<div class="wf_item_inner">' +
                    '<a href="newsdetails.asp?id=' + data.coId + '" class="thumb" target="_blank">' +
                    '<img class="thumb_img"  src="/uploads/' + data.coImg + '"  style="height:auto"/>' +
                    '</a>' +
                    '<div class="waterfall-content">' +
                    '<h3 class="title"><a href="newsdetails.asp?id=' + data.coId + '" target="_blank">' + data.coTitle + '</a></h3>' +
                    '<p class="time-line"><span class="time">' + data.coTime + '</span></p>' +
                    '<p class="desc">' + data.coDescribe + '</p>' +
                    '<p class="text-right" style="text-align: right"><a href="newsdetails.asp?id=' + data.coId + '" target="_blank">' + '详情>' + '</a></p>' +
                    '</div></div>';
            }
        }
    });
});

////productList.html 瀑布流
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    var gender = $("[name=sc]").val();
    var ser =$("[name=ser]").val();

    $('#productList').waterfall({
        url: 'productlist.asp?type='+gender+"&coSer="+ser+"&time="+new Date(),
        perNum: 5,	 // 每次显示五个
        ajaxTimes: 1, 	 // 只发送一次请求
        colWidth: 235,
        createHtml: function (data) {
            return '<div class="wf_item_inner water-modal" data-id=' + data.prId + ' data-toggle="modal" data-target="#water-modal"> ' +
                '<a href="' + data.prId + '" class="thumb" target="_blank">' +
                '<img class="thumb_img"  src="/uploads/product/' + data.prImg + ' " />' +
                '</a>' +
                '<a style="position:absolute; right:10px; bottom:8px; display:block;color:#ffe3cd; font-size:40px;" class="iconfont icon-yingdaicon08" href="' + data.prId + '" target="_blank"></a>' +
                '</div>';
        }
    });

});


/**
 * Created by seven on 14/8/21.
 */