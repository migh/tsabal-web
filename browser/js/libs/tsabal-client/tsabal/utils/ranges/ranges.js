module.exports = (function () {

  function Range(){
    console.log('This is a new range.');
  }

  Range.prototype = {

  };

  Range.prototype.clone = {

  };
  
  var ranges = {
    Range: Range
  };

  return ranges;

})();