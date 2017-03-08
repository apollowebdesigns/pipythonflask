angular
    .module('app')
    .service('ledService', ledService);

ledService.$inject = ['$http', '$log'];

function ledService ($http, $log) {
    this.getData = _getData;
    var uniqueIP = "192.168.1.69", 
        uniqueIPparents = "192.168.1.74";

    function _getData(color) {
        $http.get("http://192.168.1.69:9876/hits/" + color)
        .then(function(response) {
            $log.info('data received');
            vm.requestedData = response.data;
        });
    }
}