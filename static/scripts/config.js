angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/test.html'
            })
    });