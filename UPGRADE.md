# Shopware Upgrade Information
In this document you will find a changelog of the important changes related to the code base of Shopware.

## 5.1.0
* Removed unused classes `Shopware_Components_Test_MailListener` and `Shopware_Components_Test_TicketListener`
* Removed unused snippets in `snippets/backend/article/view/main.ini`:
    * `detail/sidebar/options/article_options`
    * `detail/sidebar/options/article_preview`
    * `detail/sidebar/options/columns/name`
    * `detail/sidebar/options/delete`
    * `detail/sidebar/options/drop_zone`
    * `detail/sidebar/options/duplicate`
    * `detail/sidebar/options/image_field_set`
    * `detail/sidebar/options/rapid_categorization`
    * `detail/sidebar/options/select_category`
    * `detail/sidebar/options/selected_categories`
    * `detail/sidebar/options/shop`
    * `detail/sidebar/options/title`
    * `detail/sidebar/options/tooltip`
    * `detail/sidebar/options/translate`
    * `detail/sidebar/options/upload_button`
* Removed `Shopware.apps.Article.view.detail.sidebar.Link` backend component and created two new components instead:
    * `Shopware.apps.Article.view.resources.Downloads`
    * `Shopware.apps.Article.view.resources.Links`
* Removed unused file: `themes/Backend/ExtJs/backend/article/view/detail/sidebar/link.js`
* Removed `article-sidebar-link` object in `Shopware.apps.Article.view.detail.Sidebar`
* Changed views in `Shopware.apps.Article`:
    * Removed `detail.sidebar.Link`
    * Added `resources.Links`
    * Added `resources.Downloads`
* Changed events in `Shopware.apps.Article.controller.Detail`:
    * Removed `article-detail-window article-sidebar-link` event alias
    * Added `article-detail-window article-resources-links` event alias
    * Added `article-detail-window article-resources-downloads` event alias
* Changed grid reconfigures in `Shopware.apps.Article.controller.Detail`:
    * Removed `mainWindow.down('article-sidebar article-sidebar-link grid[name=link-listing]').reconfigure(article.getLink());`
    * Removed ` mainWindow.down('article-sidebar article-sidebar-link grid[name=download-listing]').reconfigure(article.getDownload());`
    * Added `mainWindow.down('article-resources-links grid[name=link-listing]').reconfigure(article.getLink());`
    * Added `mainWindow.down('article-resources-links grid[name=link-listing]').reconfigure(article.getLink());`
* Removed unused snippets in `snippets/backend/article/view/main.ini`:
    * `detail/sidebar/links/download/button`
    * `detail/sidebar/links/download/field_set`
    * `detail/sidebar/links/download/grid/delete`
    * `detail/sidebar/links/download/grid/edit`
    * `detail/sidebar/links/download/grid/title`
    * `detail/sidebar/links/download/link`
    * `detail/sidebar/links/download/name`
    * `detail/sidebar/links/download/notice`
    * `detail/sidebar/links/link/button`
    * `detail/sidebar/links/link/field_set`
    * `detail/sidebar/links/link/grid/delete`
    * `detail/sidebar/links/link/grid/edit`
    * `detail/sidebar/links/link/grid/external`
    * `detail/sidebar/links/link/grid/title`
    * `detail/sidebar/links/link/link`
    * `detail/sidebar/links/link/name`
    * `detail/sidebar/links/link/notice`
    * `detail/sidebar/links/title`
* Removed `article-detail-window article-sidebar-option` event listeners in `Shopware.apps.Article.controller.Media`
* Removed `onSidebarMediaUpload` method in `Shopware.apps.Article.controller.Media`
* Removed `addCategory: me.onAddCategory` event listener in `Shopware.apps.Article.controller.Detail`
* Removed `onAddCategory` method in `Shopware.apps.Article.controller.Detail`
* Changed event listener alias from `article-detail-window article-sidebar-option` to `article-detail-window article-actions-toolbar` in `Shopware.apps.Article.controller.Detail`
* Removed `article-sidebar-option` object in `Shopware.apps.Article.view.detail.Sidebar`
* Removed `detail.sidebar.Option` from `views` array in `Shopware.apps.Article`
* Removed `Shopware.apps.Article.view.detail.sidebar.Option` backend component
* Removed `onTranslate` method from `Shopware.apps.Article.controller.Detail`
* Removed unused snippets in `snippets/backend/article/view/main.ini`:
    * `detail/sidebar/accessory/article_number`
    * `detail/sidebar/accessory/article_search`
    * `detail/sidebar/accessory/assignment_box`
    * `detail/sidebar/accessory/assignment_field`
    * `detail/sidebar/accessory/bundle_box`
    * `detail/sidebar/accessory/bundle_field`
    * `detail/sidebar/accessory/delete`
    * `detail/sidebar/accessory/edit`
    * `detail/sidebar/accessory/name`
    * `detail/sidebar/accessory/number`
* Removed unprefixed versions of jQuery plugins that were deprecated in the 5.0.2 Release.
* Changes the jQuery plugin events to new prefixed values in these plugins:
    * `jquery.lightbox.js`
    * `jquery.loading-indicator.js`
    * `jquery.modal.js`
* Added prefixes to the jQuery event names inside the advancedMenu plugin.
* Changes the jQuery plugin events to new prefixed values in these plugins:
    * `jquery.lightbox.js`
    * `jquery.loading-indicator.js`
    * `jquery.modal.js`
* Move directory `logs/` to `var/log/` and `cache/` to `var/cache`
* The property selection for an product is now a dedicated tab.
    * The `beforeedit` event will now be triggered on the `article-detail-window grid[name=property-grid]`
    * The property selection was built from scratch to provide a better user experience but the method names haven't changed
    * The store `Shopware.apps.Article.store.PropertyValue` and the associated model `Shopware.apps.Article.model.PropertyValue` are not available anymore
    * Property values are now creates on demand with an AJAX request
    * The selection of property values is now on select to allow for a faster usage of the component
