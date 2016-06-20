/**
 * @ngdoc overview
 * @name HeaderPrimary
 * @description
 * PageHome Module and Config
 */

'use strict';

import headerPrimaryDirective from './header-primary.directive';
import navPrimaryDirective from './nav-primary/nav-primary.directive';

export default angular.module('HeaderPrimary', [])
    .directive('headerPrimary', headerPrimaryDirective)
    .directive('navPrimary', navPrimaryDirective);
