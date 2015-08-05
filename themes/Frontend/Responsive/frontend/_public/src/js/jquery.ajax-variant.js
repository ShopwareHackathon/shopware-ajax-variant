;(function($) {
    $.plugin('swAjaxVariant', {
        defaults: {
            productDetailsSelector: '.product--detail-upper'
        },

        init: function() {
            var me = this;

            $('body').on(me.getEventName('click'), '*[data-ajax-variants="true"]', $.proxy(me.onChange, me));
            $('body').on(me.getEventName('click'), '.reset--configuration', $.proxy(me.onChange, me));
        },

        requestData: function(values) {
            var me = this,
                location = window.location.href,
                separator = '?';

            if(location.split('?').length > 1) {
                separator = '&';
            }

            $.ajax({
                url: window.location.href + separator + 'template=ajax',
                data: values || '',
                method: 'POST',
                success: function(response) {
                    var $response = $($.parseHTML(response)),
                        $productDetails;

                    $response = $($response.get(1));
                    $productDetails = $response.find(me.opts.productDetailsSelector);

                    $(me.opts.productDetailsSelector).html($productDetails.html());
                    StateManager.addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement');
                    StateManager.addPlugin('*[data-image-slider="true"]', 'swImageSlider', { touchControls: true })
                    $.loadingIndicator.close();

                }
            });
        },

        onChange: function(event) {
            var me = this,
                $target = $(event.target),
                values = $target.parents('form').serialize();

            event.preventDefault();

            me.requestData(values);
            $.loadingIndicator.open({
                closeOnClick: false
            });
        }
    });

    $(function() {
        $('body').swAjaxVariant();
    });
})(jQuery);
