var app = angular.module("FormApp", []);


app.controller("FormCtrl", function($scope){
  $scope.name = "";
  $scope.phone = [];
  $scope.welcome = true;
  $scope.contacts = [];

  $scope.action = function () {
    $scope.invalid = [];

    if ($scope.name === "") {
     $scope.invalid.push("Name must not be blank.");
   };
   if ($scope.phone[3] !== "-" || $scope.phone[7] !== "-") {
    $scope.invalid.push("Phone number must match format XXX-XXX-XXXX.");
  };
  if ($scope.invalid.length === 0) {
    $scope.welcome = false;
    $scope.contacts.push($scope.name+ " " + $scope.phone);
    console.log($scope.contacts);
  }
}

});