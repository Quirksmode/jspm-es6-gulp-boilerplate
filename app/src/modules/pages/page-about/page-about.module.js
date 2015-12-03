'use strict'

import angular from 'angular';
import 'angular-ui-router';
import pageAboutDirective from './page-about.directive';


export default angular.module('pageAbout', [
	'ui.router'
])
.config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
			.state('about', {
				url: '/about',
				template: '<page-about></page-about>'
			});
    }
])
.directive('pageAbout', pageAboutDirective);