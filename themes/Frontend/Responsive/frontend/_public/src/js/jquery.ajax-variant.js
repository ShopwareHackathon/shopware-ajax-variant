;(function($) {
    $.plugin('swAjaxVariant', {
        defaults: {
            productDetailsSelector: '.product--detail-upper'
        },

        init: function() {
            var me = this;

            $('body').on(me.getEventName('click'), '*[data-ajax-variants="true"]', $.proxy(me.onChange, me));
        },

        requestData: function($form) {
            var me = this,
                location = window.location.href;

            $.ajax({
                url: window.location.href + '?template=ajax',
                data: $form.serialize(),
                method: 'POST',
                success: function(response) {
                    var $response = $($.parseHTML(response)),
                        $productDetails;

                    $response = $($response.get(1));
                    $productDetails = $response.find(me.opts.productDetailsSelector);

                    $(me.opts.productDetailsSelector).html($productDetails.html());
                    StateManager.addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement')

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
        $('body').swAjaxVariant();
    });
})(jQuery);