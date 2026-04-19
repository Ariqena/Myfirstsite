const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  
  console.log('test')
  menu.classList.toggle("active");
});
