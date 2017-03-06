angular
    .module('app')
    .controller('MapController', MapController);

MapController.$inject = ['$scope'];

function MapController ($scope) {
    angular.extend($scope, {
                exeter: {
                    lat: 50.7184,
                    lng: -3.5339,
                    zoom: 6
                }
            });
}
