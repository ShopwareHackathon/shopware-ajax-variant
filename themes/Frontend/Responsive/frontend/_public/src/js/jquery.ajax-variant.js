;(function($) {
    $.plugin('swAjaxVariant', {
        defaults: {

        },

        init: function() {
            var me = this;
        }
    });

    $(function() {
        $('*[data-ajax-variants="true"]').swAjaxVariant();
    });
})(jQuery);