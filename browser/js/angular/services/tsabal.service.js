(function (angular) {
  var app = angular.module('app');

  app.factory('tsabal', [tsabalService]);

  // Currently THREE is global but it should not be
  function tsabalService() {
    return require('../../libs/tsabal-client/tsabal');
  }
})(window.angular);