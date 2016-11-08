app.controller('SignupController', function($scope, UserService, $location) {

  $scope.submitSignup = function(newUser) {
    UserService.signup.save(newUser, function(userInfo){
      let user = userInfo[0]
      $scope.newUser = {}
      $scope.signUp.$setPristine()
      $location.url('/')
    })
  }

  $scope.submitLogin = function(regUser){
    UserService.login.save(regUser, function (regUserInfo){
      $location.url('/')
    })
  }



})
