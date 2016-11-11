app.controller('EditCommentController', function($scope, PostService, $location, $routeParams, $cookies){

  var id = $routeParams.id

  $scope.id = ''

  let cookie = $cookies.getObject('loggedIn')
  console.log('loggedIn',cookie);

  $scope.editedComment = PostService.comments.get({id: $routeParams.id}, function() {})
  console.log(cookie.id);




  $scope.submitEditedComment = function(comment){
    if(!cookie){
      $scope.error = 'You must be the author to edit this comment.  Please log in.'
    } else if (comment.users_id === cookie.id){
      console.log('user is', user);
      PostService.comments.update(comment, function(){
        $scope.id = comment.posts_id
        $location.url(`/${$scope.id}`)
      })
    } else {
      $scope.error = 'You must be the author to edit this comment.  Please log in.'
    }
  }

  $scope.cancelComment = function(){
    $location.url('/')
  }
})
