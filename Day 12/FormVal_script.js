var app = angular.module("FormApp", []);


app.controller("FormCtrl", function($scope){
	$scope.name = "";
  $scope.phone = [];
  $scope.email = [];
  $scope.pass1 = "";
  $scope.pass2 = "";
  $scope.success = true;
  $scope.welcome = true;
	$scope.action = function () {
    $scope.invalid = [];
		if ($scope.name === "") {
			$scope.invalid.push("Name must not be blank.");
		};
    if ($scope.phone[3] !== "-" || $scope.phone[7] !== "-") {
      $scope.invalid.push("Phone number must match format XXX-XXX-XXXX.");
    };
    var esplit = $scope.email.split('@');
    if (esplit.length !== 2) {
      $scope.invalid.push("Email must follow the format xxx@xxx.xxx.");
    };
    var eperiod = $scope.email.split('.');
    if (eperiod.length !== 2) {
       $scope.invalid.push("Email must follow the format xxx@xxx.xxx.");
    };
    if ($scope.pass1.length < 6) {
      $scope.invalid.push("Password 1 needs to be at least 6 characters.");
    };
    if ($scope.pass2 !== $scope.pass1) {
      $scope.invalid.push("Password 1 needs to match password 2.");
    };
    if ($scope.invalid.length === 0) {
      $scope.success = false;
      $scope.welcome = false;
    }
  }
});