/**
 * @ngdoc directive
 * @name FooterPrimary.directive:pageHome
 * @scope
 * @restrict E
 *
 * @description
 * Directive for FooterPrimary Module
 *
 * @param {object}  field   A field object
 *
 */

import template from './footer-primary.tpl.html!text';

let footerPrimaryDirective = function() {
	return {
		template,
		restrict: 'E',
	};
};

export default footerPrimaryDirective;