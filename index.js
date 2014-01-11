var EOL = require('os').EOL,
    trimSpace = /\s+$/g;

var normalize = function(input) {
  return input.replace('\r\n', '\n').replace('\n', EOL);
}

var kw = function(input) {
  return normalize(input).split(EOL).map(function(line) {
    return line.replace(trimSpace, '');
  }).join(EOL);
}

if (typeof module !== 'undefined') module.exports = kw;
