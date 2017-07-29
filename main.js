var App = angular.module("FormApp", [ 'ngMessages' ]);
App.controller("FormController", function ($scope) {


    $scope.usersArray = [];
    $scope.user = {

        fullname: '',
        name: '',
        email: '',
        password: '',
    };

    $scope.passstr = "";
   $scope.selectedRow = null;
          
      
      
    $scope.submitForm = function () {

        if ($scope.userForm.$valid) {

            $scope.object = JSON.parse(JSON.stringify($scope.user));

            $scope.usersArray.push($scope.object);
            $scope.user = {};
            $scope.passstr = "";

            $scope.userForm.$setPristine();
        }
    
    };



$scope.analyze = function(data){
  
  var count = 0;

  var tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Z-0-9]/i];

for(var i in tests){
console.log(tests[i].test(data));

    if(tests[i].test(data))
      count++;
}
if(count == '1')
{
    $scope.passstr = "week";
}else if (count == '2'){
    $scope.passstr = "Average";
}else if(count == "3"){
$scope.passstr = "Good";
}else if(count == "4"){
$scope.passstr = "Strong";
}
};



  $scope.editSelect = function (users) {
     $scope.user = users;

     var index = $scope.usersArray.indexOf(users);
     $scope.usersArray.splice(index, 1);
  };

 $scope.deleteSelect = function (users) {
    var index = $scope.usersArray.indexOf(users);
     $scope.usersArray.splice(index, 1);
  };



});
