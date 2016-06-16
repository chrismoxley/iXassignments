var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http, $route) {
  var url = "http://ixchommies.herokuapp.com/";
  $scope.fail = true;
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" }
  }).then(function(response) {
    $scope.brus = response.data;
    console.log("b", $scope.brus);
  });

  $http({
    method: "GET",
    url: url + "props",
    params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log("p", $scope.props);
  });

  $scope.addProp = function() {
    console.log($scope.newProp);
    console.log($scope.fail)
     if ($scope.newProp === undefined) {
     	$scope.fail = false;
     };
   	 if ($scope.newProp !== undefined) {
   	 	$scope.fail = true;
   	 }
    	$http({
      method: "POST",
      url: url + "props",
      params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" },
      data: {
        props: $scope.newProp.text,
        for: $scope.newProp.receiver.id,
      }
    }).then(function(response) {
       console.log(response.data);
       $scope.newProp = {};
    }).catch(function(response) {
      $scope.error = response.data.message;
    });
  }
  $scope.reloadRoute = function() {
   $route.reload();
}
});


app.controller("MeCtrl", function($scope, $http, $route) {
  var url = "http://ixchommies.herokuapp.com/";
  $scope.fail = true;
  $http({
    method: "GET",
    url: url + "props/me",
    params: { token: "74915b3c19f6ff29c4478667d0b0280e" }
  }).then(function(response) {
    $scope.me = response.data;
    console.log("c", $scope.me);
    console.log(response.data)
  });
	});