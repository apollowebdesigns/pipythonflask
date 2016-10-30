angular
    .module('app')
    .service('driveService', ledService);

ledService.$inject = ['$http'];

function ledService ($http) {

    this.getData = _getData;

    var uniqueIP = "192.168.1.67";

    var uniqueIPparents = "192.168.1.74";

    function _getData(color) {
        $http.get("http://192.168.1.67:9876/hits/motor" + color)
        .then(function(response) {
            console.log('data received');
            vm.requestedData = response.data;
        });
    }
}