/**
 * @ngdoc overview
 * @name NavPrimary
 * @description
 * PageHome Module and Config
 */

'use strict';

import navPrimaryDirective from './nav-primary.directive';

export default angular.module('NavPrimary', [])
    .directive('navPrimary', navPrimaryDirective);
