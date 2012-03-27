/* selectionCache object
 The selection cache object that wraps around jQuery's native selector
 * @selection - string, the jquery selector
 * @refresh - boolean, do we want to refresh the cached selection?
 */
/*globals window:true, jQuery:true */
(function ($) {
    var cache = {},
        fn = function (selection, refresh) {
          
            // Create or update cached selector
            if (typeof cache[selection] === 'undefined' || refresh) {
                cache[selection] = $(selection);
            }

            return cache[selection];
        };

    // Make availible globally
    window._$ = fn;

})(jQuery);