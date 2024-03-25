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

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

test(1000).then(() => {
  console.log("Woop Woop");
});
