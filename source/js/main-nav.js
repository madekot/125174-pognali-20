(function () {
    const mainNavElement = document.querySelector('.main-nav');
    const switchMenuButtonElement = document.querySelector('.main-nav__close-button .button-close');
    const logoElement = document.querySelector('.lets-go-logo');
    const siteNavElement = document.querySelector('.site-nav');

    // Переключает классы стилей для переключения меню с js
    document.addEventListener("DOMContentLoaded", () => {
      mainNavElement.classList.remove('main-nav--no-js');
      logoElement.parentElement.classList.toggle('main-nav__logo--size');
      logoElement.classList.toggle('lets-go-logo--color');

      siteNavElement.classList.toggle('site-nav--color');
      siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--long-line');
      siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--line');
    });
    //

    // Переключает классы для открытия/закрытия меню
    switchMenuButtonElement.addEventListener('click', () => {
        mainNavElement.classList.toggle('main-nav--close');
        switchMenuButtonElement.classList.toggle('button-close--burger-icon');
        switchMenuButtonElement.parentElement.classList.toggle('main-nav__close-button--size');
        switchMenuButtonElement.classList.toggle('button-close--color');
        logoElement.parentElement.classList.toggle('main-nav__logo--size');
        logoElement.classList.toggle('lets-go-logo--color');

        siteNavElement.classList.toggle('site-nav--color');
        siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--long-line');
        siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--line');
    });
})();
