var myApp = angular.module('myApp', ['infinite-scroll']);
myApp.controller('DemoController', function($scope) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
  // $scope.images = [1,2,3];

  $scope.loadMore = function() {
    console.log("Scope Length " + JSON.stringify($scope.images.length));
    var last = $scope.images[$scope.images.length - 1];
    // for(var i = 1; i <= 8; i++) {
    for(var i = 1; i <= 8; i++) { 
      $scope.images.push(last + i);
    console.log("Length: " + JSON.stringify($scope.images.length));
    }
  };
  // console.log("Length:" + JSON.stringify($scope.images.length));
})