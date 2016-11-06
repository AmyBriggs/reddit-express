var app = angular.module("redditExpress", ['ngRoute', 'ngAnimate'])

app.controller('mainController', function($scope) {
  $scope.greeting = 'hello'
})
