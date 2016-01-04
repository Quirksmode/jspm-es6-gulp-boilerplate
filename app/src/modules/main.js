/**
  * @ngdoc overview
  * @name app
  * @description
  * Main Module for this application
  */

'use strict';

/* exported $ */

// Import Vendor Scripts e.g. Angular, jQuery
import $                        	from 'jquery';
import angular                  	from 'angular';
import 'angular-ui-router';

// Import UI Modules
import scrollOnClickModule          from './components/ui-widgets/scroll-on-click/scroll-on-click.module';

// Page Specific Modules
import pageHomeModule          		from './pages/page-home/page-home.module';
import pageAboutModule          	from './pages/page-about/page-about.module';


// Setup the app module
export default angular.module('app',[

	// Vendor
	'ui.router',

    // UI Modules
    scrollOnClickModule.name,

    // Page Specific Modules
    pageHomeModule.name,
    pageAboutModule.name

]);

// Remove # from URL (Needs Server Config)
// .config(['$stateProvider', '$locationProvider',
//     function($stateProvider, $locationProvider) {
//         $locationProvider.html5Mode(true);
//     }
// ]);