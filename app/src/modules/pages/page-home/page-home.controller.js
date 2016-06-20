/**
 * @ngdoc controller
 * @name PageHome.controller:HomeController
 * @description
 * Controller for PageHome Module
 */

class HomeController {
    constructor($scope, PageDataService) {
        this.$scope = $scope;
        this.PageDataService = PageDataService;

        this.name = 'Home Page';
        this.sharedValue = this.PageDataService.data.sharedValue;

        this._init();
    }


    /**
     * ------------------------------------------------------------------------
     * Private
     * ------------------------------------------------------------------------
     */

    _init() {
        // Setup Watchers
        this._setupWatchers();
    }

    _setupWatchers() {
        // Watch the PageDataService for changes
        this.$scope.$watch(() => {
            return this.PageDataService.data.sharedValue;
        }, (newValue, oldValue) => {
            if (newValue === oldValue) return;
            this.sharedValue = newValue;
        }, true);
    }


    /**
     * ------------------------------------------------------------------------
     * Public
     * ------------------------------------------------------------------------
     */

}

HomeController.$inject = ['$scope', 'PageDataService'];

export default HomeController;
