/**
 * @class modules.components.ui-widgets.scroll-on-click
 *
 * ## Description
 * Example JS File
 *
*/
'use strict';

/**
 * @class scrollOnClick
 * @param {object} options - overrides the defaults
 */
class scrollOnClick {
    constructor(options) {
        this.defaults = {

        };

        this.options = $.extend(this.defaults, options);

        this.init();
    }

    /**
     * Sets event listeners required for the class
     *
     * @method setEventListeners
     */
    init() {
        console.log('Loaded Scroll On Click');
        $('.js-scroll-on-click').on('click', function(){
            console.log('Clicked');
        })
    }

}

export default scrollOnClick;