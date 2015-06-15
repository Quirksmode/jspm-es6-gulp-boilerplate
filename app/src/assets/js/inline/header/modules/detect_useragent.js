'use strict';

// Detect IE
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    document.documentElement.className += ' ie';
}

// Detect iOS
var iOS = ( ua.match(/(iPad|iPhone|iPod)/g) ? true : false );
if (iOS) {
    document.documentElement.className += ' ios';
}

// Detect Android
var android = ua.indexOf('Android') > 0;
if (android) {
    document.documentElement.className += ' android';
}