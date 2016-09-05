(function (angular) {
  var app = angular.module('app');

  app.factory('fileManager', ['$http', fileManagerService]);

  // Currently THREE is global but it should not be
  function fileManagerService($http) {
    return {
      getTestData: function () {
        return $http.get('/testnodes.json');
      },
      saveAsJSON: function (jsonObject) {
        var content = angular.toJson(jsonObject);

        var textFileAsBlob = new Blob([content], {type:'application/json'});

        var downloadLink = document.createElement("a");
        downloadLink.download = 'malledi.json';
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null)
        {
          // Chrome allows the link to be clicked
          // without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else
        {
          // Firefox requires the link to be added to the DOM
          // before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.onclick = function(e){
            document.body.removeChild(event.target);
          };
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
        }

        downloadLink.click();
      }
    }
  }
})(window.angular);