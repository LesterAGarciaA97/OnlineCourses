$(function () {

    $('div.img-cap-left, div.img-cap-right').unwomenCaptionFormatter();

});

(function ($) {

    $.fn.extend({

        unwomenCaptionFormatter: function () {

            this.each(function () {
                var imgWidth = $('img', $(this)).innerWidth();
                $('div.caption', $(this)).css({'width': imgWidth});

            });
        }
    });

})(jQuery);