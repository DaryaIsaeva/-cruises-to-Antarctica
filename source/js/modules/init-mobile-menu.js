const menuToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const mainWrapper = document.querySelector('.wrapper');
const headerContainer = document.querySelector('.header .container');

const initMobileMenu = () => {
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('main-nav--open');
      mainWrapper.classList.toggle('open-mobile-menu');
      headerContainer.classList.toggle('header__mobile-menu-container');
    });
  }
};

export {initMobileMenu};
