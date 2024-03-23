"use strict";

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function () {
//   console.log(`User ${this.name} left `);
// };

// const gogo = new User("Gogo", 34);
// const givi = new User("Givi", 42);

// gogo.exit();

// console.log(gogo.hello());
// console.log(givi.hello());

// function showThis(a, b) {
//   console.log("showThis", this);
//   function sum() {
//     console.log("sum", this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum() {
//     console.log(this);
//   },
// };

// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// let gogo = new User("Gogo", 40);

// function sayName() {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: "Gogo",
// };

// sayName.call(user);

const btn = document.querySelector(".button");

btn.addEventListener("click", (e) => {
  console.log(e.target);
});

const double = (a) => {
  return a * 2;
};
console.log(double(4));
