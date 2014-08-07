require.config({
	baseUrl:"../../javascript/",
	paths:{
		jquery:"lib/jquery.min"
	}
});
//引入bootstrap 插件
require(['jquery', 'bootstrap'], function($) {

});
//瀑布流
require(['jquery','jquery.waterfall'],function($){
		$('#waterfall').waterfall({
 		url: 'js/json.js',
 		perNum: 5,			// 每次显示五个
 		ajaxTimes: 1 		// 只发送一次请求
	});
})

require(['jquery','jquery.lightbox'],function($){
	
})