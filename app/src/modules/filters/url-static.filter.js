'use strict';

export default function urlStaticFilter() {
    return function (url) {
        return APP.config.buildStaticUrl(url);
    };
}
