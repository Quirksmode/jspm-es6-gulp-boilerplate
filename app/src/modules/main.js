'use strict';

/* exported $, ngMessages, ngAnimate, ngSanitize, ngFileUpload, ui */

// Import Vendor Scripts e.g. Angular, jQuery
import $                        	from 'jquery';
import angular                  	from 'angular';
// import ngMessages              		from 'angular-messages';
// import ngAnimate                	from 'angular-animate';
import ngSanitize                   from 'textAngular-sanitize'; // Custom version of ng-sanitize used for TextAngular
import ngFileUpload                 from 'ng-file-upload';
import textAngular                  from 'textAngular';
// import magnificPopup                from 'Magnific-Popup';

// Import UI Modules
import scrollOnClickModule          from './components/ui-widgets/scroll-on-click/scroll-on-click.module';




let mainModule = angular.module('mainApp',[

    // Vendor
    // 'ngMessages',
    // 'ngAnimate',
    'ngSanitize',
    'ngFileUpload',
    // 'ui.bootstrap',
    'textAngular',

    scrollOnClickModule.name

]);

export default mainModule;