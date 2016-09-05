(function (angular) {
  var app = angular.module('app',['ui.bootstrap.tabs']);

  app.config(function () {
    console.debug('App is running');
  });

  app.constant('STATIC',{
    VERSION: '0.3.0'
  });

})(angular);

require('./services/fileManager.service');
require('./services/threejs.service');
require('./services/tsabal.service');

require('./controllers/main.controller');

require('./directives/threeangular.directive');
require('./directives/floormap.directive');
