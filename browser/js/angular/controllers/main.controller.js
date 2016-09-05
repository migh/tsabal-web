(function (angular) {
  var app = angular.module('app');

  app.controller('MainController', ['$scope', 'tsabal', mainController]);

  function mainController(s, T) {

    var Range = new T.utils.ranges.Range();

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
    
    s.test = [1.33, 2.56, 6.65, 9.99];

    s.getForm = function () {
      console.log(s.form);
    };
  }
})(angular);