(function () {
  const headerElement = document.querySelector('.page__header');

  // убирает классы стилей если js не загрузился
  document.addEventListener("DOMContentLoaded", () => {
    headerElement.classList.remove('page__header--no-js');
  });
})();
