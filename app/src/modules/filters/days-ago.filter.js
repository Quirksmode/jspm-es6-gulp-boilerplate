'use strict';

import moment from 'moment';

export default function daysAgoFilter() {
    return function(dateString) {
        // returns a relative time display always in the past
        return moment.min(moment(dateString), moment.utc()).fromNow();
    };
}
