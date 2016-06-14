var todoApp = angular.module("todoApp",[]);
todoApp.controller("MainCtrl", function($scope) {
  $scope.newItems = "";
  $scope.items = [];
  // console.log($scope.newItems)
  $scope.addItem = function() {
    $scope.items.push($scope.newItems);
    $scope.newItems = "";
    // console.log($scope.items)
  $scope.remove = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index,1)
  }
  }
});