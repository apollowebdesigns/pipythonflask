angular
    .module('app')
    .service('driveService', driveService);

driveService.$inject = ['$http', '$log'];

function driveService ($http, $log) { 
    this.driveData = _driveData;
    this.driveForwards = _driveForwards;
    this.driveBackwards = _driveBackwards;
    var uniqueIP = "192.168.1.69";
    var uniqueIPparents = "192.168.1.74";
    var redSdCardIp = "192.168.1.73";

    function _driveData() {
        $log.info('driving function entered function entered');
        $http.get("/hits/motor")
        .then(function(response) {
            console.log('data received');
            this.requestedData = response.data;
        });
    }

    function _driveForwards() {
        $log.info('fowards function entered');
        $http.get("/hits/forwards")
        .then(function(response) {
            console.log('fowards hit');
            this.requestedData = response.data;
        });
    }

    function _driveBackwards() {
        $log.info('backwards function entered');
        $http.get("/hits/backwards")
        .then(function(response) {
            console.log('backwards hit');
            this.requestedData = response.data;
        });
    }
}