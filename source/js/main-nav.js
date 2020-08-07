(function () {
    const mainNavElement = document.querySelector('.main-nav');
    const switchMenuButtonElement = document.querySelector('.main-nav__close-button .button-close');
    const logoElement = document.querySelector('.lets-go-logo');
    const siteNavElement = document.querySelector('.site-nav');
    // включает js для блока
    document.addEventListener("DOMContentLoaded", () => mainNavElement.classList.remove('main-nav--no-js'));
    //


    mainNavElement.addEventListener('click', () => {
        mainNavElement.classList.toggle('main-nav--close');
        switchMenuButtonElement.classList.toggle('button-close--burger-icon');
        switchMenuButtonElement.parentElement.classList.toggle('main-nav__close-button--size');
        logoElement.parentElement.classList.toggle('main-nav__logo--size');
        logoElement.classList.toggle('lets-go-logo--color');

        siteNavElement.classList.toggle('site-nav--color');
        siteNavElement.classList.toggle('site-nav__item--long-line');
        // siteNavElement.classList.toggle('site-nav__item--line');
        // siteNavElement.classList.toggle('lets-go-logo--color');

    });
})();