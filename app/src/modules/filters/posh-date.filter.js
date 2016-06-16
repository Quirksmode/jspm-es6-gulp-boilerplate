'use strict';

import moment from 'moment';

export default function poshDateFilter() {
    return function(dateString) {
        return moment(dateString, 'YYYY/M/D').format('MMMM D, YYYY');
    };
}
