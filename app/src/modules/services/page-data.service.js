/**
 * @class page-data.service
 *
 * ## Description
 * Service to store the data within a shared object
 *
 *
 */

'use strict';

class PageDataService {

    constructor() {
        this.data = {
            sharedValue: 'Shared data across a service'
        };
    }

    static factory() {
        return new PageDataService();
    }
}

PageDataService.factory.$inject = [];

export default PageDataService.factory;
