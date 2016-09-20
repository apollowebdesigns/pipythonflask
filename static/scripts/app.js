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
    
    function _getData() {
        $http.get("http://192.168.1.69:9876/todo/api/v1.0/tasks")
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }

    
}