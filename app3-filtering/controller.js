angular.module('mainApp').controller('mainCtrl', function($scope, mainService){
  $scope.dataReturn = mainService.dataReturn();    
})
