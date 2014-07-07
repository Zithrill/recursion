// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  if (obj === null) {
    return 'null';
  }else if (obj === false) {
    return 'false';
  }else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }else if (Array.isArray(obj)) {
    return '[' + obj.map(function (element) { return stringifyJSON(element); }).join(',') + ']';
  }else if (typeof obj === 'object') {
    var temp = "{" + Object.keys(obj).map(function (key) {
        if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
          return stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
      }).filter(function (n) { return n !== undefined; }).join(',') + "}";
    return temp;
  }
};