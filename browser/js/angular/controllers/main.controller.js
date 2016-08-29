(function (angular) {
  var app = angular.module('app');

  app.controller('MainController', ['$scope', 'axisFilter', mainController]);

  function mainController(s) {
    // Create an object factory for this form
    s.form = {
      projectName: 'New project',
      mode: 'execution',
      analysisProgram: 'PLUSH',
      mainAxis: 'x',
      soilStrata: 3,
      offsets: {
        x: '',
        y: '',
        z: ''
      },
      floormap: []
    };

    s.getForm = function () {
      console.log(s.form);
    };
  }
})(angular);