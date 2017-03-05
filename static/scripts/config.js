angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/testjs', {
                templateUrl : '/test.html',
                controller  : 'AppController'
            })
    });