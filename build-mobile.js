/*=================================
    r.js文件压缩整合
    需要有nodejs
    根目录下命令行：r.js -o build-mobile.js
  =================================
 */

({
    baseUrl: "src/javascript",
    mainConfigFile: 'src/javascript/main-mobile.js',
    name: "main-mobile",
    preserveLicenseComments: false,
    out: "src/javascript/main-mobile-built.js"
})
