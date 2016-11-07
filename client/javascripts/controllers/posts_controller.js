app.controller("PostsController", function($scope, PostService, $location){

  $scope.posts = PostService.posts.query()

  $scope.sort = "-votes"

  $scope.submitPost = function(post){
    $scope.post.votes = 0
    $scope.post.users_id = id
    let newPost = $scope.post
    PostService.posts.save(newPost, function (returnedPost){
      let newPost = returnedPost[0]
      $scope.posts.push(newPost)
      $scope.post = ''
      $scope.newPost.$setPristine()
    })
  }
  // else {
  //   $scope.error = 'Please log in to create a post.'
  // }

  // $scope.votes = function(post){
  //   if(post.votes > 0) {
  //     return 'up'
  //   } else if(post.votes < 0) {
  //     return 'down'
  //   } else {
  //     return 'same'
  //   }
  // }

  $scope.upvote = function(post){
    post.votes++
    PostService.post.update(post, function () {})
  }

  $scope.downvote = function(post){
    post.votes--
    PostService.post.update(post, function () {})
  }

  $scope.search = ''

})
