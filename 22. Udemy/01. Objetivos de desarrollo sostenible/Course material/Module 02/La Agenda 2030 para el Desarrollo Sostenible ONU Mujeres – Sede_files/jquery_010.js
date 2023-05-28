$(function () {

    $('table.unwomen-table-std').unwomenTableFormatStd();

});

(function ($) {

    $.fn.extend({

        unwomenTableFormatStd: function () {

            this.each(function () {

                $('tbody tr:odd', $(this)).addClass('odd');
                $('td:first, th:first', $(this).find('tr')).addClass('first');

            });
        }
    });

})(jQuery);