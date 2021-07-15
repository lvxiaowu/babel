// import util from "./utils";

// function a(args) {
//   console.log(...args);
//   console.log([...arguments]);
// }

import "@bable/polyfill";
// index.js
const fn = () => {
    console.log("wens");
  };
  const p = new Promise((resolve, reject) => {
    resolve("wens");
  });
  const list = [1, 2, 3, 4].map(item => item * 2);
  