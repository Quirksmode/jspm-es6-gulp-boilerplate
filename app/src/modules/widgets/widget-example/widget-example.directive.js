/**
 * @ngdoc directive
 * @name WidgetExample.directive:pageWidgetExample
 * @scope
 * @restrict E
 *
 * @description
 * Directive for WidgetExample Module
 *
 * @param {object}  field   A field object
 *
 */

import template from './widget-example.tpl.html!text';
import controller from './widget-example.controller';

const widgetExampleDirective = function() {
    return {
        template: template,
        controller: controller,
        restrict: 'E',
        controllerAs: 'ctrl',
        scope: {},
        bindToController: true,
        replace: true
    };
};

export default widgetExampleDirective;
