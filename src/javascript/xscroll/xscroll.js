/**
 * Created by GaoFei on 14/8/22.
 */
define(['jquery'], function ($) {

    'use strict';

    var defaults = {

    };

    // Constructor, initialise everything you need here
    var Hscroll = function (element, options) {
        this.element = element;
        this.options = options;
    };

    // Plugin methods and shared properties
    Hscroll.prototype = {
        constructor: Plugin,

        init: function () {

        }
    }

    // Create the jQuery plugin
    $.fn.xscroll = function (options) {
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        options = $.extend(true, {}, defaults, options);

        return this.each(function () {
            var $this = $(this);
            $this.data('plugin', new Plugin($this, options));
        });
    };

    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn.xscroll.defaults = defaults;
    $.fn.xscroll.Plugin = Plugin;
});
