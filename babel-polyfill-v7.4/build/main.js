"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
Object.assign({}, {
  a: 1,
  b: 2
});
Array.isArray([]);
new Promise();