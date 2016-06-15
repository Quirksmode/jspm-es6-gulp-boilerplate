/**
 * @ngdoc directive
 * @name PageHome.directive:pageHome
 * @scope
 * @restrict E
 *
 * @description
 * Directive for PageHome Module
 *
 * @param {object}  field   A field object
 *
 */

import template from './page-home.tpl.html!text';
import controller from './page-home.controller';

let pageHomeDirective = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default pageHomeDirective;