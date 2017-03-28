angular.module('directory.controllers', [])
    .controller('indexController', function ($scope, $stateParams, $http, $log) {
      // $http.get("http://www.omdbapi.com/?t=mission")
      // .then(function(response){
      //   $scope.movieDetails = response.data;
      //    $log.debug(response);
      // });
        $scope.fetchData = function(searcKeyValue) {
          $scope.searcKeyValue = searcKeyValue;
          $log.debug($scope.searcKeyValue);
        $scope.url = 'http://www.omdbapi.com/?t=' + $scope.searcKeyValue + '&r=json';
        $http({
             method:"GET",
             url: $scope.url
           })
           .then(function(response){
             $scope.responsevalid = true;
             $scope.movieDetails = response.data;
              $log.debug(response);
           });
        }
    })
    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
        EmployeeService.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
    });
