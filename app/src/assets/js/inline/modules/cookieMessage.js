'use strict';

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') { c = c.substring(1); }
        if (c.indexOf(name) !== -1) { return c.substring(name.length, c.length); }
    }
    return 0;
}

// Check cookie storage and hide if exists
if( !getCookie('ADDCOOKIENAMEHERE') ) {
    //document.body.className += 'cookie-message-show';
}