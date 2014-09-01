define(['jquery'], function ($) {
    $.fn.down = function (oclick, aSelect, aDisplay) {
        this.click(function (e) {
            //aDisplay.slideToggle();
            if (aDisplay.css('display') == 'none') {
                aDisplay.slideDown();
                $(document).on("click.select", closeSelect);
            } else {
                aDisplay.slideUp();
            }
            e.preventDefault();
            e.stopPropagation();
        });

        function closeSelect() {
            if (aDisplay.css('display') == 'block') {
                aDisplay.slideUp();
                var val = $(this).attr('val');
            } else {
                $(document).off("click.select");
            }
        }

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