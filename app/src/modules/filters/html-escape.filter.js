'use strict';

export default function htmlEscape() {
    return function(input) {
        if (!input) {
            return '';
        }
        return input.
        replace(/&/g, '&amp;').
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;').
        replace(/'/g, '&#39;').
        replace(/"/g, '&quot;');
    };
}
