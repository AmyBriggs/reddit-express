app.controller("PostsController", function($scope, PostService, $cookies, $location){

  $scope.posts = PostService.posts.query()
  let cookie = $cookies.getObject('loggedIn')


  $scope.sort = "-votes"

  $scope.submitPost = function(post){
    if(cookie){
      $scope.post.votes = 0
      $scope.post.users_id = cookie.id
      console.log('id', cookie.id);
      let newPost = $scope.post
      PostService.posts.save(newPost, function (returnedPost){
        let newPost = returnedPost[0]
        $scope.posts.push(newPost)
        $scope.post = ''
        $scope.newPost.$setPristine()

      })
    } else {
      $scope.error = 'Please log in to create a new post.'
    }
  }

  $scope.votes = function(post){
    if(post.votes > 0){
      return 'positive'
    } else if (post.votes < 0){
      return 'negative'
    } else {
      return 'neutral'
    }
  }

  $scope.upvote = function(post){
    post.votes++
    PostService.posts.update(post, function () {})
  }

  $scope.downvote = function(post){
    post.votes--
    PostService.posts.update(post, function () {})
  }

  $scope.search = ''

})
