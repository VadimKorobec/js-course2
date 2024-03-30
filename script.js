"use strict";

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "span",
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);
    if (!blockObj.id) {
      throw new Error(`${i} id is empty`);
    }
    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// const error = new Error("error");
// console.log(error.name, error.message, error.stack);
