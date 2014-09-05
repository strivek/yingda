require.config({
    baseUrl: "../javascript",
    packages: ['swiper','mobileshowhide','mobiledialog'],
    paths: {
        zepto: "lib/zepto.min"
    }
});
//swiper slide
require(['swiper']);
//nav show hide
require(['mobileshowhide']);
//detail page show hide
require(["mobileclose/mobileclose"]);
//dialog for wechat
require(['mobiledialog']);

