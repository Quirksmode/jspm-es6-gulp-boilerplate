'use strict';

/* exported $ */

// Import Vendor Scripts e.g. Angular, jQuery
import $                        	from 'jquery';
import angular                  	from 'angular';

// Import UI Modules
import scrollOnClickModule          from './components/ui-widgets/scroll-on-click/scroll-on-click.module';




let mainModule = angular.module('mainApp',[

    // UI Modules
    scrollOnClickModule.name

]);

export default mainModule;