app.controller('CommentsController', function($scope, PostService, $routeParams, $location){

  $scope.post = PostService.posts.get({
    id: $routeParams.id
  }, funcction(foo) {})

  PostService.postComment.get({
    id: $routeParams.id
  }, function(comments){
    $scope.comments = comments
  })

  $scope.submitComment = function(comment) {
    $scope.comment.posts_id = $scope.post.id
    $scope.comment.users_id = id
    PostService.comments.save(comment, function(selectedComment){
      let newComment = selectedComment[0]
      $scope.comments.push(newComment)
      $scope.comment = []
      $scope.newComment.$setPristine()
    })
  }

  $scope.delete = function(post) {
    PostService.posts.delete(post, function() {
      $location.url('/')
    })
  }

})
