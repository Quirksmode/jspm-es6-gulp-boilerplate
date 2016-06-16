/**
 * @ngdoc overview
 * @name Services
 */

'use strict';

import APIService from './api.service';
import PageDataService from './page-data.service';

export default angular.module('Services', [])
    .factory('APIService', APIService)
    .factory('PageDataService', PageDataService);
