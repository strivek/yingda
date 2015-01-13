require.config({
    baseUrl: "../javascript",
    packages: ['waterfall','lightbox','lightbox2','formselected','scrollbar','bkgroundtoggle','navdropdown'
,'carousel','others','xscroll','scrollto','chapter21','brandmap','loading','backtop'],
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
        range:"lib/range",
        'async':'lib/async'
    }
});

//home.html
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
require(['bkgroundtoggle']);
require(['navdropdown']);
require(['carousel']);
require(['others']);
require(['xscroll']);
//progress.html
require(['scrollto']);
require(['chapter21']);
require(['brandmap']);
//加载
require(['loading']);
require(['backtop']);

