require.config({
    baseUrl: "javascript",
    packages: ['menu'],
    paths: {
        zepto: "lib/zepto.min"
    }
});
//header menu
require(['menu']);

