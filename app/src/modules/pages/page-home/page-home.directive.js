import template from './page-home.html!text';
import controller from './page-home.controller';
//import './about.css!';

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