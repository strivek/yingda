require.config({
	baseUrl:"../javascript",
	paths:{
		jquery:"lib/jquery.min"
	}

});

require(['jquery', 'bootstrap'], function($) {
    $('#carousel-1').carousel({
        interval: false
    });
    $('#carousel-2').carousel({
        interval: false
    });
});



