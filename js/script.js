let menu = document.getElementById("menu");
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let close = document.getElementById("mohammadclose");
menu.addEventListener("click", function () {
  menu1.classList.add("active");
  menu1.classList.add("mohammad");
  menu.classList.add("noactive");
  menu1.classList.remove("mohammadclose");
});
close.addEventListener("click", function () {
  menu1.classList.add("mohammadclose");
  menu1.classList.remove("mohammad");

  menu.classList.remove("noactive");
  setTimeout(() => {
    menu1.classList.remove("active");
  }, 300);
});
