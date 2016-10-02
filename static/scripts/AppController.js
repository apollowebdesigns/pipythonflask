angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['ledService'];

function AppController(ledService) {

    var vm = this;
    vm.requestedData = 'test data';
    vm.getData = ledService.getData;
    
}
