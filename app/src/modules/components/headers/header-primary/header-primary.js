/**
 * @class modules.components.headers.header-primary
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
class headerPrimary {
    constructor(options) {
        this.defaults = {

        };

        this.options = $.extend(this.defaults, options);

        this.exampleFunction();
    }

    /**
     * Sets event listeners required for the class
     *
     * @method setEventListeners
     */
    exampleFunction() {
        console.log('Loaded Header Primary');
    }

}

export default headerPrimary;