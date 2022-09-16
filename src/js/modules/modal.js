const modal = () => {
  const productMore = document.querySelectorAll('.product__more');
  const modal = document.querySelector('.modal');

  const modalOpen = () => {
    modal.classList.add('modal_open');
    window.removeEventListener('keyup', modalClose);
  };

  const modalClose = (event) => {
    if (
      (event.type === 'keyup' && event.key === 'Escape') ||
      (event.type === 'click' && event.target === modal)
    ) {
      modal.classList.remove('modal_open');
    }
  };

  productMore.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOpen();
      window.addEventListener('keyup', modalClose);
    });
  });

  modal.addEventListener('click', modalClose);
};

export default modal;
