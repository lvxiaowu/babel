"use strict";

require("@bable/polyfill");

// import util from "./utils";
// function a(args) {
//   console.log(...args);
//   console.log([...arguments]);
// }
// index.js
var fn = function fn() {
  console.log("wens");
};

var p = new Promise(function (resolve, reject) {
  resolve("wens");
});
var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
});