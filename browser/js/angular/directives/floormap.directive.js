(function (angular) {
  var app = angular.module('app');

  app.directive('floormap', ['$document', floormap]);

  function floormap($document) {
    return {
      restrict: 'E',
      link: function (s,e,a) {
        console.log('Inside floormap directive');
        console.log(s.msg);
        console.log(s.ctrl.msg);
      },
      controllerAs: 'ctrl',
      controller: ['$scope', function (s){
        s.msg = 'Lalala';
        this.msg = 'Control';
      }]
    };
  }
})(window.angular);