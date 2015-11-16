'use strict';

/* exported $, ngMessages, ngAnimate, ngSanitize, ngFileUpload, ui */

// Import Vendor Scripts e.g. Angular, jQuery
import $                        	from 'jquery';
import angular                  	from 'angular';
import ngMessages              		from 'angular-messages';
import ngAnimate                	from 'angular-animate';
import ngFileUpload                 from 'ng-file-upload';


let mainModule = angular.module('mainApp',[

    // Vendor
    'ngMessages',
    'ngAnimate',
    'ngFileUpload',
]);

export default mainModule;