/**
 * @ngdoc directive
 * @name NavPrimary.directive:pageHome
 * @scope
 * @restrict E
 *
 * @description
 * Directive for NavPrimary Module
 *
 * @param {object}  field   A field object
 *
 */

import template from './nav-primary.tpl.html!text';

const navPrimaryDirective = function() {
    return {
        template: template,
        restrict: 'E'
    };
};

export default navPrimaryDirective;
