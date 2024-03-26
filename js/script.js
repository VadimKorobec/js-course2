// const inputRub = document.querySelector("#rub");
// const inputUsd = document.querySelector("#usd");

// inputRub.addEventListener("input", () => {
//   const request = new XMLHttpRequest();

//   request.open("GET", "js/current.json");
//   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   request.send();

//   request.addEventListener("load", () => {
//     if (request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputUsd.value = (Number(inputRub.value) / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = "Wrong";
//     }
//   });
// });

// console.log("Запрос данных ,,,");

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных,,,");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Opps you are died");
//   })
//   .finally(() => {
//     console.log("woop woop");
//   });

// const test = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };

// test(1000).then(() => {
//   console.log("Woop Woop");
// });

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   if (canFulfill) {
//     resolve("Resolve");
//   } else {
//     reject("Reject");
//   }
// });

// promise
//   .then((result) => {
//     return result;
//   })
//   .then((result) => {
//     console.log(result + " " + "Woop Woop");
//   })

//   .catch((result) => {
//     console.log(result);
//   });

// const names = ["Ivan", "Anna", "Ksenia", "Voldemart"];

// const newName = names.filter((item) => item.length < 5);

// console.log(newName);

// const answers = ["IvAn", "AnnA", "Hello"];

// const newAnswers = answers.map((item) => item.toLowerCase());

// console.log(newAnswers);

// const some = ["4", "gfgf", "gfgfg"];

// console.log(some.some((item) => typeof item === "number"));

// console.log(some.every((item) => typeof item === "string"));

// const arr = ["apple", "pear", "plum"];

// const total = arr.reduce((acc, item) => {
//   return `${acc}, ${item}`;
// });

// // console.log(total);

// const obj = {
//   ivan: "persone",
//   anna: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// const newArray = Object.entries(obj);
// const newArry1 = newArray
//   .reduce((acc, item) => {
//     return acc.concat(item);
//   }, [])
//   .filter((item) => item.length === 4);
// console.log(newArry1);

// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//   const rating = arr.filter((item) => item.rating >= 8);
//   console.log(rating);
// }

// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
//   const string = arr.map((item, i) => {
//     item.id = i;
//     return item;
//   });
//   console.log(string);
// }

// console.log(showListOfFilms(films));

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  const total = data.map((item) => item[1] >= 0);

  console.log(total);
};

console.log(getPositiveIncomeAmount(funds));
