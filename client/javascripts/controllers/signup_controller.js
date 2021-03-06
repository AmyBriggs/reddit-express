app.controller('SignupController', function($scope, UserService, $location, $cookies) {


  $scope.submitSignUp = function(newUser) {
    UserService.signup.save(newUser, function(returnedObject) {
      let user = returnedObject[0]
      if (user.length === undefined) {
        $cookies.putObject('loggedIn', user)
        console.log('user', user);
        $scope.newUser = {}
        $scope.signUp.$setPristine()
        $location.url('/')

      } else if (user.length !== 0) {
        $scope.error = user
      }
    })
  }

  $scope.submitLogIn = function(returningUser) {
    UserService.login.save(returningUser, function(returnedObject) {
      console.log('returningUser', returningUser);
      if (!returnedObject.message) {
        $cookies.putObject('loggedIn', returnedObject)
        $location.url('/')
      } else {
        $scope.error = returnedObject.message
      }
    })
  }
})
