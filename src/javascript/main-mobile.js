require.config({
    baseUrl: "../javascript",
    packages: ['swiper','mobileshowhide'],
    paths: {
        zepto: "lib/zepto.min"
    }
});
//swiper
require(['swiper']);
//show hide
require(['mobileshowhide']);

