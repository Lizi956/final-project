let button = document.getElementById("button");
button.addEventListener("click", function () {
  alert("click");
});
let burgerBar = document.getElementById("burgerBar");
let menu = document.getElementById("menu");
burgerBar.addEventListener("click", () => {
  menu.classList.toggle("active");
});
