require.config({
    baseUrl: "../javascript",
    packages: ["pop2D","bdmap","popDes","show","crsFirm"],
    paths: {
        jquery: 'lib/jquery.min',
        'async': 'lib/async'
    }
});
require(['pop2D']);
require(['bdmap']);
require(['popDes']);
require(['show']);
require(['crsFirm']);