* Added library [beberlei/assert](https://github.com/beberlei/assert) for low-level validation.
* Changed returning array keys to `ordernumber` in `\sArticles::sGetArticlesByCategory` which introduces an BC break for plugins hooking into the following methods:
    * `\Shopware_Controllers_Frontend_Listing::manufacturerAction`
    * `\Shopware_Controllers_Frontend_Listing::indexAction`
    * `\Shopware_Controllers_Widgets_Listing::ajaxListingAction`
    * `\sArticles::sGetArticlesByCategory`

## 5.0.3
* The variant API resource now supports the getList method. It will return all variants with prices and attributes. You can optionally calculate the gross price by using the "considerTaxInput" parameter.
* The getList method of the articles API resource now returns additionally the attributes of an article.
* Change event argument property `name` to `vouchername` in `Shopware_Modules_Basket_AddVoucher_FilterSql` in `sBasket.php` due to reserved word.
* Deprecated pre-installed import / export module in favor of the new import / export plugin, which is for free now

## 5.0.2
* Method `createMenuItem` in plugin bootstrap now results in an duplicate error when passing an existing label with the same parent
* Removed `Shopware_Controllers_Backend_Order::getStatisticAction` and statistics in the order backend module.
* It's no longer possible to have spaces in article numbers. Existing articles with spaces in their numbers will still work, but the article cannot be changed without fixing the number.
* Change structure of `build-database` target in `build/build.xml` to allow a more fine grained build process.
* Introduce new configuration option `snippet.showSnippetPlaceholder`. Empty snippets are now hidden by default. If `showSnippetPlaceholder` is `true` snippet placeholders will be shown.
* Removed table `s_emarketing_vouchers_cashed`.
* 'Shopware.form.field.ArticleSearch' search using the "variants" option is deprecated. Use "configurator" to load configurator articles or "searchVariants" to load article variants with the correct additional text and ordernumber.
* Added column `added` to the table `s_campaigns_mailaddresses` which holds the date of the newsletter registration. It will be displayed in the newsletter administration under "Recipients" as the "Double-Opt-In date" column.
* Removed the expert layout and the corresponding mail form inside the batch processing window of the order backend module.
* Added support for attributes in backend module site
* Added a lot more jQuery plugin events.
* Marked some jQuery plugin events as deprecated which will be removed in the version 5.1. They were replaced with more conventional names:
    * plugin/collapseCart/afterRemoveArticle    => plugin/swCollapseCart/onRemoveArticleFinished
    * plugin/collapseCart/afterLoadCart         => plugin/swCollapseCart/onLoadCartFinished
    * plugin/collapseCart/onMouseLeave          => plugin/swCollapseCart/onMouseLeave
    * plugin/collapseCart/onCloseButton         => plugin/swCollapseCart/onCloseButton
    * plugin/collapseCart/onRemoveArticle       => plugin/swCollapseCart/onRemoveArticle
    * plugin/collapseCart/onMenuOpen            => plugin/swCollapseCart/onMenuOpen
    * plugin/collapseCart/onLoadCart            => plugin/swCollapseCart/onLoadCart
    * plugin/collapseCart/onCloseMenu           => plugin/swCollapseCart/onCloseMenu
    * plugin/collapsePanel/onOpen               => plugin/swCollapsePanel/onOpen
    * plugin/collapsePanel/onClose              => plugin/swCollapsePanel/onClose
    * plugin/filterComponent/onChange           => plugin/swFilterComponent/onChange
    * plugin/emotionLoader/loadEmotion          => plugin/swEmotionLoader/onLoadEmotion
    * plugin/emotionLoader/initEmotion          => plugin/swEmotionLoader/onInitEmotion
    * plugin/emotionLoader/showEmotion          => plugin/swEmotionLoader/onShowEmotion
    * plugin/emotionLoader/hideEmotion          => plugin/swEmotionLoader/onHideEmotion
    * plugin/emotionLoader/showFallbackContent  => plugin/swEmotionLoader/onShowFallbackContent
    * plugin/emotionLoader/hideFallbackContent  => plugin/swEmotionLoader/onHideFallbackContent
    * plugin/emotion/initElements               => plugin/swEmotion/onInitElements
    * plugin/emotion/initFullscreen             => plugin/swEmotion/onInitFullscreen
    * plugin/emotion/removeFullscreen           => plugin/swEmotion/onRemoveFullscreen
    * plugin/emotion/initMasonryGrid            => plugin/swEmotion/onInitMasonryGrid
    * plugin/emotion/initScaleGrid              => plugin/swEmotion/onInitScaleGrid
    * plugin/emotion/registerEvents             => plugin/swEmotion/onRegisterEvents
    * plugin/imageSlider/updateTransform        => plugin/swImageSlider/onUpdateTransform
    * plugin/imageSlider/slide                  => plugin/swImageSlider/onSlide
    * plugin/imageSlider/slideNext              => plugin/swImageSlider/onSlideNext
    * plugin/imageSlider/slidePrev              => plugin/swImageSlider/onSlidePrev
    * plugin/menuScroller/updateResize          => plugin/swMenuScroller/onUpdateResize
    * plugin/offcanvasMenu/beforeOpenMenu       => plugin/swOffcanvasMenu/onBeforeOpenMenu
    * plugin/offCanvasMenu/openMenu             => plugin/swOffcanvasMenu/onOpenMenu
    * plugin/offCanvasMenu/closeMenu            => plugin/swOffcanvasMenu/onCloseMenu
    * plugin/-PLUGIN_NAME-/init                 => plugin/-PLUGIN_NAME-/onInit (PluginBase)
    * plugin/-PLUGIN_NAME-/destroy              => plugin/-PLUGIN_NAME-/onDestroy (PluginBase)
    * plugin/-PLUGIN_NAME-/on                   => plugin/-PLUGIN_NAME-/onRegisterEvent (PluginBase)
    * plugin/-PLUGIN_NAME-/off                  => plugin/-PLUGIN_NAME-/onRemoveEvent (PluginBase)
    * plugin/productSlider/trackItems           => plugin/productSlider/onTrackItems
    * plugin/productSlider/trackArrows          => plugin/productSlider/onTrackArrows
    * plugin/productSlider/itemsLoaded          => plugin/productSlider/onLoadItemsSuccess
    * plugin/productSlider/loadItems            => plugin/productSlider/onLoadItems
    * plugin/productSlider/createContainer      => plugin/productSlider/onCreateContainer
    * plugin/productSlider/createArrows         => plugin/productSlider/onCreateArrows
    * plugin/productSlider/slideNext            => plugin/productSlider/onSlideNext
    * plugin/productSlider/slidePrev            => plugin/productSlider/onSlidePrev
    * plugin/productSlider/slideToElement       => plugin/productSlider/onSlideToElement
    * plugin/productSlider/slide                => plugin/productSlider/onSlide
    * plugin/productSlider/autoSlide            => plugin/productSlider/onAutoSlide
    * plugin/productSlider/stopAutoSlide        => plugin/productSlider/onStopAutoSlide
    * plugin/productSlider/scrollNext           => plugin/productSlider/onScrollNext
    * plugin/productSlider/scrollPrev           => plugin/productSlider/onScrollPrev
    * plugin/productSlider/autoScroll           => plugin/productSlider/onAutoScroll
    * plugin/productSlider/stopAutoScroll       => plugin/productSlider/onStopAutoScroll
    * plugin/productSlider/buffer               => plugin/productSlider/onBuffer
    * plugin/rangeSlider/changeMin              => plugin/rangeSlider/onSetMin
    * plugin/rangeSlider/changeMax              => plugin/rangeSlider/onSetMax
    * plugin/rangeSlider/reset                  => plugin/rangeSlider/onReset
    * plugin/rangeSlider/onChange               => plugin/rangeSlider/onEndDrag
    * plugin/search/onKeyDown                   => plugin/swSearch/onKeyDown
    * plugin/search/onKeyUp                     => plugin/swSearch/onKeyUp
    * plugin/search/onSearchRequest             => plugin/swSearch/onSearchRequest
    * plugin/search/onShowResult                => plugin/swSearch/onShowResult
    * plugin/search/onCloseResult               => plugin/swSearch/onCloseResult
    * plugin/search/onKeyboardNavigation        => plugin/swSearch/onKeyboardNavigation
* Added new validation rules for snippets
    * Use `bin/console sw:snippets:validate <your-plugin-snippets-path>` to check the validity of your snippets.
    * Defining a snippet value in multiple lines is deprecated.
    * All snippet values that don't pass the validation should be refactored.
* The method `getSeoArticleQuery` in `sRewriteTable.php` was changed to select the translations for the article attributes.

## 5.0.1
* Create `sw:theme:dump:configuration` command to generate watch files for theme compiling
* Rename \Shopware\Components\Theme\Compiler::preCompile to \Shopware\Components\Theme\Compiler::compile
* Change the following \Shopware\Components\Theme\Compiler functions visibility to private:
    * compilePluginCss
    * clearThemeCache
    * buildConfig
    * compilePluginLess
    * compilePluginCss
    * compressPluginJavascript
    * clearDirectory
    * createThemeJavascriptFile
* Changed \Shopware\Components\Theme\PathResolver functions: getJsFilePaths and getCssFilePaths
    * Renamed to singular naming, getJsFilePath and getCssFilePath
    * Returning directly the `default` file path
* Add themes/Gruntfile.js for local compiling.
* \Shopware\Bundle\SearchBundle\Condition\HasPriceCondition marked as deprecated.
* Add \Shopware\Bundle\SearchBundle\StoreFrontCriteriaFactory::createBaseCriteria function to create a default criteria with all validation conditions.
* Moved the mixins `primary-gradient`, `secondary-gradient` and `white-gradient` back to the Responsive theme
    * We moved the variable declaration of `remScaleFactor` to the Bare theme.
    * If you have created a custom theme based on the Bare theme and used the mentioned mixins, you need to modify the used variables in the mixin to get it working.
    * The `icon-element` mixin can now be found in the Responsive theme as well.

## 5.0.0
* \sArticles::sGetProductByOrdernumber result is now equals with the \sArticles::sGetPromotionById result.
* Add console command `sw:refresh:search:index` to manually regenerate the search index. The optional parameter `--clear-table` can be used to clear the index tables before regenerating the data again.
* Remove `price` field override in AjaxSearch controller.
* Include `frontend/listing/product-box/product-price.tpl` template in ajax search to display product prices.

## 5.0.0 RC3
* \Shopware\Bundle\SearchBundleDBAL\ConditionHandler\HasPriceConditionHandler now joins the prices as a 1:1 association for a performance improvement.
* sCategories::sGetCategoryContent function returns no more the category articleCount. Variable is unused.
* sCategories::sGetCategoryIdByArticleId function use now the s_articles_categories table.
* Add __redirect parameter in frontend language switcher. Each language switcher requires now an additionally post parameter to redirect to the new shop `<input type="hidden" name="__redirect" value="1">`

## 5.0.0 RC2
* SEO URL generation variable "statistic" has been translated and corrected to "static"
* Theme config elements can now define, over the attributes array, if they are less compatible. Example: `attributes => ['lessCompatible' => false]`, default is set to true.
* Implement plugin bootstrap helper functions: addHttpCacheRoute and removeHttpCacheRoute, to add and remove http cache routes.
* Refactor getRandomArticle function of sArticles. Shopware_Modules_Articles_GetPromotionById_FilterSqlRandom event removed.
* `Mark VAT ID number as required` moved to `Login / Registration` in `Basic Settings`. All other VAT ID validation options were removed. If you need VAT ID validation functionalities, please use the VAT ID Validation plugin available on the store.
    * `sAdmin::sValidateVat()` removed
* Removed supplier description on article detail page to prevent duplicated content for google remote crawling
* Fix duplicate name parameter for backend extjs stores inside the config module. Repository class name sent before as `name` parameter. Now the stores uses `_repositoryClass` as parameter.
* Removed shopware_storefront.product_gateway (\Shopware\Bundle\StoreFrontBundle\Gateway\ProductGatewayInterface).
* \Shopware\Bundle\StoreFrontBundle\Service\Core\ProductService uses now the ListProductService to load the product data and converts the product structs by loaded list products.
* Removed `\Shopware\Bundle\StoreFrontBundle\Gateway\DBAL\Hydrator\ProductHydrator::hydrateProduct` function.
* Removed \Shopware\Bundle\StoreFrontBundle\Struct\ListProduct::STATE_TRANSLATED constant.
* Removed Service `guzzle_http_client`, use `guzzle_http_client_factory` instead.
* Added support for Bundle of CA Root Certificates. See: http://curl.haxx.se/docs/caextract.html.
* Removed `setField` and `setMode` function in \Shopware\Bundle\SearchBundle\Facet\ProductAttributeFacet.
* Removed unnecessary theme variable prefix for less compiler. Each theme config variable prefixed with "theme" . ucfirst($key) which generates @themeBrandPrimary. This variables were remapped inside responsive theme.

## 5.0.0 RC1
* New orders will no longer set `s_order.transactionID` automatically from POST data. 3rd party plugins can still use this value as before.
* Fix translation API, rename all `localeId` references to `shopId`. Create / update / delete with `localeId` are still supported as legacy.
* `\Shopware\Models\Translation\Translation` now correctly relates to `Shop` model instead of `Locale`.
* widgets/recommendations - boughtAction & viewedAction calls no more the sGetPromotionById function.
* Added emotion positioning number for ordering emotions by position number if there are more emotions on one page
* Replaced `closeOverlay` with `openOverlay` option in the loading indicator to improve the simplicity.
* Removed overlay options in the modal box and loading indicator jQuery plugin.
* Overlay jQuery plugin now only provides the closeOnClick, onClick and onClose options. To style the overlay, use the corresponding less file.
* Removed unused methods:
    * `Shopware_Controllers_Backend_Config::getTemplateListAction`
    * `Shopware_Controllers_Backend_Config::refreshTemplateList`
    * `Shopware_Controllers_Backend_Config::saveTemplateAction`
* Removed unused files:
    * `themes/Backend/ExtJs/backend/config/view/form/template.js`
    * `themes/Backend/ExtJs/backend/config/view/template/detail.js`
    * `themes/Backend/ExtJs/backend/config/view/template/preview.js`
    * `themes/Backend/ExtJs/backend/config/view/template/view.js`
    * `themes/Backend/ExtJs/backend/config/store/form/template.js`
    * `themes/Backend/ExtJs/backend/config/store/model/template.js`
    * `themes/Backend/ExtJs/backend/config/store/controller/template.js`
* Removed classes:
    * `ConfigIframe.php` backend controller
    * `Viewport.php` frontend controller
* Removed template files:
    * `backend\index\iframe.tpl`
* Removed commands `sw:store:download:update` and `sw:store:licenseplugin`.
* Added `sw:store:download` command to download install and updates of plugins.
* Added `sw:store:list:integrated` command to list all shopware 5 integrated plugins.
* Shopware.model.Container provides now the raw record value as id parameter to the searchAssociationAction to request the whole record on form load.
* Added way to early exit the dispatch.
    * After `Enlight_Controller_Front_RouteShutdown` a response containing a redirect will not enter the dispatch loop.
* `HttpCache` plugin is no longer handled by the Plugin manager. Use the `Performance` window to enable/configure the Http cache instead
* \Shopware\Models\Emotion\Repository::getListQuery function replaced by getListingQuery.

## 5.0.0 Beta 2
* Rename shopware_searchdbal.product_number_search to shopware_search.product_number_search. Use shopware_search.product_number_search service for number searchs.
* Remove aliases from bundle services. Example: list_product_service is now directly set to the old list_product_service_core
* Extend ProductAttributeFacet with different FacetResult properties, to allow full FacetResult configuration over the facet.
* Out of stock articles and variants are now not included in the product feed if the `Do not show on sale products that are out of stock ` option is enabled
* IonCube Loader version requirement bumped to 4.6.0 or higher
* Refactored routing component
    * Removed classes:
        * `Enlight_Controller_Router_Default`
        * `Enlight_Controller_Router_EventArgs`
    * Removed events:
        * `Enlight_Controller_Router_FilterAssembleParams`
        * `Enlight_Controller_Router_FilterUrl`
        * `Enlight_Controller_Router_Assemble`
    * Removed methods:
        * `Shopware_Plugins_Core_Router_Bootstrap::onFilterAssemble`
        * `Shopware_Plugins_Core_Router_Bootstrap::onFilterUrl`
        * `Shopware_Plugins_Core_Router_Bootstrap::onAssemble`
        * `Shopware_Plugins_Frontend_RouterRewrite_Bootstrap::onAfterSendResponse`
        * `Shopware_Plugins_Frontend_RouterRewrite_Bootstrap::onRoute`
        * `Shopware_Plugins_Frontend_RouterRewrite_Bootstrap::onAssemble`
        * `Shopware_Plugins_Frontend_RouterRewrite_Bootstrap::sRewriteQuery`
* Shopware.grid.Panel executes now a local store search if no read url configured in the assigned store.
* Shopware.grid.Panel has now the RowEditing plugin inside the local variable rowEditor.

## 5.0.0 Beta 1
* Deprecated classes:
    * `Zend_Rest`
    * `Zend_Http`
    * `Enlight_Components_Adodb` (also accessed as `Shopware()->Adodb()` or `$system->sDB_CONNECTION`) will be removed in SW 5.1
    * `Shopware_Components_Search_Adapter_Default` is now deprecated, use `\Shopware\Bundle\SearchBundle\ProductNumberSearch`
    * `Zend_Validate_EmailAddress`
* Deprecated methods/variables:
    * `Shopware_Controllers_Frontend_Account::ajaxLoginAction()` is deprecated
    * `Shopware_Controllers_Frontend_Account::loginAction()` usage to load a login page is deprecated. Use `Shopware_Controllers_Frontend_Register::indexAction()` instead for both registration and login
    * `sSystem::sSubShop`
    * `sExport::sGetMultishop()`
    * `sExport::sLanguage`
    * `sExport::sMultishop`
* Deprecated configuration variables from `Basic settings`:
    * `basketHeaderColor`
    * `basketHeaderFontColor`
    * `basketTableColor`
    * `detailModal`
    * `paymentEditingInCheckoutPage`
    * `showbundlemainarticle`
* Deprecated tables/columns:
    * `s_core_multilanguage`. Table will be removed in SW 5.1. Previously unused fields `mainID`, `flagstorefront`, `flagbackend`, `separate_numbers`, `scoped_registration` and `navigation` are no longer loaded from the database
* Removed classes:
    * `Enlight_Components_Currency`
    * `Enlight_Components_Form` and subclasses
    * `Enlight_Components_Locale`
    * `Enlight_Components_Menu` and subclasses
    * `Enlight_Components_Site` and subclasses
    * `Enlight_Components_Test_Constraint_ArrayCount`
    * `Enlight_Components_Test_Database_TestCase`
    * `Enlight_Components_Test_Selenium_TestCase`
    * `Enlight_Components_Test_TestSuite`
    * `Enlight_Extensions_Benchmark_Bootstrap`
    * `Enlight_Extensions_Debug_Bootstrap`
    * `Enlight_Extensions_ErrorHandler_Bootstrap`
    * `Enlight_Extensions_Log_Bootstrap`
    * `Enlight_Extensions_Router_Bootstrap`
    * `Enlight_Extensions_RouterSymfony_Bootstrap`
    * `Enlight_Extensions_Site_Bootstrap`
    * `Enlight_Components_Log` (also accessed as `Shopware->Log()`)
* Removed methods/variables:
    * `sArticles::sGetAllArticlesInCategory()`
    * `sSystem::sSubShops`
    * `sSystem::sLanguageData`. Please use `Shopware()->Shop()` instead
    * `sSystem::sLanguage`. Please use `Shopware()->Shop()->getId()` instead
    * `Shopware_Plugins_Core_ControllerBase_Bootstrap::getLanguages()`
    * `Shopware_Plugins_Core_ControllerBase_Bootstrap::getCurrencies()`
    * `sExport::sGetLanguage()`
    * `Shopware_Controllers_Backend_Article::getConfiguratorPriceSurchargeRepository()`
    * `Shopware_Controllers_Backend_Article::saveConfiguratorPriceSurchargeAction()`
    * `Shopware_Controllers_Backend_Article::deleteConfiguratorPriceSurchargeAction()`
    * `Shopware_Controllers_Backend_Article::getArticlePriceSurcharges()`
    * `Shopware_Controllers_Backend_Article::getSurchargeByOptionId()`
    * `sArticles::sGetArticlesAverangeVote`
    * `sArticles::getCategoryFilters`
    * `sArticles::getFilterSortMode`
    * `sArticles::addFilterTranslation`
    * `sArticles::sGetArticleConfigTranslation`
    * `sArticles::sGetArticlesByName`
    * `sArticles::sGetConfiguratorImage`
    * `sArticles::sCheckIfConfig`
    * `sArticles::getCheapestVariant`
    * `sArticles::calculateCheapestBasePriceData`
    * `sArticles::displayFiltersOnArticleDetailPage`
    * `sArticles::getFilterQuery`
    * `sArticles::addArticleCountSelect`
    * `sArticles::addActiveFilterCondition`
    * `sArticles::displayFilterArticleCount`
    * `sArticles::sGetLastArticles`
    * `sArticles::sGetCategoryProperties`
    * `sArticles::sGetArticlesVotes`
    * `Enlight_Controller_Front::returnResponse()`
    * `Shopware_Plugins_Core_Cron_Bootstrap::onAfterSendResponse()`
    * `\Shopware\Models\User\User::setAdmin()`
    * `\Shopware\Models\User\User::getAdmin()`
    * `\Shopware\Models\User\User::setSalted()`
    * `\Shopware\Models\User\User::getSalted()`
    * `\Shopware\Models\Banner\Banner::setLiveShoppingId()`
    * `\Shopware\Models\Banner\Banner::getLiveShoppingId()`
    * `sArticles::getPromotionNumberByMode('premium')`
    * `sArticles::sGetPromotions()`
    * `sMarketing::sCampaignsGetDetail()`
    * `sMarketing::sCampaignsGetList()`
    * `\Shopware\Models\Plugin\Plugin::isDummy()`
    * `\Shopware\Models\Plugin\Plugin::disableDummy()`
    * Removed `sArticles::getPromotionNumberByMode('image')` and `sArticles::getPromotionNumberByMode('gfx')` support
* Removed events:
    * `Shopware_Modules_Articles_GetFilterQuery`
    * `Shopware_Modules_Article_GetFilterSortMode`
    * `Shopware_Modules_Article_GetCategoryFilters`
    * `Enlight_Controller_Front_SendResponse`
    * `Enlight_Controller_Front_AfterSendResponse`
    * `Shopware_Modules_Articles_sGetProductByOrdernumber_FilterSql`
    * `Shopware_Modules_Articles_GetPromotions_FilterSQL`
* Removed Smarty vars:
    * `$sArticle.sNavigation` for product detail page
* Removed configuration variables from `Basic settings`:
    * `useDefaultControllerAlways`
    * `articlelimit`
    * `configcustomfields`
    * `configmaxcombinations`
    * `displayFilterArticleCount`
    * `ignoreshippingfreeforsurcharges`
    * `liveinstock`
    * `mailer_encoding`
    * `redirectDownload`
    * `redirectnotfound`
    * `seorelcanonical`
    * `seoremovewhitespaces`
    * `taxNumber`
    * `deactivateNoInstock`
* Removed database table/columns:
    * `s_core_rewrite`
    * `s_cms_groups`
    * `s_core_auth.admin`
    * `s_core_auth.salted`
    * `s_order_basket.liveshoppingID`
    * `s_order_basket.liveshoppingID`
    * `s_order_basket.liveshoppingID`
    * `s_emarketing_banners.liveshoppingID`
    * `s_core_sessions.expireref`
    * `s_core_sessions.created`
    * `s_core_sessions_backend.created`
    * `s_emarketing_promotions*`
    * `s_core_plugins.capability_dummy`
* The new Shopware core selects all required data for `sGetArticleById`, `sGetPromotionById` and `sGetArticlesByCategory`. The following events and internal functions are no longer used in these functions:
    * `sGetPromotionById` events
        * `Shopware_Modules_Articles_GetPromotionById_FilterSql`
    * `sGetPromotionById` functions
        * `sGetTranslation`
        * `sGetArticleProperties`
        * `sGetCheapestPrice`
        * `sCalculatingPrice`
        * `calculateCheapestBasePriceData`
        * `getArticleListingCover`
    * `sGetAritcleById` events
        * `Shopware_Modules_Articles_GetArticleById_FilterSQL`
    * `sGetAritcleById` functions
        * `sGetTranslation`
        * `sGetPricegroupDiscount`
        * `sGetPromotionById` (for similar and related products)
        * `sCheckIfEsd`
        * `sGetPricegroupDiscount`
        * `sCalculatingPrice`
        * `sGetCheapestPrice`
        * `sGetArticleConfig`
        * `calculateReferencePrice`
        * `sGetArticlePictures`
        * `sGetArticlesVotes`
        * `sGetArticlesAverangeVote`
        * `sGetArticleProperties`
    * `sGetArticlesByCategory` events
        * `Shopware_Modules_Articles_sGetArticlesByCategory_FilterSql`
        * `Shopware_Modules_Articles_sGetArticlesByCategory_FilterLoopStart`
        * `Shopware_Modules_Articles_sGetArticlesByCategory_FilterLoopEnd`
    * `sGetArticlesByCategory` functions
        * `sGetSupplierById`
        * `sGetCheapestPrice`
        * `sCalculatingPrice`
        * `calculateCheapestBasePriceData`
* Removed plugin `Shopware_Plugins_Frontend_RouterOld_Bootstrap`
* Moved `engine/core/class/*` to `engine/Shopware/Core/*`
* Merged `_default` template into the `_emotion` template
* Removed the template directory `_default` and all its dependencies
* Added the ability to show campaign banners in blog categories
* Refactored the template structure of the compare functionality. The plugin now uses based on a widget.
    * Added new block `frontend_listing_box_article_actions_compare` in the `listing/box_article.tpl`
* Removed support for flash banners. The associated template block `frontend_listing_swf_banner` is marked as deprecated
* Removed the template files for the feed functionality, which was marked as deprecated in SW 3.5
* Add new optional address fields to the register account and checkout process
* Added global messages template component to display e.g. error or success messages
* Added global css classes for different device viewports
* The registration and checkout workflows have been redesigned for the new template
* New jQuery plugin helper which provides all the basic operations every jQuery plugin needs to do
* Added several javascript libraries that enhance the supported features of the IE 8 and above
* Added `controller_action` and `controller_name` smarty functions that return the correspondent variable values
* The sitemap.xml uses now a smarty template
    * Added `Turnover by device type` in the backend statistics module
    * Added device type details to `Impressions` and `Visitors` in the backend statistics module
* Added `secureUninstall` method and capability for plugins. When 'secureUninstall'  capability is set, the user will be asked to select one of the uninstall methods:
    * (new) `Bootstrap::secureUninstall()` should be remove only non-user data
    * (old) `Bootstrap::uninstall()` current logic, should remove plugin and user data
* The `ArticleList` was merged with the former `MultiEdit` plugin. Plugins hooking the `ArticleList` Controller or extending the `ArticleList` backend module should be reviewed
* When using `selection` configurator type, shipping estimations will only be displayed when the user selects a value for all groups
* It's no longer possible to disable variant support for article that still have variants
* Added a new Theme Manager 2.0 with the possibility to create custom themes from the backend
    * Themes now support specific snippets that are used exclusively in the theme to which they belong
    * Shop configuration no longer contains the template selection.
* The snippet module in the backend now supports editing multiple translations for a single snippet at once
* Forms: elements of type `text2` now support `;` as a separator between labels for the first and second field:
    * Responsive template: labels are used separately as `placeholder` attribute for each `input` element
    * legacy templates: `;` is replaced with a `/` and used in a single `label` element (old behaviour)
* `street number` fields were removed from interfaces and database
    * Existing values were merged into the `street` field
    * `street` fields were enlarged to 255 chars to accommodate this.
    * The API still accepts `street number` values on write operations. The values are internally merged into the `street` field. This is legacy support, and will be removed in the future.
    * Read operations on the API no longer return a `street number` field.
* The configuration for the thumbnail size of the product images in the "last seen products" module no longer affects the responsive template. The size now changes by screen size.
* Changed behavior of the `selection` configurator. Configurator options which have none available product variant disabled now in the select-tag. The new snippet `DetailConfigValueNotAvailable` can be used to append additional text after the value name.
* Variant's `additional text` field is now automatically generated using the configurator group options. This can be optionally disabled.
* The `sBasket::sGetNotes` function has been refactored with the new Shopware service classes and no longer calls the `sGetPromotionById` function.
* The article slider now supports sorting by price (asc and desc) and category filtering
    * `Shopware_Controllers_Widgets_Emotion::emotionTopSellerAction` and `Shopware_Controllers_Widgets_Emotion::emotionNewcomerAction` are now deprecated and should be replaced by `Shopware_Controllers_Widgets_Emotion::emotionArticleSliderAction`
* Removed `table` and `table_factory` from container.
* The old table configurator was removed and replaced by the new image configurator in the emotion and responsive template.
* Template inheritance using `{extends file="[default]backend/..."}` is no longer supported and should be replaced by `{extends file="parent:backend/..."}`
* Added [Guzzle](https://github.com/guzzle/guzzle).
    * Added HTTP client `Shopware\Components\HttpClient\HttpClientInterface`.
    * Can be fetched from the container using the key `http_client`.
    * Deprecated Zend Framework components `Zend_Rest` and `Zend_Http` will be removed in the next minor release.
* Increased minimum required PHP version to PHP >= 5.4.0.
* Increased minimum required MySQL version to MySQl >= 5.5.0.
* When duplicating articles in the backend, attributes and translations will also be copied
* When applying main data to variants, translations will also be overwritten, if selected
* It is now possible to rename variant configurator options
* It is now possible to add translations to configurator templates, which will then be used when generating variants
* Removed legacy `excuteParent` method alias from generated hook proxy files
* Restructured cache directories. The whole `/cache` directory should be writable now
* Added two new settings to handle 404 responses:
    * `PageNotFoundDestination` extends the previous behaviour by adding support for Shopping worlds pages
    * `PageNotFoundCode` added to configure the HTTP error code when requesting non-existent pages
* Removed `Trusted Shops` from the basic settings. Functionality can now be found in `Trusted Shops Excellence` plugin
* Added `sArticles::getProductNavigation`, product navigation is rendered asynchronous via ajax call to `\Shopware_Controllers_Widgets_Listing::productNavigationAction`
* Add `isFamilyFriendly` core setting to enable or disable the correspondent meta tag.
* Add new SEO fields to the forms module.
* Add new SEO templates in the core settings for the form and the site data.
* Added `Theme cache warm up` modal window and functionality:
    * On cache clear
    * On performance settings
    * On theme change
    * On theme settings change
    * On plugin install, by adding `theme` to the optional caches array returned in `install()`
* Added `http cache warmer` modal window in the performance module and console command `sw:warm:http:cache`
* Deprecate Legacy API `Shopware->Api()`, will be removed in SW 5.1
* Removed unused `/backend/document` templates and several unused `Shopware_Controllers_Backend_Document` actions, methods and variables
* Performance recommendations now accept a `warning` state (state was converted from boolean to integer)
* Removed support for `engine/Shopware/Configs/Custom.php`
    * Use `config.php` or `config_$environment.php` e.g. `config_production.php`
* The MailTemplates now have global header and footer fields in configuration -> storefront -> email settings
    * Header for Plaintext
    * Header for HTML
    * Footer for Plaintext
    * Footer for HTML
* Refactored price surcharge for variants
    * `s_article_configurator_price_surcharges` database table was fully restructured and renamed to `s_article_configurator_price_variations`. Existing data is migrated on update
    * Existing related ExtJs classes and events removed
    * Existing price variation backend controller actions and methods removed
    * `Shopware\Models\Article\Configurator\PriceSurcharged` replaced by `Shopware\Models\Article\Configurator\PriceVariation`
* Replace `orderbydefault` configuration by `defaultListingSorting`. The `orderbydefault` configuration worked with a plain sql input which is no longer possible. The `defaultListingSorting` contains now one of the default `sSort` parameters of a listing.
* Add configuration for each listing facet, which allows to disable each facet.
* Move performance filter configuration into the category navigation item.
* Uniform the sorting identifier in the search and listing. Search relevance id changed from 6 to 7 and search rating sorting changed from 2 to 7.
* Generated listing links in the `sGetArticlesByCategory` function removed. The listing parameters are build now over a html form.
    * `sNumberPages` value removed
    * `categoryParams` value removed
    * `sPerPage` contains now the page limit
    * `sPages` value removed
* The listing filters are now selected in the `sArticles::getListingFacets` and assigned to the template as structs.
* Replaced "evaluation" sorting of the search result with the listing "popularity" sorting.
* The search filters are now selected in the `getFacets` function of the frontend search controller.
* The search filters are now assigned as structs to the template.
* `Shopware_Components_Search_Adapter_Default` is now deprecated, use `\Shopware\Bundle\SearchBundle\ProductNumberSearch`.
    * The search term is handled in the `SearchTermConditionHandler`.
    * This handler can be overwritten by custom handler. Custom handlers can be registered with the `Shopware_Search_Gateway_DBAL_Collect_Condition_Handlers` event.
* sGetArticleById result no longer contains the sConfiguratorSelection property. sConfiguratorSelection previously contained the selected variant data, which can now be accessed directly in the first level of the sGetArticleById result.
* sConfigurator class exist no more. The configurator data can now selected over the Shopware\Bundle\StoreFrontBundle\Service\Core\ConfiguratorService.php. To modify the configurator data you can use the sGetArticleById events.
* `sCategories::sGetCategories` no longer returns the articleCount and the position of each category. Categories always sorted by the position and filtered by the active flag.
* Removed config option `front.returnResponse`, which was hardcoded to `true` since SW 4.2
* Added global JavaScript StateManager Singleton to handle different states based on registered breakpoints.
* Added new default states to the state manager
    * `xs` that ranges from 0 to 479 pixels viewport width
    * `s`  that ranges from 480 to 767 pixels viewport width
    * `m` that ranges from 768 to 1023 pixels viewport width
    * `l`  that ranges from 1024 to 1259 pixels viewport width
    * `xl` that ranges from 1260 to 5160 pixels viewport width
* Moved `frontend/detail/similar.tpl` to `frontend/detail/tabs/similar.tpl`
* Removed `frontend/checkout/ajax_add_article_slider_item.tpl`
* Removed `frontend/listing/box_crossselling.tpl`
* Removed `widgets/recommendation/item.tpl`
* Added `frontend/listing/product-box/box--product-slider.tpl`
    * This file should be used as an product slider item template
* Following template files include the new product slider template `frontend/listing/product-box/box--product-slider.tpl`
    * `frontend/checkout/ajax_add_article_slider.tpl` includes it instead of `frontend/checkout/ajax_add_article_slider_item.tpl`
    * `frontend/detail/tabs/related.tpl` includes it instead of `frontend/listing/box_article.tpl`
    * `widgets/recommendation/bought.tpl` includes it instead of `widgets/recommendation/item.tpl`
    * `widgets/recommendation/viewed.tpl` includes it instead of `widgets/recommendation/item.tpl`
    * `widgets/emotion/slide_articles.tpl` includes it instead of its own implementation
* Block named `frontend_detail_index_similar_viewed_slider` is now in the `widgets/recommendation/viewed.tpl` instead of `frontend/detail/index.tpl`
* Block named `frontend_detail_index_also_bought_slider` is now in the `widgets/recommendation/bought.tpl` instead of `frontend/detail/index.tpl`
* Renamed `ENV` to `SHOPWARE_ENV` to avoid accidentally set `ENV` variable, please update your .htaccess if you use a custom envirenment or you are using the staging plugin
* Removed Facebook Plugin from core (`Shopware_Plugins_Frontend_Facebook_Bootstrap`). Will be released as plugin on Github.
* Removed Google Plugin from core (`Shopware_Plugins_Frontend_Google_Bootstrap`). Will be released as plugin on Github.
* All downloaded dummy plugins are now installed in the `engine/Shopware/Plugins/Community` directory.
* Install, update, uninstall function of a plugin supports now a "message" return parameter which allows to display different messages.
* New commands: `sw:cron:list` and `sw:cron:run`
* Running cronjobs using `php shopware.php backend/cron` is not recommended and should be seen as deprecated
* `sVoteAverange` and `averange` properties of article and blog data structures have been renamed to fix the typo in their names.
    * Old versions are kept for compatibility reasons, but are deprecated and will be removed
    * Please notice that the new variable might not always have the same value (10 based vs 5 based ratings)
* Added VRRL Plugin to Core. Service articles can be identified by article attributes. The field can be configured by general settings
* Support text which is assigned to an checkbox element in the emotion world module will now be transformed to a box label
* Added category selection for blog emotion widget
* Changed default sorting of pictures in the backend's Media Manager. Newer pictures are now displayed first.
* `widgets/campaign` is now included in the HTTP cache's default configuration
* Email validation is now done using the `egulias/email-validator` library.
* Removed `frontend/detail/ajax.tpl`
* Added `frontend/detail/product_quick_view.tpl`
* Added `\Shopware\Controllers\Frontend\Detail::productQuickViewAction` to retrieve a detail template with minimal information
* Added configuration `showEsd` to show/hide the ESD-Downloads in the customer accounts menu. (default = true)
* Article image album sizes have been changed to match the requirements of the new template (only new installations)
* Removed `src` property of article images. Each images contains now a `thumbnails` property which all thumbnails.
        * `src` property is restored for old templates.
* Default value for controllers in which to display tag clouds no longer includes homepage.
* `sSelfCanonical` is deprecated. Use the `canonicalParams` array instead
* Change array structure of thumbnail images in emotions, product detail pages, product listings, blog pages.
* Enable and disable function of a plugin bootstrap can now return same parameter as install, uninstall.
* Added automatic APC detection for the general cache.

## 4.3.6
* Backport ESI security patch from Symfony Upstream (http://symfony.com/blog/cve-2015-2308-esi-code-injection).

## 4.3.5
* Additional checks for the auto update module in preparation for Shopware 5.

## 4.3.3
* The config option `showException` now only applies to frontend errors. Backend errors will always display the exception details.
* New event `Shopware_Modules_Basket_AddArticle_CheckBasketForArticle` in class sBasket
* The `Google Analytics` plugin is deprecated and will be removed in the next release. Please use the new `Google Services` plugin instead, available on the community store.
* Removed event `Shopware_Modules_Order_SaveOrder_FilterSQL`
* New event `Shopware_Modules_Order_SaveOrder_FilterParams`
* Implemented the `Enlight_Controller_Request_Request` interface. Please typehint to this class instead to `Enlight_Controller_Request_RequestHttp`
* New config option `trustedProxies`
* New event `Shopware_Controllers_Frontend_Forms_commitForm_Mail`
* Changed default value of `$checkProxy` to false in \Enlight_Controller_Request_Request::getClientIp($checkProxy = false).
    * The correct client ip is automatically obtained if the `trustedProxies` option is configured properly.
* Deprecated event `Shopware_Plugins_HttpCache_ShouldNotCache`
* New config option `httpCache.cache_cookies`

## 4.3.1

* Fixed name used as reference when setting attributes of an order document.
* Added new event `Shopware_Modules_Articles_sGetArticlesByCategory_FilterCountSql`
* `Forgotten password` feature now takes into account the configured minimum password length when generating new passwords
* Create an attributes entity when creating an order document using the Document component and check for an `attributes` array in the document config, whose key/value pairs will be set as the document's attributes
* Customer reviews backend module was improved to better handle reviews with large texts
* Auto update module now also reports main shop and subshops languages
* Maintenance mode options can now be configured by subshop
* Error notification via email was improved and now additionally includes environment and request information
* Minor occurrences of `metadescription` and `metakeywords` have been uniformized to `metaDescription` and `metaKeywords`
* It's now possible to filter payment methods by subshops
* `/widgets` and `/listing` added to `robots.txt`
* Calling certain widget urls without the required parameters will no longer trigger a server error (returns 404 instead)
* `Overview` and `Statistics` backend modules were adjusted to have matching data and differentiate between new users and new customers.
* `Shopping worlds` pages without assigned categories now support SEO urls
* The query passed in the `Shopware_Modules_Basket_GetBasket_FilterSQL` event will no longer include `s_core_units` join and fields
* The config option `showException` is `false` by default (`engine/Shopware/Configs/Default.php`)
    * Exceptions will no longer be shown in the store front
    * Exceptions are logged in a logfile since 4.2.0 (/logs)
    * The old behaviour can be restored by setting `'front' => array('showException' => true)` in the projects `config.php`
* Hiding the country field for shipping addresses will also hide the state field. The option label in the backend was adjusted to better describe this behaviour.

## 4.3.0

* Removed `location` header in responses for all REST-API PUT routes (e.g. PUT /api/customers/{id}).
* Removed deprecated Zend Framework components:
    * `Zend_Amf`
    * `Zend_Application`
    * `Zend_Barcode`
    * `Zend_Cloud`
    * `Zend_CodeGenerator`
    * `Zend_Console`
    * `Zend_Gdata`
    * `Zend_Markup`
    * `Zend_Measure`
    * `Zend_Memory`
    * `Zend_Pdf`
    * `Zend_Reflection`
    * `Zend_Search`
    * `Zend_Serializer`
    * `Zend_Tag`
    * `Zend_Test`
    * `Zend_Tool`
    * `Zend_EventManager`
    * `Zend_Feed`
    * `Zend_Dojo`
    * `Zend_Mobile`
    * `Zend_Queue`
    * `Zend_Captcha`
    * `Zend_Service`
* Removed the following core classes deprecated and/or unused methods
    * `sArticles::sGetArticleAccessories`
    * `sArticles::sCreateTranslationTable`
    * `sArticles::sGetLiveShopping`
    * `sArticles::sGetArticleBundlesByArticleID`
    * `sArticles::sGetArticleBundleByID`
    * `sArticles::sGetBundleBasketDiscount`
    * `sSystem::sPreProcess`
    * `sSystem::sInitMailer`
    * `sSystem::sGetTranslation`
    * `sSystem::sInitAdo`
    * `sSystem::sTranslateConfig`
    * `sSystem::sInitConfig`
    * `sSystem::sInitSmarty`
    * `sSystem::sInitSession`
    * `sSystem::sCallHookPoint`
    * `sSystem::sLoadHookPoints`
    * `sSystem::sInitFactory`
    * `sSystem::sCheckLicense`
    * `sSystem::E_CORE_ERROR`
    * `sCms::sGetDynamicContentByGroup`
    * `sCms::sGetDynamicContentById`
    * `sCms::sGetDynamicGroupName`
    * `sAdmin::sGetDispatch`
    * `sAdmin::sGetDispatches`
    * `sAdmin::sGetShippingcosts`
    * `sAdmin::sCheckTaxID`
    * `sCore::sCustomRenderer`
    * `sBasket::sCountArticles`
    * `sBasket::sGetBasketWeight`
* Removed the following core classes deprecated and/or unused variables
    * `sSystem::sDB_HOST`
    * `sSystem::sDB_USER`
    * `sSystem::sDB_PASSWORD`
    * `sSystem::sDB_DATABASE`
    * `sSystem::sDB_CONNECTOR`
    * `sSystem::sDEBUG`
    * `sSystem::sBENCHRESULTS`
    * `sSystem::sBENCHMARK`
    * `sSystem::sPathMedia`
    * `sSystem::sBasePath`
    * `sSystem::sBasefile`
    * `sSystem::sLicenseData`
    * `sSystem::sCurrencyData`
    * `sSystem::sPathCmsFiles`
    * `sSystem::sPathCmsImg`
    * `sBasket::sBASKET`
* `sCore::sBuildLink()` second argument removed (dead code)
* `sCore` no longer returns `null` when calling not implemented functions
* `sNewsletter` core class removed
* `Shopware_Controllers_Frontend_Content` legacy controller removed
* `templates/_default/frontend/content` legacy template files removed
* `s_cms_content` legacy database table removed
* Removed functions `simpledom_load_file()` and `simpledom_load_string()`
* Removed class `SimpleDOM` and `Shopware_Components_Xml_SimpleXml`
* Add new product feed modifier `articleImages` and `property`
* Create a new product export cronjob to export all active product feeds
* Implement new article association for new seo categories. The seo categories can be assigned over the array key seoCategories in the article api resource.
* Access to GET, POST and COOKIES through sSystem is deprecated.
    * The current arrays have been replaced with wrappers objects to the global variables
    * This might introduce breaks in some scenarios (eg.: when using array functions like array_merge)
* Plugin configuration: Stores of `select` and `combo` elements can now be translated
* Dynamically injecting variables into sSystem is no longer supported
* Removed `Shopware\Models\Widget\View::label` variable, getter and setter, and correspondent `s_core_widget_views::label` database column
* Deprecated `Shopware\Models\Widget\Widget::label` variable, getter and setter, and correspondent `s_core_widgets::label` database column
* Removed deprecated widget settings from the config module. Active widgets and their positions will now be saved automatically.
* Removed desktop switcher from the `Shopware.container.Viewport` base component.

## 4.2.2

* Remove old payment dummy plugins out of the core: PaymentSofort and PigmbhRatePAYPayment
* The tell a friend feature is now disabled by default, due to legal requirements. This will affect new and existing installations. You can enable/re-enable it using a new configuration option in the backend settings menu.
* [REST API] Add thumbnail generation to article and variant create and update actions
* Deprecation: The Database Column impressions in s_articles_details in now deprecated. Please use the s_statistics_article_impression table.
* `Shopware_Components_Plugin_Bootstrap` now has a `addFormTranslations()` method to facilitate translations creation for forms.
* Removed view variables `sOrders` and `sNotes` from `/engine/Shopware/Controllers/Frontend/Account.php` index action
* The methods `sGetOpenOrderData` and `sGetDownloads` in `/engine/core/class/sAdmin.php` will now return a different array structure and will accept new optional parameters to provide a pager functionality
* Added X-Sendfile support for ESD downloads. `redirectDownload` configuration variable is now deprecated, `esdDownloadStrategy` should be used instead
* Deprecation: `/engine/Shopware/Models/Payment/Repository.php:` `getPaymentsQuery` and `getPaymentsQueryBuilder` use `getActivePaymentsQuery` and `getActivePaymentsQueryBuilder` instead.

## 4.2.0

* Add new metaTitle field to the Blog
* Add new metaTitle field to the Article
* Removed unused class `Services_JSON`, was located at `/engine/core/ajax/json.php`.
* The subquery in `$priceForBasePrice` used in `sArticles::sGetArticlesByCategory` has been removed.
* A userland implementaion of [`array_column()`](http://php.net/array_column) has been included.
* Deprecated class `sTicketSystem` has been removed.
* Doctrine has been updated to version 2.4. See: https://github.com/doctrine/doctrine2/blob/2.4/UPGRADE.md
* Break: `Doctrine\ORM\Query::setParamters()` has changed. See: https://github.com/doctrine/doctrine2/blob/2.4/UPGRADE.md
* `Shopware\Components\Model\QueryBuilder::setParameters()` provides old behavior.
* Break: `Shopware_Plugins_Frontend_RouterOld_Bootstrap::onAssemble` event and implementation removed
* Update Zend Framework to version 1.12.3 (latest stable)
* Deprecation: Several unused Zend Framework components and classes are now deprecated. Refer to the full upgrade guide for details
* Break: Custom article attributes of type `Time` are now always saved using the german format. Only affects values inserted in non-german backends
* Removed the sSetLastArticle in sArticles.php. Was deprecated through setLastArticleById in the Shopware_Plugins_Frontend_LastArticles_Bootstrap plugin.
* Implement new options in the article resource. "considerTaxInput" allows to get the variant prices considering the article tax. "language" allows to get a whole translated article array. The "language" parameter can contain a sub shop id or a language iso like en_GB.
* `s_core_debit` table is now deprecated. `s_core_payment_data` and `s_core_payment_instance` should be used instead.
* core payment classes were removed. Existing references in the core to those classes now use the core PaymentMethods module implementation. Refer to the module for details on how to implement payment method logic
* Break: PaymentMethods core plugin components and templates had their performance improved, resulting in potential breaks for extensions
* - getCurrentPaymentData() was removed and should be replaced with getCurrentPaymentDataAsArray(), which returns the same information but in an array format
* Break: some payment snippets had their namespaces changed to comply with recent changes in snippet handling
* Break: customer detail editing in the backend: field names and field container structured to add support for additional payment methods. As such, debit.js view and detail controller have some breaks
* Ext.editorLang variable is no longer used and is being deprecated.
* Deprecation (REST API): 'debit' info in /api/customers/{id} is deprecated. Use 'paymentData' instead
* Break: Removed the Shopware.apps.Analytics.view.table.Conversion, Shopware.apps.Analytics.view.toolbar.Source and Shopware.apps.Analytics.view.toolbar.Shop file which now defined in the analytics/view/main/toolbar.js file.
* Removed unused class `Shopware_Components_Subscriber`, was located at `/engine/Shopware/Components/Subscriber.php`.
* Deprecation: Enlight's assertArrayCount() and assertArrayNotCount() are deprecated. Use phpunit's assertCount() instead

## 4.1.4

* New method `\Shopware\Components\Model\ModelManager::createPaginator($query)`.
 * This method should be used instead of `new \Doctrine\ORM\Tools\Pagination\Paginator($query)`.
 * As of SW 4.2 `$paginator->setUseOutputWalkers(false)` will be set here.
* New methods for calculating the basepricedata have been integrated in `/engine/core/class/sArticles.php`
 * `calculateCheapestBasePriceData` | This methods returns always the basepricedata of the cheapest variant. This is used in the listing views.
 * `getCheapestVariant` | This method is used by the method `calculateCheapestBasePriceData` to get the purchaseunit and the referenceunit of the cheapest variant.
 * `calculateReferencePrice` | This method does the basic calculation to get the right referenceprice.
* New PaymentMethods core plugin including refactored Debit and new SEPA payment methods.
* New `Shopware\Models\Customer\PaymentData` model to store customer's payment information.
* New `Shopware\Models\Payment\PaymentInstance` model to store payments information for individual orders.

### Deprecations
* The subquery in `$priceForBasePrice` used in the method `sGetArticlesByCategory` of the class `/engine/core/class/sArticles.php` is marked deprecated, because the query variable `priceForBasePrice` is no longer in use. Please do not use it anymore.

## 4.1.3

* Add configuration `Always display item short descriptions in listing views`.
* `Shopware_Components_Plugin_Bootstrap::assertVersionGreaterThen()` is now an alias to  `Shopware_Components_Plugin_Bootstrap::assertMinimumVersion()` and returns always `true` if run on an development/git Version of Shopware
* Added a new method `getDefault()` in `engine/Shopware/Models/Shop/Repository.php` which returns just the default shop without calling `fixActiv()`.
* Removed the unused `downloadAction()` in `engine/Shopware/Controllers/Backend/Plugin.php`

### Deprecations
* `decompressFile()` in `/engine/Shopware/Controllers/Backend/Plugin.php`
* `decompressFile()` in `/engine/Shopware/Plugins/Default/Core/PluginManager/Controllers/Backend/PluginManager.php`

You should use the decompressFile method in the CommunityStore component instead


## 4.1.1 / 4.1.2

With Shopware 4.1.1 we have fixed a bug that appeared during certain constellations in the customer registration process.
Submitting the registration formular empty, from time to time a fatal error was displayed.

For further information have a look at the following wiki article:

- GER: <http://wiki.shopware.de/_detail_1342.html>
- ENG: <http://en.wiki.shopware.de/_detail_1398.html>


