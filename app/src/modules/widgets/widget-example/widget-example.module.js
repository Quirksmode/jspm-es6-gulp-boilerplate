/**
  * @ngdoc overview
  * @name WidgetExample
  * @description
  * WidgetExample Module and Config
  */

'use strict'

import angular from 'angular';
import widgetExampleDirective from './widget-example.directive';


export default angular.module('widgetExample', [])
  .directive('widgetExample', widgetExampleDirective);