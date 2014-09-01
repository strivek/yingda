/**
 * Created by GaoFei on 14/8/21.
 */
//register.html 登陆页性别选择
require(['jquery', 'formselected/jquery.formselected'], function ($) {
    var selectBtn = $('.wrap-select .select');
    var li = $('.wrap-select ul li');
    var aSelect = $('.sexnone option');
    var aDisplay = $('.wrap-select ul');

    //城市
    var oSelect = $('.m-select .select1');
    var oli = $('.m-select ul li');
    var oDisplay = $('.m-select ul');
    selectBtn.down(li, aSelect, aDisplay);
    oSelect.down(oli, aSelect, oDisplay);

});