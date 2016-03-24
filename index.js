(function() {
  'use strict';

  function getPadding(length, padCharacter) {
    length = length ? length : 0;
    padCharacter = padCharacter ? padCharacter : ' ';

    var temp = '';
    for (var i = 0; i < length; i++) {
      temp += padCharacter;
    }
    return temp;
  }

  var _padLeft = function(str, length, padCharacter) {
    str = String(str);
    str = getPadding(length, padCharacter).concat(str);
    return str;
  };

  var _padRight = function(str, length, padCharacter) {
    str = String(str);
    str = str.concat(getPadding(length, padCharacter));
    return str;
  };

  var _padBoth = function(str, length, padCharacter) {
    var padding = getPadding(length, padCharacter);
    return padding.concat(str).concat(padding);
  };

  module.exports = {
    padLeft: _padLeft,
    padRight: _padRight,
    padBoth: _padBoth
  };
})();
