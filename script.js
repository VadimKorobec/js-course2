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
