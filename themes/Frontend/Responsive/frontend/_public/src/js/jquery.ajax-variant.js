;(function($, window) {
    var emptyFn = function() {};

    /**
     * Shopware AJAX variant
     *
     * @example
     * HTML:
     * <div data-ajax-variants-container="true"></div>
     *
     * JS:
     * $('*[data-ajax-variants-container="true"]').swAjaxVariant();
     */
    $.plugin('swAjaxVariant', {

        /**
         * Supports the browser the history api
         * @boolean
         */
        hasHistorySupport: Modernizr.history,

        /**
         * Default configuration of the plugin
         * @object
         */
        defaults: {
            productDetailsSelector: '.product--detail-upper'
        },

        /**
         * Initializes the plugin and sets up the necessary event handler
         */
        init: function() {
            var me = this;

            me.$el
                .on(me.getEventName('click'), '*[data-ajax-variants="true"]', $.proxy(me.onChange, me))
                .on(me.getEventName('click'), '.reset--configuration', $.proxy(me.onChange, me));

            $(window).on("popstate", $.proxy(me.onPopState, me));

            // Push the initial state to the history
            /* window.history.pushState({
                type: 'ajaxVariant',
                values: null,
                scrollPos: 0
            }, document.title, window.location.origin + window.location.pathname); */
        },

        /**
         * Requests the HTML structure of the product detail page using AJAX and injects the returned
         * content into the page.
         *
         * @param {String} values
         * @param {Boolean} pushState
         */
        requestData: function(values, pushState) {
            var me = this,
                location = window.location.origin + window.location.pathname;

            $.ajax({
                url: location + '?template=ajax',
                data: values || '',
                method: 'POST',
                success: function(response) {
                    var $response = $($.parseHTML(response)),
                        $productDetails,
                        orderNumber;

                    $response = $($response.get(1));
                    $productDetails = $response.find(me.opts.productDetailsSelector);

                    $(me.opts.productDetailsSelector).html($productDetails.html());
                    StateManager.addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement');
                    StateManager.addPlugin('*[data-image-slider="true"]', 'swImageSlider', { touchControls: true })
                    $.loadingIndicator.close(emptyFn);

                    if(pushState && me.hasHistorySupport) {
                        orderNumber = $('.entry--sku .entry--content').text();
                        window.history.pushState({
                            type: 'ajaxVariant',
                            values: values,
                            scrollPos: $(window).scrollTop()
                        }, document.title, location + '?number=' + orderNumber);
                    }
                }
            });
        },

        /**
         * Event handler method which will be fired when the user click the back button
         * in it's browser.
         *
         * @param {EventObject} event
         * @returns {boolean}
         */
        onPopState: function(event) {
            var me = this,
                state = event.originalEvent.state;

            if(!state || !state.hasOwnProperty('type') || state.type !== 'ajaxVariant') {
                me.requestData('', false);
                return false;
            }

            if(!state.values.length) {
                state = '';
            }

            // Prevents the scrolling to top in webkit based browsers
            if(state && state.scrollPos) {
                window.setTimeout(function() {
                    $(window).scrollTop(state.scrollPos);
                }, 10);
            }

            me.requestData(state.values, false);
        },

        /**
         * Event handler which will fired when the user selects a variant in the storefront.
         * @param {EventObject} event
         */
        onChange: function(event) {
            var me = this,
                $target = $(event.target),
                values = $target.parents('form').serialize();

            event.preventDefault();

            me.requestData(values, true);
            $.loadingIndicator.open({
                closeOnClick: false
            });
        }
    });
})(jQuery, window);