require.config({
    baseUrl: "../javascript",
    packages: ['waterfall', 'lightbox', 'lightbox2', 'formselected', 'scrollbar', 'bkgroundtoggle', 'navdropdown'
        , 'carousel', 'others', 'xscroll', 'scrollto','chapter21'],
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap',
        jsviews: 'lib/jsviews',
        help: 'lib/help',
        iscroll:"lib/iscroll",
        tweenLite:"lib/greensock/TweenLite.min",
        tweenTime:"lib/greensock/TimeLineLite.min",
        tweenCss:"lib/greensock/plugins/CSSPlugin.min",
        flexslider:"lib/jquery.flexslider-min",
        range:"lib/range"
    }
});

//home.html
require(['bkgroundtoggle']);

require(['waterfall']);
//looknews.html
//productListWomen.html
//productListMen.html
require(['lightbox']);

//productListMen.html
//productListWomen.html
require(['lightbox2']);
//register.html
require(['formselected']);

require(['scrollbar']);

require(['navdropdown']);

require(['carousel']);

require(['xscroll']);

require(['others']);

//progress.html
require(['scrollto']);
require(['chapter21']);

