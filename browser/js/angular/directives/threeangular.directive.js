(function (angular) {
  var app = angular.module('app');

  app.directive('threeangular', ['$document', 'three', 'fileManager', threeangular]);

  function threeangular($document, three, fileManager) {
    return function (s,e,a) {
      // Put all this into a controller for testing
      var webglContainer = $document[0].createElement('canvas');
      webglContainer.setAttribute('class','webgl-container');

      angular.element(webglContainer).css({
        width: '925px',
        height: '400px'
      });

      three.setDefaultContext(webglContainer);
      e[0].appendChild(webglContainer);

      three.startPipeline();
      fileManager.getTestData().then(function (res){
        console.log(res.data);
      }, function (res) {
        console.error('Error');
      });
    };
  }
})(window.angular);