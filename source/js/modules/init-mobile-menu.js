const menuToggleButton = document.querySelector('[data-main-nav="toggle"]');
const mainNav = document.querySelector('[data-main-nav]');
const mainWrapper = document.querySelector('[data-wrapper]');
const headerContainer = document.querySelector('[data-header="container"]');
const mainNavLink = document.querySelectorAll('[data-main-nav="link"]');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onMainNavLinkClick = () => {
  mainNav.classList.remove('is-open');
  mainWrapper.classList.remove('open-mobile-menu');
  headerContainer.classList.remove('header__mobile-menu-container');
};

const toggleMenu = () => {
  mainNav.classList.toggle('is-open');
  mainWrapper.classList.toggle('open-mobile-menu');
  headerContainer.classList.toggle('header__mobile-menu-container');
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt) && mainNav.classList.contains('is-open')) {
    evt.preventDefault();
    toggleMenu();
  }
};

const initMobileMenu = () => {
  if (menuToggleButton) {
    menuToggleButton.addEventListener('click', (evt) => {
      evt.stopPropagation();
      toggleMenu();
    });
  }

  mainNavLink.forEach((link) => {
    link.addEventListener('click', onMainNavLinkClick);
  });

  document.addEventListener('click', (evt) => {
    const target = evt.target;
    const isMenu = target === mainNav || mainNav.contains(target);
    const isMenuToggleButton = target === menuToggleButton;
    const menuIsOpen = mainNav.classList.contains('is-open');

    if (!isMenu && !isMenuToggleButton && menuIsOpen) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', onEscKeydown);
};

export {initMobileMenu};
