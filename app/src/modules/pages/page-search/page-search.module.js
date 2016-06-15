'use strict'

import angular from 'angular';
import 'angular-ui-router';
import pageSearchDirective from './page-search.directive';


export default angular.module('pageSearch', [
	'ui.router'
])
.config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
			.state('search', {
				url: '/search',
				template: '<page-search></page-search>'
			});
    }
])
.directive('pageSearch', pageSearchDirective);