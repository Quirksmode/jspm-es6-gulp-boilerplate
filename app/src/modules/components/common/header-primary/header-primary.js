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

        this.init();
    }

    /**
     * Write your description here
     *
     * @method init
     */
    init() {
        console.log('Loaded Header Primary');
    }

}

export default headerPrimary;