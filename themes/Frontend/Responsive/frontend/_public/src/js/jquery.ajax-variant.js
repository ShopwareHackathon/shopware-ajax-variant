;(function($) {
    $.plugin('swAjaxVariant', {
        defaults: {

        },

        init: function() {
            var me = this;

            me._on(me.$el, 'click', $.proxy(me.onChange, me));
        },

        requestData: function(data) {
            $.ajax({
                url: window.location.href,
                data: data,
                method: 'POST',
                success: function(response) {
                    var $response = $(response),
                        $productDetails = $response.find('.product--details');

                    console.log($response.html());

                    $('.product--details').html($productDetails.html());
                }
            });
        },

        onChange: function(event) {
            var me = this,
                $target = $(event.target),
                group = $target.attr('name'),
                value = $target.val();

            event.preventDefault();

            me.requestData(group + '=' + value);
        }
    });

    $(function() {
        $('*[data-ajax-variants="true"]').swAjaxVariant();
    });
})(jQuery);