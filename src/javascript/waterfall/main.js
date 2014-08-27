//瀑布流调用
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    $('#waterfall').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1 		// 只发送一次请求
    });
});

////productListWomen.html 瀑布流
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    $('#productListWomen').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1, 		// 只发送一次请求
        colWidth: 235,
        createHtml: function (data) {
            return '<div class="wf_item_inner water-modal" data-id=' + data.id + ' data-toggle="modal" data-target="#water-modal"> ' +
                '<a href="' + data.url + '" class="thumb" target="_blank">' +
                '<img class="thumb_img"  src="' + data.imgSrc + '" />' +
                '</a>' +
                '<a style="position:absolute; right:10px; bottom:8px; display:block;color:#ffe3cd; font-size:40px;" class="iconfont icon-yingdaicon08" href="' + data.href + '" target="_blank"></a>' +
                '</div>';
        }
    })
});
//
//productListMen.html 瀑布流
require(['jquery', 'waterfall/jquery.waterfall'], function ($) {
    $('#productListMen').waterfall({
        url: '../json/json.js',
        perNum: 5,			// 每次显示五个
        ajaxTimes: 1, 		// 只发送一次请求
        colWidth: 235,
        createHtml: function (data) {
            return '<div class="wf_item_inner water-modal" data-id=' + data.id + ' data-toggle="modal" data-target="#water-modal-men"> ' +
                '<a href="' + data.url + '" class="thumb" target="_blank">' +
                '<img class="thumb_img"  src="' + data.imgSrc + '" />' +
                '</a>' +
                '<a style="position:absolute; right:10px; bottom:8px; display:block;color:#ffe3cd; font-size:40px;" class="iconfont" href="' + data.href + '" target="_blank">&#xe647</a>' +
                '</div>';
        }
    })
});
/**
 * Created by seven on 14/8/21.
 */
