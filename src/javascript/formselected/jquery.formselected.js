define(['jquery'], function ($) {
    $.fn.down = function (oclick, aSelect, aDisplay) {
        this.click(function () {
            aDisplay.slideToggle();
        });
        var That = this;
        oclick.click(function () {
            var val = $(this).attr('val');
            var oText = $(this).text();
            for (var i = 0; i < aSelect.length; i++) {
                aSelect.eq(i).removeAttr('selected');
                if (aSelect.eq(i).attr('value') == val) {
                    aSelect.eq(i).attr('selected', 'selected');
                    aSelect.eq(i).text(oText);
                }
            }
            That.text(oText);
            $('#a').val(val);
            aDisplay.slideUp(10);
        });
    }

});