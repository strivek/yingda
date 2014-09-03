define(['jquery','jsviews'],function(){

    "use strict";
    $.views.tags({
        range: {
            // Inherit from {{for}} tag
            baseTag: $.views.tags["for"],

            // Override the render method of {{for}}
            render: function (val) {
                var start = this.tagCtx.props.start || 0,
                    end = this.tagCtx.props.end;

                if (start || end) {
                    if (!this.tagCtx.args.length) {
                        val = [];
                        end = end || 0;
                        for (var i = start; i <= end; i++) {
                            val.push(i);
                        }
                    } else if ($.isArray(val)) {
                        val = val.slice(start, end);
                    }
                }

                // Call the baseTag render method
                return this.baseTag.render.apply(this, val ? [val] : arguments);
            },

            // override onArrayChange of the {{for}} tag implementation
            onArrayChange: function (ev, eventArgs) {
                this.refresh();
            }
        }
    });


})