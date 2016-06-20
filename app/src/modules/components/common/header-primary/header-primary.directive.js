/**
 * @ngdoc directive
 * @name HeaderPrimary.directive:pageHome
 * @scope
 * @restrict E
 *
 * @description
 * Directive for HeaderPrimary Module
 *
 * @param {object}  field   A field object
 *
 */

import template from './header-primary.tpl.html!text';

const headerPrimaryDirective = function() {
    return {
        template: template,
        restrict: 'E'
    };
};

export default headerPrimaryDirective;
