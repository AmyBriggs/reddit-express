app.controller('CommentsController', function($scope, PostService, $routeParams, $location, $cookies){

  $scope.post = PostService.posts.get({
    id: $routeParams.id
  }, function(thing) {})

  let cookie = $cookies.getObject('loggedIn')

  PostService.postComment.get({
    id: $routeParams.id
  }, function(comments){
    $scope.comments = comments
  })

  $scope.submitComment = function(comment) {
    if(!cookie) {
      $scope.error = 'Please log in to comment.'
    } else {
      $scope.comment.posts_id = $scope.post.id
      $scope.comment.users_id = cookie.id
      PostService.comments.save(comment, function(selectedComment){
        let newComment = selectedComment[0]
        $scope.comments.push(newComment)
        $scope.comment = {}
        $scope.newComment.$setPristine()

    })
    }
  }

  $scope.delete = function(post) {
    if(!cookie){
      $scope.error = 'You must be logged in to delete.'
    } else if (post.users_id === cookie.id) {
      PostService.posts.delete(post, function(){
        $location.url('/')
      })
    } else {
      $scope.error = 'You must be logged in to delete a post.'
    }
  }

  $scope.deleteComment = function(comment){
    if(!cookie){
      $scope.error = 'Please log in to delete a comment.'
    } else if(comment.users_id === cookie.id){
      PostService.comments.delete(comment, function(){
        let index = $scope.comments.indexOf(comment)
        $scope.comments.splice(index, 1)
      })
    } else {
      $scope.error = 'Please log in to delete a comment.'
    }
  }



})
