// document.addEventListener('scroll', function () {
//   const cards = document.querySelectorAll('.about__card');

//   cards.forEach(card => {
//     const img = card.querySelector('.card-bottom__img');
//     const speed = img.dataset.speed || 0.5; // Вы можете настроить скорость параллакса

//     const offset = window.scrollY * speed;
//     img.style.transform = `translateY(${offset}px)`;
//   });
// });

// document.addEventListener('scroll', function () {
//   const cards = document.querySelectorAll('.about__card');

//   cards.forEach(card => {
//     const img = card.querySelector('.card-bottom__img');
//     const speed = img.dataset.speed || 0.5; // Вы можете настроить скорость параллакса

//     const offset = window.scrollY * speed;
//     img.style.transform = `translateY(-${offset}px)`; // Изменено на отрицательное значение
//   });
// });




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


// тут пралак работает не очень но пусть бцдет 
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
// новый код тут паралакс норм и выключен на мобильных 
// document.addEventListener('scroll', function () {
//   // Проверяем ширину экрана (768px - стандартная точка для мобильных устройств)
//   if (window.innerWidth <= 768) {
//     // На мобильных устройствах возвращаем изображения в центр
//     const cards = document.querySelectorAll('.card-bottom__img');
//     cards.forEach(card => {
//       card.style.transform = 'translate(-50%, -50%)';
//     });
//     return;
//   }

//   const aboutSection = document.querySelector('.about');
//   const cards = aboutSection.querySelectorAll('.card-bottom__img');

//   cards.forEach((card) => {
//     // Получаем позицию карточки относительно окна
//     const rect = card.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;

//     // Вычисляем, насколько элемент находится в поле зрения (от -1 до 1)
//     const inViewport = (viewportHeight / 10 - rect.top) / viewportHeight;

//     const speed = 8; // Увеличили скорость
//     const container = card.closest('.card-bottom__box-img');
//     const containerHeight = container.offsetHeight;
//     const cardHeight = card.offsetHeight;

//     // Максимальное смещение - четверть высоты контейнера
//     const maxOffset = containerHeight / 9;

//     // Вычисляем смещение на основе положения в viewport
//     let yOffset = inViewport * maxOffset * speed;

//     // Ограничиваем смещение
//     yOffset = Math.max(Math.min(yOffset, maxOffset), -maxOffset);

//     // Применяем трансформацию
//     card.style.transform = `translate(-50%, calc(-50% - ${yOffset}px))`;
//   });
// });


// Функция определения мобильного устройства
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener('scroll', function () {
  // Проверяем, является ли устройство мобильным
  if (isMobileDevice()) {
    // На мобильных устройствах возвращаем изображения в центр
    const cards = document.querySelectorAll('.card-bottom__img');
    cards.forEach(card => {
      card.style.transform = 'translate(-50%, -50%)';
    });
    return;
  }

  const aboutSection = document.querySelector('.about');
  const cards = aboutSection.querySelectorAll('.card-bottom__img');

  cards.forEach((card) => {
    // Получаем позицию карточки относительно окна
    const rect = card.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Вычисляем, насколько элемент находится в поле зрения (от -1 до 1)
    const inViewport = (viewportHeight / 10 - rect.top) / viewportHeight;

    const speed = 12; // Увеличили скорость с 8 до 12
    const container = card.closest('.card-bottom__box-img');
    const containerHeight = container.offsetHeight;
    const cardHeight = card.offsetHeight;

    // Максимальное смещение - увеличили делитель для большего диапазона движения
    const maxOffset = containerHeight / 6; // Изменили с 9 на 6 для большего смещения

    // Вычисляем смещение на основе положения в viewport
    let yOffset = inViewport * maxOffset * speed;

    // Ограничиваем смещение
    yOffset = Math.max(Math.min(yOffset, maxOffset), -maxOffset);

    // Применяем трансформацию
    card.style.transform = `translate(-50%, calc(-50% - ${yOffset}px))`;
  });
});


