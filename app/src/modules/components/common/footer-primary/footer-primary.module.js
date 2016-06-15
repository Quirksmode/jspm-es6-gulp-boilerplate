/**
  * @ngdoc overview
  * @name FooterPrimary
  * @description
  * PageHome Module and Config
  */

'use strict'

import footerPrimaryDirective from './footer-primary.directive';

export default angular.module('FooterPrimary', [])
  .directive('footerPrimary', footerPrimaryDirective);
  