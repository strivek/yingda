require.config({
	baseUrl:"javascript",
	paths:{
		jquery:"lib/jquery.min"
	}
});


require(['jquery','slider'],function($,slider){
	console.log(slider);
})