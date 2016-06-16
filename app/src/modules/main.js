/**
  * @ngdoc overview
  * @name app
  * @description
  * Main Module for this application
  */

'use strict';

/* exported $ */

// Import Vendor Scripts e.g. Angular, jQuery
import angular                  	from 'angular';
import 'angular-ui-router';

// Import UI Modules
import scrollOnClickModule          from './components/ui-widgets/scroll-on-click/scroll-on-click.module';

// Import Common Modules
import headerPrimaryModule          from './components/common/header-primary/header-primary.module';
import footerPrimaryModule          from './components/common/footer-primary/footer-primary.module';

// Import Page Specific Modules
import pageHomeModule          		from './pages/page-home/page-home.module';
import pageSearchModule          	from './pages/page-search/page-search.module';

// Import Widget Modules
import widgetExampleModule          from './widgets/widget-example/widget-example.module';

// Import Shared Services Module
import servicesModule               from './services/services.module';

// Import Shared Filters Module
import filtersModule                from './filters/filters.module';


// Setup the app module
export default angular.module('app',[

	// Vendor
	'ui.router',

    // UI Modules
    scrollOnClickModule.name,

    // Common Modules
    headerPrimaryModule.name,
    footerPrimaryModule.name,

    // Page Specific Modules
    pageHomeModule.name,
    pageSearchModule.name,

    // Widget Modules
    widgetExampleModule.name,

    // Shared Services Module
    servicesModule.name,

    // Shared Filters Module
    filtersModule.name

]).config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);