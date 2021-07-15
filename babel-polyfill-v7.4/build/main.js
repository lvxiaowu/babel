"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

// index.js
var fn = function fn() {
  console.log("wens");
};

var p = new Promise(function (resolve, reject) {
  resolve("wens");
});
var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
}); // index.js
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     say() {
//       console.log(this.name);
//     }
//   }