



// document.addEventListener('scroll', function () {
//   const aboutSection = document.querySelector('.about');
//   const cards = aboutSection.querySelectorAll('.card-bottom__img');

//   const scrollPosition = window.scrollY - aboutSection.offsetTop;

//   cards.forEach((card) => {
//     const speed = 0.5; // Настройте скорость параллакса
//     const cardHeight = card.offsetHeight; // Высота изображения
//     const aboutHeight = aboutSection.offsetHeight; // Высота блока about
//     const bottomBoundary = aboutHeight - cardHeight; // Нижняя граница блока
//     const topBoundary = 0; // Верхняя граница блока

//     // Вычисляем смещение
//     let yOffset = scrollPosition * speed;

//     // Проверяем, достигло ли изображение нижней границы блока
//     if (scrollPosition > bottomBoundary) {
//       yOffset = bottomBoundary; // Останавливаем движение вниз
//     }

//     // Проверяем, достигло ли изображение верхней границы блока
//     if (scrollPosition < topBoundary) {
//       yOffset = 0; // Останавливаем движение вверх
//     }

//     card.style.transform = `translate(-50%, calc(-50% - ${yOffset}px))`; // Применяем смещение
//   });
// });




// библиотека паралакс
// Initialize simpleParallax
document.addEventListener('DOMContentLoaded', function () {
  // Get all images with parallax class
  var images = document.querySelectorAll('.thumbnail');

  // Initialize simpleParallax with options
  new simpleParallax(images, {
    delay: 0.5,
    orientation: 'up',
    overflow: false,
    customContainer: document.querySelector('.card-bottom__box-img'),
    // scale: 1.1,
    transition: 'ease'
  });
});
