const header = document.querySelector('.page__header');
const filmreel = document.querySelector('.filmreel');
const wheel = document.querySelector('.wheel');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu_item');
let isMenuOpen = false;
let rotateAngle = 0;

function closeMenu() {
    menu.style.top = "-455px";
    isMenuOpen = false;
    rotateAngle -= 360;
    wheel.style.transform = `rotate(${rotateAngle}deg)`;
}

function openMenu() {
    menu.style.top = "0";
    isMenuOpen = true;
    rotateAngle += 360;
    wheel.style.transform = `rotate(${rotateAngle}deg)`;
}

filmreel.addEventListener('click', () => {
    if(isMenuOpen){
        closeMenu();
    } else {
        openMenu();
    }
});

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        closeMenu();
    });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('page__header_visible');
  } else {
    header.classList.remove('page__header_visible');
  }
});