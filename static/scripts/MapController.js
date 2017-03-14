angular
    .module('app')
    .controller('MapController', MapController);

MapController.$inject = ['$scope'];

function MapController ($scope) {
    angular.extend($scope, {
        chicago: {
            lat: 41.85,
            lng: -87.65,
            zoom: 8
        },
        markers: {
            m1: {
                lat: 41.85,
                lng: -87.65,
                message: "I'm a static marker with defaultIcon",
                focus: false,
                opacity: 1
            },
        }
    });
}
