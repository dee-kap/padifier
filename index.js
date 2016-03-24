'use strict';

module.exports = {
  padLeft: function(str, length, padCharacter) {
    str = String(str);
    length = length ? length : 0;
    padCharacter = padCharacter ? padCharacter : ' ';

    var temp = '';
    for (var i = 0; i < length; i++) {
      temp += padCharacter;
    }
    str = temp.concat(str);

    return str;
  },

  padRight: function() {
  }
};


