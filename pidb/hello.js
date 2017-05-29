/**
 * Created by andrewevans on 23/04/2017.
 */

angular
    .module('app', [])
    .controller('AppController', AppController);

AppController.$inject = ['$scope', '$http', '$log'];

function AppController($scope, $http, $log) {
    $scope.test = "test";
    console.log("working???");

    var dataPost = {"latitude":"51","longitude":"8"};

    dataPost = {
        "true": {
            "one":"oneThing",
            "two": "nonStandardThing()",
            "three": true
        }
    }

    // $http.post('http://localhost:8080/position/', JSON.stringify(dataPost))
    //     .then(function success(response) {
    //         $log.info("things posted ok!!!");
    //         $log.info(response);
    //     }, function error(response) {
    //         $log.error("error happened while posting")
    //     })




    // console.log("before post");
    // $.ajax({
    //     url: "http://localhost:8080/position/",
    //     type: 'POST',
    //     dataType: 'json',
    //     contentType: 'application/json',
    //     processData: false,
    //     data: JSON.stringify(dataPost),
    //     success: function (data) {
    //         console.info(JSON.stringify(data));
    //     },
    //     error: function(){
    //         console.error("Cannot get data");
    //     }
    // });
    // console.log("after post");

    //postData();
    getData();
    $scope.getData = getData;

    $http
        .get('http://rest-service.guides.spring.io/greeting')
        .then(function(response) {
            $log.info("data entered?");
            $scope.greeting = response.data;
        });

    function getData() {
        $log.info('get that data!');
        $http.get("http://localhost:8080/position/")
            .then(function(response) {
                $log.info('data received');
                $scope.requestedData = response.data._embedded.position;
                $scope.requestedData.forEach(console.log);
            });
    }




    var req = {
        method: 'POST',
        url: 'http://localhost:8080/people/',
        headers: {
            'Content-Type':'application/json'
        },
        data: dataPost
    }

    function postData() {
        $log.info('get that data!');
        $http(req)
            .then(function(response){
                console.log("function hit successfully");
                console.log(response);
            });
    }
}


