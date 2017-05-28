angular
    .module('app')
    .controller('MapController', MapController);

MapController.$inject = ['$scope', '$log'];

function MapController ($scope, $log) {

    var currentLat = 51;
    var currentLng = 51;

    initGeolocation();

    function initGeolocation() {
        if(navigator.geolocation) {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success, fail );
        }
        else {
           $log.error("browser not supported");
        }
     }

     function success(position) {
         currentLat = position.coords.longitude;
         currentLng = position.coords.latitude
     }

     function fail() {
        $log.error("mapping current position failed");
     }


    var mainMarker = {
        lat: 51,
        lng: 0,
        focus: true,
        message: "Hey, drag me if you want",
        draggable: true
    };

    var secondMarker = {
        lat: 51,
        lng: 2,
        focus: true,
        message: "Hey, drag me if you want",
        draggable: true
    };

    angular.extend($scope, {
        london: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        },
        markers: {
            mainMarker: angular.copy(mainMarker)
        },
        position: {
            lat: 51,
            lng: 0
        },
        events: { // or just {} //all events
            markers:{
                enable: [ 'dragend' ]
                //logic: 'emit'
            }
        }
    }, {
        exeter: {
            lat: 50.505,
            lng: -0.09,
            zoom: 8
        },
        markers: {
            secondMarker: angular.copy(secondMarker)
        },
        position: {
            lat: 51,
            lng: 3
        },
        events: { // or just {} //all events
            markers:{
                enable: [ 'dragend' ]
                //logic: 'emit'
            }
        }
    });

    angular.extend($scope, {
        currentLocation: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        },
        markers: {
            mainMarker: angular.copy(mainMarker)
        },
        position: {
            lat: 51,
            lng: 0
        }
    });

    $scope.$on("leafletDirectiveMarker.dragend", function(event, args){
        $scope.position.lat = args.model.lat;
        $scope.position.lng = args.model.lng;
    });
}
