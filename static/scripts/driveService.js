angular
    .module('app')
    .service('driveService', ledService);

ledService.$inject = ['$http'];

function ledService ($http) { 

    this.driveData = _driveData;

    var uniqueIP = "192.168.1.69";

    var uniqueIPparents = "192.168.1.74";

    function _driveData() {
        $http.get("http://192.168.1.69:9876/hits/motor")
        .then(function(response) {
            console.log('data received');
            this.requestedData = response.data;
        });
    }

    function _driveForwards() {
        $http.get("http://192.168.1.69:9876/hits/forwards")
        .then(function(response) {
            console.log('fowards hit');
            this.requestedData = response.data;
        });
    }
}