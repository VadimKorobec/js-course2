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

// const btn = document.querySelector(".button");

// btn.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// const double = (a) => {
//   return a * 2;
// };
// console.log(double(4));

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectanleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(this.bgColor, this.height, this.width, this.text);
//   }
// }

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// const newSquare = new ColoredRectanleWithText();

// console.log(square.calcArea());
// console.log(long.calcArea());
// console.log(newSquare.showMyProps());

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();

// const foo = function () {
//   console.log("foo -> this", this);
// };

// foo();

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// showTag();
