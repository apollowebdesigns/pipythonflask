angular
    .module('app')
    .service('ledService', ledService);

ledService.$inject = ['$http'];

function ledService ($http) {

    this.getData = _getData;

    function _getData(color) {
        $http.get("http://192.168.1.67:9876/hits/" + color)
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }
}