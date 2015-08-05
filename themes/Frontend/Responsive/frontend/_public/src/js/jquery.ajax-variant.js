;(function($) {
    $.plugin('swAjaxVariant', {
        defaults: {

        },

        init: function() {
            var me = this;

            me._on(me.$el, 'click', $.proxy(me.onChange, me));
        },

        requestData: function($form) {
            $.ajax({
                url: window.location.href + '?template=ajax',
                data: $form.serialize(),
                method: 'POST',
                success: function(response) {
                    var $response = $($.parseHTML(response)),
                        $productDetails;
                    $response = $($response.get(1));

                    $productDetails = $response.find('.product--details');

                    $('.product--details').html($productDetails.html());
                }
            });
        },

        onChange: function(event) {
            var me = this,
                $target = $(event.target);

            event.preventDefault();

            me.requestData($target.parents('form'));
        }
    });

    $(function() {
        $('*[data-ajax-variants="true"]').swAjaxVariant();
    });
})(jQuery);