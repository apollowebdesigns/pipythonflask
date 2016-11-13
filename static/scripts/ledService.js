angular
    .module('app')
    .service('ledService', ledService);

ledService.$inject = ['$http'];

function ledService ($http) {

    this.getData = _getData;

    var uniqueIP = "192.168.1.69";

    var uniqueIPparents = "192.168.1.74";

    function _getData(color) {
        $http.get("http://192.168.1.69:9876/hits/" + color)
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }
}