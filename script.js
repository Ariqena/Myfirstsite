const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () =>{
  menu.classList.toggle("active");
});
document.querySelectorAll('.footer-menu > li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.submenu').style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('.submenu').style.display = 'none';
  });
});
