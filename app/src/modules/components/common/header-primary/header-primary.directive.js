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

let headerPrimaryDirective = function() {
	return {
		template,
		restrict: 'E',
	};
};

export default headerPrimaryDirective;