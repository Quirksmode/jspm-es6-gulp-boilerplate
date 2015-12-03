import template from './page-about.html!text';
import controller from './page-about.controller';
//import './about.css!';

let pageAboutDirective = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default pageAboutDirective;