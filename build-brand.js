/*=================================
    r.js文件压缩整合
    需要有nodejs
    根目录下命令行：r.js -o build-brand.js
  =================================
 */

({
    baseUrl: "src/javascript",
    mainConfigFile: 'src/javascript/main.js',
    name: "main",
    preserveLicenseComments: false,
    out: "src/javascript/main-brand-built.js"
})
