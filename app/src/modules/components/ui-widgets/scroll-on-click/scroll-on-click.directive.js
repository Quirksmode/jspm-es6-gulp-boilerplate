'use strict';

/**
 * @class scrollOnClick
 */
function scrollOnClick() {
  return {
    restrict: 'AC',
    scope: {
        scrollTo: '@',
        scrollSpeed: '@',
        stickyHeader: '@'
    },
    link: (scope, element) => {
        let scrollSpeed = scope.scrollSpeed || 600,
            scrollTo = scope.scrollTo || 'body, html',
            stickyHeader = scope.stickyHeader || '',
            topBar = 0;

        /*
         * Genertic click function to scroll to a specified element
         *
         * @method animateScroll
         * @param {object} e - reference to the element
         */

        function animateScroll (e) {

            // If scrolling to an element add the sticky header height
            if(scope.scrollTo) {
                topBar = angular.element(stickyHeader).outerHeight();
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
