/* eslint-disable */
const LOGO = document.querySelector('.logo');
const LOGOMENU = document.querySelector('.logo__menu');
const BUTTON = document.querySelector('.menu-button');
const NAVIGATION = document.querySelector('.main-navigation__header');
const HEADER = document.querySelector('.page-header__content');
const WRAPPER = document.querySelector('.wrapper');
const BODY = document.querySelector('body');
const ANCHORS = document.querySelectorAll('a[href*="#"]');
const NAVIGATIONLINK = document.querySelectorAll('.main-navigation__link--mobile');

// --------------------------------MOBILE MENU-----------------------------------------------------

NAVIGATION.classList.remove('main-navigation__header--nojs');
LOGO.classList.remove('logo--nojs');
HEADER.classList.remove('page-header__content--nojs');
NAVIGATION.classList.add('main-navigation__header--close');
LOGOMENU.classList.remove('logo__menu--nojs');

function openCloseMenu() {
  NAVIGATION.classList.toggle('main-navigation__header--close');
  BODY.classList.toggle('overlay');
  WRAPPER.classList.toggle('wrapper--overlay');
  LOGOMENU.classList.toggle('logo__menu--open');
  LOGO.classList.toggle('logo--hidden');
  BUTTON.classList.toggle('menu-button--burger');
  BUTTON.classList.toggle('menu-button--open');
}

BUTTON.addEventListener('click', openCloseMenu);

WRAPPER.addEventListener('click', (e) => {
  if (WRAPPER.classList.contains('wrapper--overlay')) {
    let clickNavigation = e.composedPath().includes(NAVIGATION);
    let clickButton = e.composedPath().includes(BUTTON);
    if (!clickNavigation && !clickButton) {
      openCloseMenu();
    }
  }
});

for (let navLink of NAVIGATIONLINK) {
  if (NAVIGATION.classList.contains('main-navigation__header--close')) {
    navLink.addEventListener('click', openCloseMenu);
  } else {
    navLink.removeEventListener('click', openCloseMenu);
  }
}

// -----------------SCROLL SPEED--------------------------

for (let anchor of ANCHORS) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const BLOCKID = anchor.getAttribute('href').substr(1);

    document.getElementById(BLOCKID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
