// index.js
const fn = () => {
  console.log("wens");
};
const p = new Promise((resolve, reject) => {
  resolve("wens");
});
const list = [1, 2, 3, 4].map((item) => item * 2);


// index.js
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     say() {
//       console.log(this.name);
//     }
//   }