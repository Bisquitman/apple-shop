import Swiper from '../libs/swiper/swiper-bundle.esm.browser.min.js';
import country from './modules/country.js';
import modal from './modules/modal.js';
import timer from './modules/timer.js';
import smoothScroll from './modules/smoothScroll.js';

new Swiper('.goods__block', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation: {
    prevEl: '.goods__arrow_prev',
    nextEl: '.goods__arrow_next',
  },
});

modal();
country();

smoothScroll(document.querySelector('.header__navigation'));
smoothScroll(document.querySelector('.footer__navigation'));
smoothScroll(document.querySelector('.hero__btn'));

timer('2023/09/30 23:59');
