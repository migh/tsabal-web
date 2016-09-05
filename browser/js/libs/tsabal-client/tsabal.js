module.exports = (function () {
  var Tsabal = {  };
  
  Tsabal.help = function () {
    console.debug('Tsabal-client v0.0.1');
  };

  Tsabal.utils = require('./tsabal/utils/utils');

  return Tsabal;
  
})();