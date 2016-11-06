angular
    .module('app')
    .service('driveService', driveService);

driveService.$inject = ['$http'];

function driveService ($http) { 

    this.driveData = _driveData;
    this.driveForwards = _driveForwards;
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
        console.log('fowards function entered');
        $http.get("http://192.168.1.69:9876/hits/forwards")
        .then(function(response) {
            console.log('fowards hit');
            this.requestedData = response.data;
        });
    }
}