const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const change = document.querySelector("#color");

if (localStorage.getItem("checked")) {
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("checked", true);
});

if (localStorage.getItem("bg")) {
  change.style.backgroundColor = "tomato";
}

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "white";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "green";
  }
});

const persone = {
  name: "Alex",
  age: 25,
};

localStorage.setItem("Alex", JSON.stringify(persone));

const person = JSON.parse(localStorage.getItem("Alex"));

console.log(person);
