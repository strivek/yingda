require.config({
    baseUrl: "../javascript",
    packages: ['waterfall', 'lightbox', 'lightbox2', 'formselected', 'scrollbar', 'bkgroundtoggle', 'navdropdown'
        , 'carousel', 'others'],
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap',
        jsviews: 'lib/jsviews',
        help: 'lib/help'
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

require(['others']);





