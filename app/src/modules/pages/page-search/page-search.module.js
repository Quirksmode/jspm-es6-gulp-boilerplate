'use strict'

import angular from 'angular';
import 'angular-ui-router';
import pageSearchDirective from './page-search.directive';


let pageSearchModule = angular.module('pageSearch', [
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

export default pageSearchModule