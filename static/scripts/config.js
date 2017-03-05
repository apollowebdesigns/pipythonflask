angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/test', {
                templateUrl : 'pages/home.html',
                controller  : 'AppController'
            })
    });