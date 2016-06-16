/**
 * @ngdoc overview
 * @name Filters
 */

'use strict';

import daysAgoFilter 		from './days-ago.filter';
import htmlEscapeFilter 	from './html-escape.filter';
import newLineBreakFilter 	from './text-to-html.filter';
import leadingZeroFilter    from './leading-zero.filter';
import poshDateFilter    	from './posh-date.filter';
import getUrlParamsFilter   from './get-url-params.filter';
import urlStaticFilter   	from './url-static.filter';
import monthNameFilter    from './month-name.filter';

export default angular.module('Filters', [])
    .filter('daysAgo', daysAgoFilter)
    .filter('htmlEscape', htmlEscapeFilter)
    .filter('nl2br', newLineBreakFilter)
    .filter('leadingZero', leadingZeroFilter)
    .filter('poshDate', poshDateFilter)
    .filter('getUrlParams', getUrlParamsFilter)
    .filter('urlStatic', urlStaticFilter)
    .filter('monthName', monthNameFilter);
