require.config({
	baseUrl:"javascript",
	paths:{
		jquery:"lib/jquery.min"
	}



require(['jquery', 'bootstrap','nav'], function($,nav) {
    $('.nav>li').hover(function(){



        $(this).navshow('.m-menu','.m-nav-list-bg');
	})
});
