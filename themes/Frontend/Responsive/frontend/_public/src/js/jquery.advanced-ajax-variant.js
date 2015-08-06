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
    $.plugin('swAdvancedAjaxVariant', {

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
            productDetailsSelector: '.product--detail-upper',
            
            productTitleSelector: '.product--title',
            productImageSliderSelector: '.product--image-container',
            productSkuSelector: '.entry--sku .entry--content',
            productAttributeSelector: '.entry-attribute',
            productActionCompareLinkSelector: '.action--link.link--compare',
            productActionWhishlistLinkSelector: '.action--link link--notepad',
            productActionTellAFriendLinkSelector: '.action--link link--tell-a-friend',

            productBuyBoxArticleNumberName: 'input[name=sAdd]',
            productBuyBoxGroupValue: 'input[name=group*]',
            productBuyBoxQuantity: '.buybox--quantity',
        },

        /**
        * Article object for data live binding
        * @object
        */
        sArticle:{},

        /**
        * Binder object
        * @object
        */
        view : null,

        /**
         * Initializes the plugin and sets up the necessary event handler
         */
        init: function() {
            var me = this;

            $(me.opts.productSkuSelector).attr('rv-text','product.ordernumber');
            me.view = rivets.bind( $(me.opts.productDetailsSelector), {product : me.sArticle});

            me.$el
                .on(me.getEventName('click'), '*[data-advanced-ajax-variants="true"]', $.proxy(me.onChange, me))
                .on(me.getEventName('click'), '.reset--configuration', $.proxy(me.onChange, me));

            $(window).on("popstate", $.proxy(me.onPopState, me));

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

            $.loadingIndicator.open({
                closeOnClick: false
            });    

            $.ajax({
                url: location + '?template=json',
                data: values || '',
                method: 'POST',
                success: function(response) {

                    me.view.update({product:response});
                    $.loadingIndicator.close(emptyFn);

                    // StateManager.addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement');
                    // StateManager.addPlugin('*[data-image-slider="true"]', 'swImageSlider', { touchControls: true })
                    

                    if(pushState && me.hasHistorySupport) {
                        orderNumber = $('.entry--sku .entry--content').text();
                        console.log(orderNumber);
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

        }
    });
})(jQuery, window);
