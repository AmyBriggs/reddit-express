app.controller('EditPostController', function($scope, PostService, $routeParams, $location, $cookies){

    let id = $routeParams.id

    let cookie = $cookies.getObject('loggedIn')

    $scope.editPost = PostService.posts.get({
      id: $routeParams.id
    }, function() {})

    $scope.submitEditPost = function(post) {
      if(!cookie){
        $scope.error = 'Please log in to edit post.'
      } else if(post.users_id !== cookie.id){
        $scope.error = 'Please log in to edit post.'
      } else {
        PostService.posts.update(post, function(returnedPost){
          $location.url(`/${id}`)
        })
      }
    }

    $scope.cancelPost = function() {
      $location.url(`/${id}`)
    }

})
