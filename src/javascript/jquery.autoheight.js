define(['jquery'],function(){
    function AutoHeight(){
        this.obj  = $(".u-autoheight");
        this.scale = 1.7786;
        this.init();
        this.width = "100%";
        this.height = "100%";
        this.init();
    }
    AutoHeight.prototype.init = function(){
        this.syncHeight();
    }
    AutoHeight.prototype.bindEvent = function(){

    }
    AutoHeight.prototype.syncHeight = function(){
        if(this.obj.length > 0){
            this.height = Math.round(this.obj.width()/this.scale);
            this.obj.height = "500px";
        }

    }

}
)