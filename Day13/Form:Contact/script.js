var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/FormVal_index.html"
  })
  $routeProvider.when("/contacts", {
    templateUrl: "templates/contact_index.html"
  })
});
app.controller("FormCtrl", function($scope){
  $scope.name = "";
  $scope.phone = [];
  $scope.email = [];
  $scope.pass1 = "";
  $scope.pass2 = "";
  $scope.success = true;
  $scope.welcome = true;
  $scope.toggle = true;
  $scope.myStyle = {
    "border": "1pt black solid"
  }
  $scope.link = true;
  $scope.action = function () {
    $scope.invalid = [];
    if ($scope.name === "") {
     $scope.invalid.push("Name must not be blank.");
     $scope.myStyle = {
      "border": "1pt red solid"
    }

  };
  if ($scope.phone[3] !== "-" || $scope.phone[7] !== "-") {
    $scope.invalid.push("Phone number must match format XXX-XXX-XXXX.");
    $scope.myStyle = {
      "border": "1pt red solid"
    }
  };
  var esplit = $scope.email.split('@');
  if (esplit.length !== 2) {
    $scope.invalid.push("Email must follow the format xxx@xxx.xxx, you are missing an @ sign.");
    $scope.myStyle = {
      "border": "1pt red solid"
    }
  };
  var eperiod = $scope.email.split('.');
  if (eperiod.length !== 2) {
   $scope.invalid.push("Email must follow the format xxx@xxx.xxx, you are missing a period.");
   $scope.myStyle = {
    "border": "1pt red solid"
  }
};
if ($scope.pass1.length < 6) {
  $scope.invalid.push("Password needs to be at least 6 characters.");
  $scope.myStyle = {
    "border": "1pt red solid"
  }
};
if ($scope.pass2 !== $scope.pass1) {
  $scope.invalid.push("Password 1 needs to match password 2.");
  $scope.myStyle = {
    "border": "1pt red solid"
  }
};
if ($scope.invalid.length === 0) {
      // $scope.success = false;--->This is to make the validation box disappear, instead of turn green.
      //  $scope.welcome = false;
      // $scope.myStyle = {
      //   "border": "1pt green solid"
      // }
      $scope.link = false;
    }
  }
  $scope.passtoggle = function() {
    if ($scope.toggle === true) {
      $scope.toggle = false;
    }
    else {
      $scope.toggle = true;
    }
  }
  $scope.clear = function() {
    $scope.name = "";
    $scope.phone = [];
    $scope.email = [];
    $scope.pass1 = "";
    $scope.pass2 = "";
    $scope.success = true;
    $scope.welcome = true;
    $scope.toggle = true;
    $scope.myStyle = {
      "border": "1pt black solid"
    }
  }
});

app.controller("ContactCtrl", function($scope){
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