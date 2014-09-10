require(['zepto', 'mobiledialog/zepto.dialog'], function(){
    $('a[title="微信"]').click(function(e){
        e.preventDefault();
        $.dialog({
            content : '<p>提示：将二维码图片保存至手机相册后</p><p>使用微信扫描相册内的二维码图片！</p><p>或直接搜索添加应大官方微信：应大YINGDAK </p><img src="../images/wxewm.jpg" width="200px" height="200px"/>',
            ok : function() {},
            okText: '知道了！'
        });
    });
});