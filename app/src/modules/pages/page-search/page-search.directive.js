import template from './page-search.tpl.html!text';
import controller from './page-search.controller';

let pageSearchDirective = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default pageSearchDirective;