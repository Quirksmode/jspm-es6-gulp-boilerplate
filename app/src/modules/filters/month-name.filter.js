/**
 * @ngdoc filter
 * @name Filters.filter:monthNameFilter
 *
 * @description
 * Converts the month number into a uppercase short name
 *
 * @requires moment
 * @param {number} monthNumber the numeric value for the month
 * @returns {string} month short name
 */

'use strict';

import moment from 'moment';

export default function monthNameFilter() {
    return function(monthNumber) {
        var months = moment.monthsShort();
        $.each(months, function(index, item) {
            months[index] = item.toUpperCase();
        });

        return months[monthNumber - 1];
    };
}
