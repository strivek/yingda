/**
 * Created by GaoFei on 14/8/22.
 */
define(['jquery', 'help'], function ($, hp) {

    'use strict';

    var defaults = {

    };

    // Constructor, initialise everything you need here
    var Hscroll = function (element, options) {
        this.wrap = element;
        this.slist = element.find(".slist");
        this.slistWidth = element.find("li").width() * element.find("li").length;
        this.movelens = this.slistWidth - this.slist.width();
        this.lt = this.wrap.find(".left");
        this.rt = this.wrap.find(".right");
        this.options = options;
        this.init();
    };

    // Plugin methods and shared properties
    Hscroll.prototype = {
        constructor: Hscroll,
        init: function () {
            $(this.lt).on("click", $.proxy(this.moveleft, this));
            $(this.rt).on("click", $.proxy(this.moveright, this));
            $(window).on("resize", $.proxy(this.updatedom, this));
        },
        moveleft: function (e) {
            var left = this.slist.css("left").slice(0, -2);
            if (left > 100) {
                this.slist.stop(true, false).animate({"left": "+=100"}, 1000);
            } else {
                this.slist.stop(true, false).animate({"left": "0"}, 1000);
            }
            e.preventDefault();
        },
        moveright: function (e) {


            var left = Math.abs(this.slist.css("left").slice(0, -2));
            console.log(this.movelens);
            console.log(left);
            if (this.movelens > 0) {
                if (left < this.movelens) {
                    console.log("right");
                    this.slist.stop(true, false).animate({"left": "-=100"}, 1000);
                }
            }
            e.preventDefault();
        },
        updatedom: function () {
            var element = $(this.wrap[0]);
            this.wrap = element;
            console.log(this.wrap.width());
            this.slist = element.find(".slist");
            this.slistWidth = element.find("li").width() * element.find("li").length;
            this.movelens = this.slistWidth - this.slist.width();
            this.slist.css("left", 0);
        }
    }

    // Create the jQuery plugin
    $.fn.xscroll = function (options) {
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        options = $.extend(true, {}, defaults, options);

        return this.each(function () {
            var $this = $(this);
            $this.data('plugin', new Hscroll($this, options));
        });
    };
    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn.xscroll.defaults = defaults;
    $.fn.xscroll.Plugin = Plugin;
});
