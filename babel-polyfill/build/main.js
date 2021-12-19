"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

require("core-js/modules/es7.array.includes");

// useBuiltIns:entry ,需要手动引入  import '@bable/polyfill';
// import '@bable/polyfill';
var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
(0, _assign.default)({}, {
  a: 1,
  b: 2
});
(0, _isArray.default)([]);
new _promise.default();