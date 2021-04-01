'use strict';

const glides = document.querySelectorAll('.glide');
const swipers = document.querySelectorAll('.swiper-container');
const searchToggle = document.querySelector('.top-panel__search');
const searchPanel = document.querySelector('.top-panel__form');

const ModifierClass = {
  TOGGLE: 'top-panel__search--active',
  PANEL:'is-hidden'
};

if (glides) {
  for (let i = 0; i < glides.length; i++) {
    new Glide(glides[i], {type: 'carousel'}).mount();
  }
}

if (swipers) {
  let sliders = [];
  let isInit = false;

  if (window.innerWidth >= 1200 && !isInit) {
    initSwiper()
  } else if(isInit) {
    destroySwiper();
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200  && !isInit) {
      initSwiper()
    } else if(isInit) {
      destroySwiper();
    }
  })


  function initSwiper() {
    for (let i = 0; i < swipers.length; i++) {
      let swiper = new Swiper(swipers[i], {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });

      sliders.push(swiper);
    };
  }

  function destroySwiper() {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].destroy();
    }
    isInit = false;
  }
  
}

searchToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  this.classList.toggle(ModifierClass.TOGGLE);
  searchPanel.classList.toggle(ModifierClass.PANEL);
})