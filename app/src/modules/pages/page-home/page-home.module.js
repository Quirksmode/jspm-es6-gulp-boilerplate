'use strict'

import angular from 'angular';
import 'angular-ui-router';
import pageHomeDirective from './page-home.directive';


export default angular.module('pageHome', [
	'ui.router'
])
.config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
			.state('home', {
				url: '/',
				template: '<page-home></page-home>'
			});
    }
])
.directive('pageHome', pageHomeDirective);