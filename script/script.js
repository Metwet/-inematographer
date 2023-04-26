const filmreel = document.querySelector('.filmreel');
const menu = document.querySelector('.menu');
const wheel = document.querySelector('.wheel');
let isMenuOpen = false;
let rotateAngle = 0;

filmreel.addEventListener('click', () => {
    if(isMenuOpen){
        menu.style.top = "-455px";
        isMenuOpen = false;
        rotateAngle -= 360;
        wheel.style.transform = `rotate(${rotateAngle}deg)`;
    } else {
        menu.style.top = "0";
        isMenuOpen = true;
        rotateAngle += 360;
        wheel.style.transform = `rotate(${rotateAngle}deg)`;
    }
});