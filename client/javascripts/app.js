var app = angular.module("redditExpress", ['ngAnimate', 'ngRoute', 'ngResource', 'ngCookies'])

app.config(function($httpProvider){
  $httpProvider.defaults.withCredentials = true
})

app.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false
}])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../views/posts.html',
      controller: 'PostsController'
    })

    .when('/logout', {
      templateUrl: '../views/logout.html',
      controller: 'LogoutController'
    })

    .when('/login', {
      templateUrl: '../views/login.html',
      controller: 'SignupController'
    })

    .when('/signup', {
      templateUrl: '../views/signup.html',
      controller: 'SignupController'
    })

    .when('/:id', {
      templateUrl: '../views/comments.html',
      controller: 'CommentsController'
    })

    .when('/edit_post/:id', {
      templateUrl: '../views/edit_post.html',
      controller: 'EditPostController'
    })

    .when('/edit_comment/:id', {
      templateUrl: '../views/edit_comment.html',
      controller: 'EditCommentController'
    })
})
