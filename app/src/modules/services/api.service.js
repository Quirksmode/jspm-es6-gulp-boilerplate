'use strict';

class APIService {

    constructor($http) {
        this.$http = $http;

        // Angular looks for XSRF-TOKEN cookie and submits it in X-XSRF-TOKEN http header,
        // while Django sets csrftoken cookie and expects X-CSRFToken http header.
        // this.$http.defaults.xsrfCookieName = 'csrftoken';
        // this.$http.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

    get(url, params) {
        return this.$http({
            method: 'GET',
            url: url,
            params: params
        }).then(
            function(response) {
                return response;
            });
    }

    put(url, params) {
        return this.$http({
            method: 'PUT',
            url: url,
            params: params
        }).then(
            function(response) {
                return response;
            });
    }

    patch(url, params) {
        return this.$http({
            method: 'PATCH',
            url: url,
            params: params
        }).then(
            function(response) {
                return response;
            });
    }

    post(url, data) {
        return this.$http({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            function(response) {
                return response;
            });
    }

    delete(url) {
        return this.$http({
            method: 'DELETE',
            url: url
        }).then(
            function(response) {
                return response;
            });
    }

    static factory($http){
        return new APIService($http);
    }
}

APIService.factory.$inject = ['$http'];

export default APIService.factory;
