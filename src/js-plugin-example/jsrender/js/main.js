require.config({

    paths:{
        jquery:"/yingda/src/javascript/lib/jquery.min",
        jsviews:"/yingda/src/javascript/jsviews"
    }

});

require(['jquery','../../../javascript/lib/jsviews'],function($){
    var data = {
        "name": "Adriana"
    };

    var template = $.templates("#theTmpl");

    template.link("#result", data);

})