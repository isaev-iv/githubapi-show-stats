document.addEventListener("DOMContentLoaded", render);
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

let tasks = [];

const handleClickAdd = () => {
  if (input.value === "") return;
  tasks.push(input.value);
  render(tasks);
  input.value = "";
};
const handleClickRemove = (index) => {
  tasks.splice(index, 1);
  render(tasks);
};

function render(arr) {
  result.innerHTML = "";
  tasks.forEach((item, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.className = "li";
    btn.className = "delete__btn";
    li.innerHTML = item;
    btn.innerHTML = "X";
    result.appendChild(li);
    li.append(btn);
    btn.onclick = () => {
      handleClickRemove(btn.getAttribute("index"));
    };
  });
}

btn.addEventListener("click", handleClickAdd);
