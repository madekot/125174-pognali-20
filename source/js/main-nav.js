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

    const switchThemeMainNav = () => {
        mainNavElement.classList.toggle('main-nav--color');

        logoElement.parentElement.classList.toggle('main-nav__logo--size');
        logoElement.classList.toggle('lets-go-logo--color');

        switchMenuButtonElement.classList.toggle('button-close--color');

        siteNavElement.classList.toggle('site-nav--color');
        siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--long-line');
        siteNavElement.querySelector('.site-nav__item').classList.toggle('site-nav__item--line');
    }

    const switchOpenCloseMainNav = () => {
        mainNavElement.classList.toggle('main-nav--close');
        switchMenuButtonElement.classList.toggle('button-close--burger-icon');
        switchMenuButtonElement.parentElement.classList.toggle('main-nav__close-button--size');
    }

    // Переключает классы для открытия/закрытия меню
    switchMenuButtonElement.addEventListener('click', () => {
        switchOpenCloseMainNav();
        switchThemeMainNav();
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0 && !mainNavElement.classList.contains('main-nav--color')) { // переключает тему при скроле
            switchThemeMainNav();
        }

        if (!window.scrollY > 0 && mainNavElement.classList.contains('main-nav--color') && mainNavElement.classList.contains('main-nav--close'))  { // переключает тему при скроле в 0 если меню не открыто
            switchThemeMainNav();
        }
    });
})();
