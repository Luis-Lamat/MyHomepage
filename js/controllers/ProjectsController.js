app.controller('ProjectsController', ['$scope', function($scope){

  $scope.projects = [{
    name: "CIAC Web",
    start: new Date('2014', '06'),
    finish: new Date('2015', '04'),
    company: 'UKKO Solutions',
    description: 'This is a sample description'
  },
  {
    name: "EcoCarSpa",
    start: new Date('2014', '10'),
    finish: new Date('2015', '01'),
    company: 'UKKO Solutions',
    description: 'This is a sample description'
  }];

}]);
