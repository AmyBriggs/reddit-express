app.controller('EditCommentController', function($scope, PostService, $location, $routeParams, $cookies){

  var id = $routeParams.id

  $scope.id = ''

  let cookie = $cookies.getObject('loggedIn')

  $scope.editedComment = PostService.comments.get({id: $routeParams.id}, function() {})

  $scope.submitEditedComment = function(comment){
    if(!cookie){
      $scope.error = 'Please log in to edit comment.'
    } else if (comment.users_id === cookie.id){
      PostService.comments.update(comment, function(){
        $scope.id = comment.posts_id
        $location.url(`/${$scope.id}`)
      })
    } else {
      $scope.error = 'Please log in to edit comment.'
    }
  }

  $scope.cancelComment = function(){
    $location.url('/')
  }
})
