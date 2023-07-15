const header = document.querySelector('.page__header');
const filmreel = document.querySelector('.filmreel');
const wheel = document.querySelector('.wheel');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu_item');
let isMenuOpen = false;
let rotateAngle = 0;
let lastScrollTop = 0;

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
        setTimeout(function() {
            header.classList.remove('page__header_visible');
        }, 1000); 
    });
}


window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > 100) {
    if (currentScrollTop > lastScrollTop) {
      header.classList.remove('page__header_visible');
    } else {
      header.classList.add('page__header_visible');
    }
  } else {
    header.classList.remove('page__header_visible');
  }
  lastScrollTop = currentScrollTop;
});

//lazy loading

const videoElements = document.querySelectorAll(`.youtubeVideo_full`);

const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const videoElement = entry.target;
      const videoSrc = videoElement.getAttribute(`data-src`);
      videoElement.innerHTML = `<iframe  src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      observer.unobserve(videoElement);
    }
  })
});

videoElements.forEach(videoElement => {
  observer.observe(videoElement);
});
