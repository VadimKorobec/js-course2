// const checkbox = document.querySelector("#checkbox");
// const form = document.querySelector("form");
// const change = document.querySelector("#color");

// if (localStorage.getItem("checked")) {
//   checkbox.checked = true;
// }

// checkbox.addEventListener("change", () => {
//   localStorage.setItem("checked", true);
// });

// if (localStorage.getItem("bg")) {
//   change.style.backgroundColor = "tomato";
// }

// change.addEventListener("click", () => {
//   if (localStorage.getItem("bg") === "changed") {
//     localStorage.removeItem("bg");
//     form.style.backgroundColor = "white";
//   } else {
//     localStorage.setItem("bg", "changed");
//     form.style.backgroundColor = "green";
//   }
// });

// const persone = {
//   name: "Alex",
//   age: 25,
// };

// localStorage.setItem("Alex", JSON.stringify(persone));

// const person = JSON.parse(localStorage.getItem("Alex"));

// console.log(person);

// const ans = prompt("Your name");

// const reg = /\d/;

// console.log(ans.match(reg));

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(reg, "*"));

// console.log("12-34-56".replace(/-/g, ":"));

// const str = "My name is R2D2";

// console.log(str.replace(/\W/gi, ":"));

// const user = {
//   name: "Alex",
//   age: 25,

//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   },
// };

// console.log((user.userAge = 30));
// console.log(user.age);

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Kozachenko";

  say() {
    console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Ups...");
    }
  }
}

const ivan = new User("Ivan", 25);
console.log(ivan.surname);

ivan.say();
