/**
 * Loop through all images with a class of 'svg' and replace the img tag with the actual svg code so we can assign fill colour dynamically
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
 */
(function () {
    function xhrSuccess () { this.callback.apply(this, this.arguments); }
    function xhrError () { console.error(this.statusText); }
    function loadFile (sURL, fCallback) {
      var oReq = new XMLHttpRequest();
      oReq.callback = fCallback;
      oReq.arguments = Array.prototype.slice.call(arguments, 2);
      oReq.onload = xhrSuccess;
      oReq.onerror = xhrError;
      oReq.open("get", sURL, true);
      oReq.send(null);
    }
    function showMessage (imageEl) {
        imageEl.outerHTML = this.responseText;
    }

    // Loop through all the images
    var el = document.querySelectorAll('.svg');
    var i;

    for(i = 0; i < el.length; i++) {
        var imageEl = el[i],
            imgSrc = imageEl.src;

        // Check image has SVG extention
        if(typeof imgSrc != 'undefined' && imgSrc.match(/\.svg$/)) {
            loadFile(imgSrc, showMessage, imageEl);
        }
    }
})();