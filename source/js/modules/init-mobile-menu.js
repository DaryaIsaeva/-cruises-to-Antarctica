const menuToggle = document.querySelector('[data-main-nav="toggle"]');
const mainNav = document.querySelector('[data-main-nav]');
const mainWrapper = document.querySelector('[data-wrapper]');
const headerContainer = document.querySelector('[data-header="container"]');
const mainBlockTitle = document.querySelector('[data-main-block="title"]');
const mainBlockText = document.querySelector('[data-main-block="text"]');

const onMenuToggleClick = () => {
  mainNav.classList.toggle('is-open');
  mainWrapper.classList.toggle('open-mobile-menu');
  headerContainer.classList.toggle('header__mobile-menu-container');
  mainBlockTitle.classList.toggle('visually-hidden');
  mainBlockText.classList.toggle('visually-hidden');
};

const initMobileMenu = () => {
  if (menuToggle) {
    menuToggle.addEventListener('click', onMenuToggleClick);
  }

  document.addEventListener('click', (evt) => {
    const withinBoundaries = evt.composedPath().includes(mainNav);
    if (!withinBoundaries) {
      onMenuToggleClick();
    }
  });
};

export {initMobileMenu};
