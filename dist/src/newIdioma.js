'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newIdioma;
function newIdioma(str) {

  var strTranslation = str;

  if (str.toLowerCase().endsWith('ar')) {

    strTranslation = str.slice(0, -2);
  }

  if (str.toLowerCase().startsWith('z')) {

    strTranslation += 'pe';
  }

  var length = strTranslation.length;

  if (length >= 10) {

    var firstHalf = strTranslation.slice(0, Math.round(length / 2));
    var secondHalf = strTranslation.slice(Math.round(length / 2));

    strTranslation = firstHalf + '-' + secondHalf;
  }

  if (str == reverse(str)) {

    return minMay(str);
  }

  return strTranslation;
}

var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};

var minMay = function minMay(str) {

  var srtArray = str.split('');
  var newStr = [];
  var length = srtArray.length;

  for (var i = 0; i < length; i++) {

    i % 2 == 0 ? newStr[i] = srtArray[i].toUpperCase() : newStr[i] = srtArray[i].toLowerCase();
  }

  return newStr.join('');
};