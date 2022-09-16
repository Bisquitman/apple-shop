import { dataCurrency, showPrice } from './price.js';

const country = () => {
  const countryBtn = document.querySelector('.country__btn');
  const countryWrapper = document.querySelector('.country__wrapper');

  const countryOpen = () => {
    countryWrapper.classList.toggle('country__wrapper_open');
  };
  const countryClose = () => {
    countryWrapper.classList.remove('country__wrapper_open');
  };

  countryBtn.addEventListener('click', countryOpen);

  countryWrapper.addEventListener('click', ({ target }) => {
    if (target.classList.contains('country__choise')) {
      countryBtn.textContent = target.textContent;
      countryClose();
      showPrice(target.dataset.currency);
    }
  });

  new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
      scrollbar: 'country__scrollbar',
      track: 'country__track',
    },
  });
};

export default country;
