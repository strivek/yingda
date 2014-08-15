/**
 * Created by Jeff on 14/8/13.
 */
define(function () {
    function Hp() {
        this.pre = "调试信息";
    };

    Hp.prototype.log = function (msg) {
        console.log("调试信息->" + msg);
    };
    Hp.prototype.at = function(msg){
        alert("调试值为->"+msg);
    }
    var hp = new Hp();
    return hp;
})