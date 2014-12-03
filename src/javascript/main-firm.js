require.config({
    baseUrl: "../javascript",
    packages: ["pop2D","bdmap","popDes","show","crsFirm","others",'mobileshowhide','backtop'],
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap',
        'async': 'lib/async',
        zepto: "lib/zepto.min"
    }
});
require(['pop2D']);
require(['bdmap']);
require(['popDes']);
require(['show']);
require(['crsFirm']);
require(['others']);
require(['bootstrap']);
require(['mobileshowhide']);
require(['zepto']);
require(['backtop']);