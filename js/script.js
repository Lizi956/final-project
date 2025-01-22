
let button = document.getElementById("button");

button.addEventListener("click", function () {
  alert("click");
});


const burgerBar = document.getElementById('burgerBar');
const menu = document.getElementById('menu');

// Toggle menu visibility on burger click
burgerBar.addEventListener('click', () => {
    menu.classList.toggle('active');
});