(function (angular) {
  var app = angular.module('app');

  app.filter('axis', [axisFilter]);

  function axisFilter() {
    console.log('Filter loaded');
    return function (input) {
      return 'Molcajetes';
    }
  }
})(angular);