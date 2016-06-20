/**
 * @ngdoc controller
 * @name WidgetExample.controller:WidgetExampleController
 * @description
 * Controller for WidgetExample Module
 */

class WidgetExampleController {
    constructor($scope, APIService, PageDataService) {
        this.$scope = $scope;
        this.PageDataService = PageDataService;
        this.APIService = APIService;

        this.name = 'Example Widget';
        this.sharedValue = this.PageDataService.data.sharedValue;

        this.exampleAPIUrl = 'http://jsonplaceholder.typicode.com/posts/';

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

    // Fetch the example API data via the APIService
    _getData(url) {
        // Post the login details to the APIService
        this.APIService.get(url)
            .then((data) => {
                this.APIData = data;
            }, (data) => {
                console.log('Error', data);
            }).finally(() => {
                // Just to show this works, lets update the PageDataService
                this.PageDataService.data.sharedValue = 'Shared Value has been updated';
            });
    }


    /**
     * ------------------------------------------------------------------------
     * Public
     * ------------------------------------------------------------------------
     */

    loadData() {
        // Get JSON Data from API
        this._getData(this.exampleAPIUrl);
    }

}

WidgetExampleController.$inject = ['$scope', 'APIService', 'PageDataService'];

export default WidgetExampleController;
