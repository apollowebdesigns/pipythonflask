angular
    .module('app', []);

angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['$http'];

function AppController($http) {

    var vm = this;
    vm.requestedData = 'test data';
    vm.getData = _getData;
    
    function _getData(color) {
        $http.get("http://192.168.1.67:9876/hits/" + color)
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }

    
}


//TODO move into seperate service file, check carefully with style guide

angular
    .module('app')
    .service('ledService', ledService);

ledService.$inject = ['$http'];

function ledService ($http) {

    this.getData = _getData;

    function _getData(color) {
        //TODO check link is correct over router as hits wernt connecting
        $http.get("http://192.168.1.67:9876/hits/" + color)
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }
}