require(['jquery','async!http://api.map.baidu.com/api?key=&v=1.1&services=true'], function ($) {


//创建和初始化地图函数：
    function initMap(){
        createMap(116.403875,39.915168);//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }

//创建地图函数：

    function createMap(a,b){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
//       var point = new BMap.Point(a,39.915279);//定义一个中心点坐标
        var point = new BMap.Point(a,b);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }

//    createMap(116.403848);

//地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }

//地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
    var markerArr = [];

//创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor:"#808080",
                color:"#333",
                cursor:"pointer"
            });

            (function(){
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close",function(){
                    _marker.getLabel().show();
                })
                label.addEventListener("click",function(){
                    _marker.openInfoWindow(_iw);
                })
                if(!!json.isOpen){
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
//创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
//创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }

    initMap();//创建和初始化地图
//alert("当前地图中心点：" + map.getCenter().lng + "," + map.getCenter().lat);
//    alert($('.mapDetail').length);


    $('.mapDetail').click(

        function(){
            if($(this).attr('class')=='pr-20 mapDetail'){
                $('#dituContent').show();

                $('.shop_pic').hide();
                var mapId=$(this).attr('id');
                //alert(mapId);
//            var request = $.ajax({
//                type: "GET",
//                url: self.options.url,
//                data: { id: self.currentId, location: "Boston" }
//            });
                var request= $.ajax({
                    type:"GET",
                    url: '../json/map.json'

                });
                request.done(function (data){
//            alert(data[mapId]['title']);
//            $.each(data,function(index,value){
//               if(value['id']==mapId){
//                   alert("title"+":"+data[index]['title']);
//               };
//            })
                    markerArr = data[mapId];
                    var str=data[mapId][0].point;
                    var arr=str.split('|');
//            alert(arr[1]);

                    function initMap(){
                        createMap(arr[0],arr[1]);//创建地图
                        setMapEvent();//设置地图事件
                        addMapControl();//向地图添加控件
                        addMarker();//向地图中添加marker
                    }
                    initMap();

                });

                $(this).addClass('showpic').html('查看本店图片');
            }

            else if($(this).hasClass('showpic')){

                $(this).removeClass('showpic').addClass('returnList').html('返回列表');
                $('#dituContent').hide();
                var mapId=$(this).attr('id');
                var orequest= $.ajax({
                    type:"GET",
                    url: '../json/map.json'

                });
                orequest.done(function (data){

                    $('.shop_pic').html('<img src="'+data[mapId][0].img+'" alt="..." class="img-responsive" width="100%">');
                    $('.shop_pic').show();
                })





            }else if($(this).hasClass('returnList')){
                $('.shop_pic').hide();
                $(this).removeClass('returnList').html('在地图上寻找');
            }
//            this.num=0;
//            var currentCategory=this.num%3;
//            switch(currentCategory){
//                case 0:{
//                    alert(0);
//                    break;
//                }
//                case 1:{
//                    alert(1);
//                    break;
//                }
//                case 2:{
//                    alert(2);
//                    break;
//                }
//            }
//            this.num++;
//            console.log("我是地图")
//            var This=$(this);
//            This.attr('class','showPic');
//            This.html('查看本店图片');
//            $('.showPic').click(function(){
//                console.log("我是图片")
//                $(this).html('返回列表').attr('class','returnList');
//                    $('.returnList').click(function(){
//                        console.log("我是列表");
//                        $(this).html('在地图上寻找').attr('class','mapDetail');
//                    })
//
//            });


//    markerArr = [{title:"北海公园",content:"我的最爱",point:"116.394831|39.933842",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}]
//    ;

//    initMap();//创建和初始化地图


        }
    )

});