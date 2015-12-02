/**
 * @class ScrollOnClick.scrollOnClick
 *
 * ## Description
 * Allows the user to scroll to a certain element on click.
 *
 * Attach to element as a class or as an attribute:
 * <div scroll-on-click></div> or <div class="scroll-on-click"></div>
 *
 */

'use strict';

console.log("Scoll On Click UI Widget Loaded");

/**
 * @class scrollOnClick
 */
function scrollOnClick() {
  return {
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'AC',
    scope: {
        scrollTo: '@',
        scrollSpeed: '@'
    },
    link: (scope, element) => {
        let scrollSpeed = scope.scrollSpeed || 600,
            scrollTo = scope.scrollTo || 'body, html',
            topBar = 0;

        /*
         * Genertic click function to scroll to a specified element
         *
         * @method animateScroll
         * @param {object} e - reference to the element
         */

        function animateScroll (e) {

            console.log("scrolled");

            // If scrolling to an element add the sticky header height
            if(scope.scrollTo) {
                topBar = angular.element('.header-primary__nav').outerHeight();
            }

            // Make sure the scroll to target exists
            if($(scrollTo).length > 0) {
                $('html, body').animate({
                    scrollTop: $(scrollTo).offset().top - topBar
                }, Number(scrollSpeed));
            }

            e.preventDefault();
        }

        element.on('click', animateScroll);

    }
  };
}

scrollOnClick.$inject = [];

export default scrollOnClick;
