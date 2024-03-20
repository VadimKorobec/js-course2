"use strict";

// const btn = document.querySelector(".btn");
// let timerId;
// let i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;
//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos === 300) {
//       clearInterval(id);
//     } else {
//       pos += 1;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 2000);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("Hello!");
//   i += 1;
// }

// let id = setTimeout(function log() {
//   console.log("Hi!");
//   id = setTimeout(log, 500);
// }, 500);

// function func() {
//   window.smth = "string";
// }

// const showThis = () => {
//   console.log("this is showThis:", this);
// };

// showThis();

// function showThis1() {
//   console.log("this is showThis1:", this);
// }

// showThis1();

// const someRes = getData();
// const node = document.querySelector(".class");

// setInterval(function () {
//   if (node) {
//     node.innerHTML = someRes;
//   }
// }, 1000);

// function autor() {
//   const arr = [];
//   return function inner() {
//     arr.push("Hello");
//     console.log("Hello");
//   };
// }

// const sayHello = autor();

// function createElement() {
//   const div = document.createElement("div");
//   div.id = "test";
//   return div;
// }

// const testDiv = createElement();

// document.body.append(testDiv);

// let user = { name: "Gogo" };

// let map = new WeakMap();

// map.set(user, "data");

// user = null;

// console.log(map.has(user));

// let cashe = new WeakMap();

// function casheUser(user) {
//   if (!cashe.has(user)) {
//     cashe.set(user, Date.now());
//   }

//   return cashe.get(user);
// }

// let lena = { name: "Elena" };
// let gogo = { name: "Gogo" };

// casheUser(lena);
// casheUser(gogo);

// lena = null;

// console.log(cashe.has(lena));
// console.log(cashe.has(gogo));

// let messages = [
//   { text: "Hello", from: "Gogo" },
//   { text: "Hi", from: "Give" },
//   { text: "Good afternon", from: "Jony" },
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// console.log(readMessages);

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i += 1) {
  let some = i ** 3;
}

let end = new Date();

alert(`Loop worked for ${end - start} `);
