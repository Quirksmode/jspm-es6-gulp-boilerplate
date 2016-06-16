'use strict';

function escapeHTML(string) {
    var el = document.createElement('span');
    el.appendChild(document.createTextNode(string));
    return el.innerHTML;
}

export default function newLineBreakFilter() {
    return function(data) {
        if (!data) return data;

        // Adds an HTML break and escapes each line.
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
            lines[i] = escapeHTML(lines[i]);
        }
        return lines.join('<br />');
    };
}

newLineBreakFilter.$inject = [];
