
// страй коод модалки рабочий
// const modalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');


//   modalElem.style.cssText = `
// display: flex;
// visibility: hidden;
// opacity:0;
// transition: opacity 300ms ease-in-out;
// z-index: -1;
// `;

//   const closeModal = event => {
//     const target = event.target;
//     if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';

//       }, 100);
//       window.removeEventListener('keydown', closeModal)

//     }
//   }

//   const openModal = () => {
//     modalElem.style.visibility = 'visible';
//     modalElem.style.opacity = 1;
//     modalElem.style.zIndex = 1;
//     window.addEventListener('keydown', closeModal)

//   };
//   buttonElement.addEventListener('click', openModal);
//   modalElem.addEventListener('click', closeModal);
// }
// modalController()



// новый код с моделки с отслежванием клика ка пределами
// const modalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');


//   modalElem.style.cssText = `
// display: flex;
// visibility: hidden;
// opacity:0;
// transition: opacity 300ms ease-in-out;
// z-index: -1;
// `;

//   const closeModal = event => {
//     const target = event.target;
//     if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';

//       }, 100);
//       window.removeEventListener('keydown', closeModal)

//     }
//   }

//   const openModal = () => {
//     modalElem.style.visibility = 'visible';
//     modalElem.style.opacity = 1;
//     modalElem.style.zIndex = 1;
//     window.addEventListener('keydown', closeModal)

//   };
//   buttonElement.addEventListener('click', openModal);
//   modalElem.addEventListener('click', closeModal);
// }

// // Расширяем функционал без изменения исходного кода
// const extendModalController = () => {
//   // Получаем те же элементы, что и в оригинальном коде
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');

//   // Функция закрытия модального окна при клике за его пределами
//   const handleOutsideClick = (event) => {
//     if (modalElem.style.opacity === '1' &&
//       !modalElem.contains(event.target) &&
//       !buttonElement.contains(event.target)) {
//       // Имитируем закрытие как в оригинальном коде
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';
//       }, 100);

//       // Удаляем обработчики
//       document.removeEventListener('mousedown', handleOutsideClick);
//       document.removeEventListener('touchstart', handleOutsideClick);
//     }
//   };

//   // Расширяем функционал открытия модального окна
//   buttonElement.addEventListener('click', () => {
//     // Добавляем обработчики для отслеживания кликов вне модального окна
//     setTimeout(() => {
//       document.addEventListener('mousedown', handleOutsideClick);
//       document.addEventListener('touchstart', handleOutsideClick);
//     }, 10);
//   });
// };

// modalController();
// extendModalController();





// это новый код когда наводишь на кнопку то появляется каталог

// const modalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');


//   modalElem.style.cssText = `
// display: flex;
// visibility: hidden;
// opacity:0;
// transition: opacity 300ms ease-in-out;
// z-index: -1;
// `;

//   const closeModal = event => {
//     const target = event.target;
//     if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';

//       }, 100);
//       window.removeEventListener('keydown', closeModal);
//       // Удаляем обработчик клика вне модального окна
//       document.removeEventListener('click', handleOutsideClick);
//     }
//   }

//   // Обработчик клика вне модального окна
//   const handleOutsideClick = (event) => {
//     // Проверяем, что это клик (не mouseleave или наведение)
//     if (event.type === 'click') {
//       // Если модальное окно видимо и клик был вне его и не на кнопку открытия
//       if (modalElem.style.opacity === '1' &&
//         !modalElem.contains(event.target) &&
//         !buttonElement.contains(event.target)) {
//         // Закрываем модальное окно
//         modalElem.style.opacity = 0;
//         modalElem.style.zIndex = -1;
//         setTimeout(() => {
//           modalElem.style.visibility = 'visible';
//         }, 100);

//         // Удаляем обработчик клика
//         document.removeEventListener('click', handleOutsideClick);
//       }
//     }
//   };

//   const openModal = () => {
//     modalElem.style.visibility = 'visible';
//     modalElem.style.opacity = 1;
//     modalElem.style.zIndex = 1;
//     window.addEventListener('keydown', closeModal);

//     // Добавляем обработчики для отслеживания кликов вне модального окна
//     // Небольшая задержка, чтобы не сработало сразу после открытия
//     setTimeout(() => {
//       document.addEventListener('click', handleOutsideClick);
//     }, 10);
//   };

//   // Проверяем ширину экрана - на мобильных будет открытие по клику
//   if (window.innerWidth < 1200) {
//     buttonElement.addEventListener('click', openModal);
//   }
//   modalElem.addEventListener('click', closeModal);
// }

// modalController();

// // Добавляем функциональность открытия каталога при наведении на больших экранах
// const hoverModalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');
//   let isHovering = false;
//   let timeout;

//   // Проверка ширины экрана
//   function isDesktop() {
//     return window.innerWidth >= 1200;
//   }

//   // Функция открытия модального окна при наведении
//   const openModalOnHover = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);

//       modalElem.style.visibility = 'visible';
//       modalElem.style.opacity = 1;
//       modalElem.style.zIndex = 1;

//       // Добавляем обработчик для закрытия при клике вне модального окна
//       // Используем глобальный обработчик клика с проверкой, что клик был вне модального окна
//       setTimeout(() => {
//         if (!document.querySelector('.click-handler-active')) {
//           document.body.classList.add('click-handler-active');
//           document.addEventListener('click', function handleClick(event) {
//             // Проверяем, что клик не на модальном окне и не на кнопке
//             if (!modalElem.contains(event.target) && !buttonElement.contains(event.target)) {
//               modalElem.style.opacity = 0;
//               modalElem.style.zIndex = -1;
//               setTimeout(() => {
//                 modalElem.style.visibility = 'visible';
//               }, 100);
//               document.removeEventListener('click', handleClick);
//               document.body.classList.remove('click-handler-active');
//             }
//           });
//         }
//       }, 10);
//     }
//   };

//   // Функция не закрывает модальное окно при уходе курсора, а только отслеживает состояние
//   const handleMouseLeave = () => {
//     if (isDesktop()) {
//       isHovering = false;
//     }
//   };

//   // Функция отслеживания наведения на модальное окно
//   const handleModalEnter = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);
//     }
//   };

//   // Активируем обработчики только на десктопе
//   if (isDesktop()) {
//     // Обработчики для кнопки
//     buttonElement.addEventListener('mouseenter', openModalOnHover);
//     buttonElement.addEventListener('mouseleave', handleMouseLeave);

//     // Обработчики для модального окна
//     modalElem.addEventListener('mouseenter', handleModalEnter);
//     modalElem.addEventListener('mouseleave', handleMouseLeave);

//     // Убираем обработчик клика с кнопки на десктопе
//     buttonElement.removeEventListener('click', openModal);
//   }

//   // Отслеживаем изменение размера окна
//   window.addEventListener('resize', () => {
//     const isDesktopNow = window.innerWidth >= 1200;

//     // Если изменился тип устройства
//     if (isDesktopNow !== (buttonElement.getAttribute('data-hover-enabled') === 'true')) {
//       if (isDesktopNow) {
//         // Переключение на десктоп
//         buttonElement.setAttribute('data-hover-enabled', 'true');
//         buttonElement.addEventListener('mouseenter', openModalOnHover);
//         buttonElement.addEventListener('mouseleave', handleMouseLeave);
//         modalElem.addEventListener('mouseenter', handleModalEnter);
//         modalElem.addEventListener('mouseleave', handleMouseLeave);
//         buttonElement.removeEventListener('click', openModal);
//       } else {
//         // Переключение на мобильную версию
//         buttonElement.setAttribute('data-hover-enabled', 'false');
//         buttonElement.removeEventListener('mouseenter', openModalOnHover);
//         buttonElement.removeEventListener('mouseleave', handleMouseLeave);
//         modalElem.removeEventListener('mouseenter', handleModalEnter);
//         modalElem.removeEventListener('mouseleave', handleMouseLeave);
//         buttonElement.addEventListener('click', openModal);
//       }
//     }
//   });
// };

// // Запускаем контроллер для hover эффекта
// hoverModalController();

// тут изменено чтоб от 320 до 1200 открывался каталог по тапу

// const modalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');


//   modalElem.style.cssText = `
// display: flex;
// visibility: hidden;
// opacity:0;
// transition: opacity 300ms ease-in-out;
// z-index: -1;
// `;

//   const closeModal = event => {
//     const target = event.target;
//     if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';

//       }, 100);
//       window.removeEventListener('keydown', closeModal);
//       // Удаляем обработчик клика вне модального окна
//       document.removeEventListener('click', handleOutsideClick);
//     }
//   }

//   // Обработчик клика вне модального окна
//   const handleOutsideClick = (event) => {
//     // Проверяем, что это клик (не mouseleave или наведение)
//     if (event.type === 'click') {
//       // Если модальное окно видимо и клик был вне его и не на кнопку открытия
//       if (modalElem.style.opacity === '1' &&
//         !modalElem.contains(event.target) &&
//         !buttonElement.contains(event.target)) {
//         // Закрываем модальное окно
//         modalElem.style.opacity = 0;
//         modalElem.style.zIndex = -1;
//         setTimeout(() => {
//           modalElem.style.visibility = 'visible';
//         }, 100);

//         // Удаляем обработчик клика
//         document.removeEventListener('click', handleOutsideClick);
//       }
//     }
//   };

//   const openModal = () => {
//     modalElem.style.visibility = 'visible';
//     modalElem.style.opacity = 1;
//     modalElem.style.zIndex = 1;
//     window.addEventListener('keydown', closeModal);

//     // Добавляем обработчики для отслеживания кликов вне модального окна
//     // Небольшая задержка, чтобы не сработало сразу после открытия
//     setTimeout(() => {
//       document.addEventListener('click', handleOutsideClick);
//     }, 10);
//   };

//   // Проверяем ширину экрана - на устройствах до 1100px будет открытие по клику
//   if (window.innerWidth < 1100) {
//     buttonElement.addEventListener('click', openModal);
//   }
//   modalElem.addEventListener('click', closeModal);
// }

// modalController();

// // Добавляем функциональность открытия каталога при наведении на больших экранах
// const hoverModalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');
//   let isHovering = false;
//   let timeout;

//   // Проверка ширины экрана
//   function isDesktop() {
//     return window.innerWidth >= 1100;
//   }

//   // Обработчик клика вне модального окна для hover-режима
//   const handleOutsideClick = (event) => {
//     // Если модальное окно видимо и клик был вне его и не на кнопку открытия
//     if (modalElem.style.opacity === '1' &&
//       !modalElem.contains(event.target) &&
//       !buttonElement.contains(event.target)) {
//       // Закрываем модальное окно
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';
//       }, 100);

//       // Удаляем обработчик клика
//       document.removeEventListener('mousedown', handleOutsideClick);
//       document.removeEventListener('touchstart', handleOutsideClick);
//     }
//   };

//   // Функция открытия модального окна при наведении
//   const openModalOnHover = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);

//       modalElem.style.visibility = 'visible';
//       modalElem.style.opacity = 1;
//       modalElem.style.zIndex = 1;

//       // Добавляем обработчик для закрытия при клике вне модального окна
//       // Используем глобальный обработчик клика с проверкой, что клик был вне модального окна
//       setTimeout(() => {
//         if (!document.querySelector('.click-handler-active')) {
//           document.body.classList.add('click-handler-active');
//           document.addEventListener('click', function handleClick(event) {
//             // Проверяем, что клик не на модальном окне и не на кнопке
//             if (!modalElem.contains(event.target) && !buttonElement.contains(event.target)) {
//               modalElem.style.opacity = 0;
//               modalElem.style.zIndex = -1;
//               setTimeout(() => {
//                 modalElem.style.visibility = 'visible';
//               }, 100);
//               document.removeEventListener('click', handleClick);
//               document.body.classList.remove('click-handler-active');
//             }
//           });
//         }
//       }, 10);
//     }
//   };

//   // Функция не закрывает модальное окно при уходе курсора, а только отслеживает состояние
//   const handleMouseLeave = () => {
//     if (isDesktop()) {
//       isHovering = false;
//     }
//   };

//   // Функция отслеживания наведения на модальное окно
//   const handleModalEnter = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);
//     }
//   };

//   // Активируем обработчики только на десктопе
//   if (isDesktop()) {
//     // Обработчики для кнопки
//     buttonElement.addEventListener('mouseenter', openModalOnHover);
//     buttonElement.addEventListener('mouseleave', handleMouseLeave);

//     // Обработчики для модального окна
//     modalElem.addEventListener('mouseenter', handleModalEnter);
//     modalElem.addEventListener('mouseleave', handleMouseLeave);

//     // Убираем обработчик клика с кнопки на десктопе
//     buttonElement.removeEventListener('click', openModal);
//   }

//   // Отслеживаем изменение размера окна
//   window.addEventListener('resize', () => {
//     const isDesktopNow = window.innerWidth >= 1100;

//     // Если изменился тип устройства
//     if (isDesktopNow !== (buttonElement.getAttribute('data-hover-enabled') === 'true')) {
//       if (isDesktopNow) {
//         // Переключение на десктоп
//         buttonElement.setAttribute('data-hover-enabled', 'true');
//         buttonElement.addEventListener('mouseenter', openModalOnHover);
//         buttonElement.addEventListener('mouseleave', handleMouseLeave);
//         modalElem.addEventListener('mouseenter', handleModalEnter);
//         modalElem.addEventListener('mouseleave', handleMouseLeave);
//         buttonElement.removeEventListener('click', openModal);
//       } else {
//         // Переключение на мобильную версию
//         buttonElement.setAttribute('data-hover-enabled', 'false');
//         buttonElement.removeEventListener('mouseenter', openModalOnHover);
//         buttonElement.removeEventListener('mouseleave', handleMouseLeave);
//         modalElem.removeEventListener('mouseenter', handleModalEnter);
//         modalElem.removeEventListener('mouseleave', handleMouseLeave);
//         buttonElement.addEventListener('click', openModal);
//       }
//     }
//   });
// };

// // Запускаем контроллер для hover эффекта
// hoverModalController();



// полностью готовый код модального окна на главном экране
// const modalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');
//   // Находим стрелку
//   const arrowSvg = buttonElement.querySelector('.svg-box > svg') || buttonElement.querySelector('svg');
//   // Переменная для отслеживания открытого состояния на мобильных устройствах
//   let isOpen = false;

//   modalElem.style.cssText = `
// display: flex;
// visibility: hidden;
// opacity:0;
// transition: opacity 300ms ease-in-out;
// z-index: -1;
// `;

//   // Функция для поворота стрелки при открытии
//   const rotateArrow = (open) => {
//     if (arrowSvg) {
//       if (open) {
//         // Поворачиваем стрелку на 180 градусов при открытии
//         arrowSvg.style.transform = 'rotate(180deg)';
//         arrowSvg.style.transition = 'transform 0.3s ease';
//       } else {
//         // Возвращаем в исходное положение при закрытии
//         arrowSvg.style.transform = 'rotate(0deg)';
//         arrowSvg.style.transition = 'transform 0.3s ease';
//       }
//     }
//   };

//   const closeModal = event => {
//     const target = event.target;
//     if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       // Возвращаем стрелку в исходное положение
//       rotateArrow(false);
//       isOpen = false;

//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';
//       }, 100);
//       window.removeEventListener('keydown', closeModal);
//       // Удаляем обработчик клика вне модального окна
//       document.removeEventListener('click', handleOutsideClick);
//     }
//   }

//   // Обработчик клика вне модального окна
//   const handleOutsideClick = (event) => {
//     // Проверяем, что это клик (не mouseleave или наведение)
//     if (event.type === 'click') {
//       // Если модальное окно видимо и клик был вне его и не на кнопку открытия
//       if (modalElem.style.opacity === '1' &&
//         !modalElem.contains(event.target) &&
//         !buttonElement.contains(event.target)) {
//         // Закрываем модальное окно
//         modalElem.style.opacity = 0;
//         modalElem.style.zIndex = -1;
//         // Возвращаем стрелку в исходное положение
//         rotateArrow(false);
//         isOpen = false;

//         setTimeout(() => {
//           modalElem.style.visibility = 'visible';
//         }, 100);

//         // Удаляем обработчик клика
//         document.removeEventListener('click', handleOutsideClick);
//       }
//     }
//   };

//   // Обработчик клика по кнопке на мобильных устройствах
//   const handleButtonClick = () => {
//     if (!isOpen) {
//       // Открываем модальное окно
//       openModal();
//     } else {
//       // Закрываем модальное окно
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       rotateArrow(false);
//       isOpen = false;

//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';
//       }, 100);

//       document.removeEventListener('click', handleOutsideClick);
//     }
//   };

//   const openModal = () => {
//     modalElem.style.visibility = 'visible';
//     modalElem.style.opacity = 1;
//     modalElem.style.zIndex = 1;
//     // Поворачиваем стрелку при открытии
//     rotateArrow(true);
//     isOpen = true;

//     window.addEventListener('keydown', closeModal);

//     // Добавляем обработчики для отслеживания кликов вне модального окна
//     // Небольшая задержка, чтобы не сработало сразу после открытия
//     setTimeout(() => {
//       document.addEventListener('click', handleOutsideClick);
//     }, 10);
//   };

//   // Проверяем ширину экрана - на устройствах от 320px до 1100px
//   if (window.innerWidth >= 320 && window.innerWidth < 1100) {
//     // Используем обработчик клика по кнопке, который может открывать и закрывать
//     buttonElement.addEventListener('click', handleButtonClick);
//   }
//   modalElem.addEventListener('click', closeModal);
// }

// modalController();

// // Добавляем функциональность открытия каталога при наведении на больших экранах
// const hoverModalController = () => {
//   const buttonElement = document.querySelector('.open-catalog');
//   const modalElem = document.querySelector('.catalog__modal');
//   // Находим стрелку
//   const arrowSvg = buttonElement.querySelector('.svg-box > svg') || buttonElement.querySelector('svg');
//   let isHovering = false;
//   let timeout;

//   // Функция для поворота стрелки
//   const rotateArrow = (open) => {
//     if (arrowSvg) {
//       if (open) {
//         arrowSvg.style.transform = 'rotate(180deg)';
//         arrowSvg.style.transition = 'transform 0.3s ease';
//       } else {
//         arrowSvg.style.transform = 'rotate(0deg)';
//         arrowSvg.style.transition = 'transform 0.3s ease';
//       }
//     }
//   };

//   // Проверка ширины экрана
//   function isDesktop() {
//     return window.innerWidth >= 1100;
//   }

//   // Обработчик клика вне модального окна для hover-режима
//   const handleOutsideClick = (event) => {
//     // Если модальное окно видимо и клик был вне его и не на кнопку открытия
//     if (modalElem.style.opacity === '1' &&
//       !modalElem.contains(event.target) &&
//       !buttonElement.contains(event.target)) {
//       // Закрываем модальное окно
//       modalElem.style.opacity = 0;
//       modalElem.style.zIndex = -1;
//       // Возвращаем стрелку в исходное положение
//       rotateArrow(false);

//       setTimeout(() => {
//         modalElem.style.visibility = 'visible';
//       }, 100);

//       // Удаляем обработчик клика
//       document.removeEventListener('mousedown', handleOutsideClick);
//       document.removeEventListener('touchstart', handleOutsideClick);
//     }
//   };

//   // Функция открытия модального окна при наведении
//   const openModalOnHover = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);

//       modalElem.style.visibility = 'visible';
//       modalElem.style.opacity = 1;
//       modalElem.style.zIndex = 1;
//       // Поворачиваем стрелку при открытии
//       rotateArrow(true);

//       // Добавляем обработчик для закрытия при клике вне модального окна
//       // Используем глобальный обработчик клика с проверкой, что клик был вне модального окна
//       setTimeout(() => {
//         if (!document.querySelector('.click-handler-active')) {
//           document.body.classList.add('click-handler-active');
//           document.addEventListener('click', function handleClick(event) {
//             // Проверяем, что клик не на модальном окне и не на кнопке
//             if (!modalElem.contains(event.target) && !buttonElement.contains(event.target)) {
//               modalElem.style.opacity = 0;
//               modalElem.style.zIndex = -1;
//               // Возвращаем стрелку в исходное положение
//               rotateArrow(false);

//               setTimeout(() => {
//                 modalElem.style.visibility = 'visible';
//               }, 100);
//               document.removeEventListener('click', handleClick);
//               document.body.classList.remove('click-handler-active');
//             }
//           });
//         }
//       }, 10);
//     }
//   };

//   // Функция не закрывает модальное окно при уходе курсора, а только отслеживает состояние
//   const handleMouseLeave = () => {
//     if (isDesktop()) {
//       isHovering = false;
//     }
//   };

//   // Функция отслеживания наведения на модальное окно
//   const handleModalEnter = () => {
//     if (isDesktop()) {
//       isHovering = true;
//       clearTimeout(timeout);
//     }
//   };

//   // Активируем обработчики только на десктопе
//   if (isDesktop()) {
//     // Обработчики для кнопки
//     buttonElement.addEventListener('mouseenter', openModalOnHover);
//     buttonElement.addEventListener('mouseleave', handleMouseLeave);

//     // Обработчики для модального окна
//     modalElem.addEventListener('mouseenter', handleModalEnter);
//     modalElem.addEventListener('mouseleave', handleMouseLeave);

//     // Убираем обработчик клика с кнопки на десктопе
//     buttonElement.removeEventListener('click', openModal);
//   }

//   // Отслеживаем изменение размера окна
//   window.addEventListener('resize', () => {
//     const isDesktopNow = window.innerWidth >= 1100;

//     // Если изменился тип устройства
//     if (isDesktopNow !== (buttonElement.getAttribute('data-hover-enabled') === 'true')) {
//       if (isDesktopNow) {
//         // Переключение на десктоп
//         buttonElement.setAttribute('data-hover-enabled', 'true');
//         buttonElement.addEventListener('mouseenter', openModalOnHover);
//         buttonElement.addEventListener('mouseleave', handleMouseLeave);
//         modalElem.addEventListener('mouseenter', handleModalEnter);
//         modalElem.addEventListener('mouseleave', handleMouseLeave);
//         buttonElement.removeEventListener('click', openModal);
//       } else {
//         // Переключение на мобильную версию
//         buttonElement.setAttribute('data-hover-enabled', 'false');
//         buttonElement.removeEventListener('mouseenter', openModalOnHover);
//         buttonElement.removeEventListener('mouseleave', handleMouseLeave);
//         modalElem.removeEventListener('mouseenter', handleModalEnter);
//         modalElem.removeEventListener('mouseleave', handleMouseLeave);
//         buttonElement.addEventListener('click', openModal);
//       }
//     }
//   });
// };

// // Запускаем контроллер для hover эффекта
// hoverModalController();




// Глобальные переменные для доступа к функциям между контроллерами
let globalOpenModal;
let globalHandleButtonClick;

const modalController = () => {
  const buttonElement = document.querySelector('.open-catalog');
  const modalElem = document.querySelector('.catalog__modal');
  // Находим стрелку
  const arrowSvg = buttonElement.querySelector('.svg-box > svg') || buttonElement.querySelector('svg');
  // Переменная для отслеживания открытого состояния на мобильных устройствах
  let isOpen = false;

  modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity:0;
transition: opacity 300ms ease-in-out;
z-index: -1;
`;

  // Функция для поворота стрелки при открытии
  const rotateArrow = (open) => {
    if (arrowSvg) {
      if (open) {
        // Поворачиваем стрелку на 180 градусов при открытии
        arrowSvg.style.transform = 'rotate(180deg)';
        arrowSvg.style.transition = 'transform 0.3s ease';
      } else {
        // Возвращаем в исходное положение при закрытии
        arrowSvg.style.transform = 'rotate(0deg)';
        arrowSvg.style.transition = 'transform 0.3s ease';
      }
    }
  };

  const closeModal = event => {
    const target = event.target;
    if (target === modalElem || target.closest('.catalog-popup-close') || event.code === 'Escape') {
      modalElem.style.opacity = 0;
      modalElem.style.zIndex = -1;
      // Возвращаем стрелку в исходное положение
      rotateArrow(false);
      isOpen = false;

      setTimeout(() => {
        modalElem.style.visibility = 'visible';
      }, 100);
      window.removeEventListener('keydown', closeModal);
      // Удаляем обработчик клика вне модального окна
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  // Обработчик клика вне модального окна
  const handleOutsideClick = (event) => {
    // Проверяем, что это клик (не mouseleave или наведение)
    if (event.type === 'click') {
      // Если модальное окно видимо и клик был вне его и не на кнопку открытия
      if (modalElem.style.opacity === '1' &&
        !modalElem.contains(event.target) &&
        !buttonElement.contains(event.target)) {
        // Закрываем модальное окно
        modalElem.style.opacity = 0;
        modalElem.style.zIndex = -1;
        // Возвращаем стрелку в исходное положение
        rotateArrow(false);
        isOpen = false;

        setTimeout(() => {
          modalElem.style.visibility = 'visible';
        }, 100);

        // Удаляем обработчик клика
        document.removeEventListener('click', handleOutsideClick);
      }
    }
  };

  // Обработчик клика по кнопке на мобильных устройствах
  const handleButtonClick = () => {
    if (!isOpen) {
      // Открываем модальное окно
      openModal();
    } else {
      // Закрываем модальное окно
      modalElem.style.opacity = 0;
      modalElem.style.zIndex = -1;
      rotateArrow(false);
      isOpen = false;

      setTimeout(() => {
        modalElem.style.visibility = 'visible';
      }, 100);

      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    modalElem.style.zIndex = 1;
    // Поворачиваем стрелку при открытии
    rotateArrow(true);
    isOpen = true;

    window.addEventListener('keydown', closeModal);

    // Добавляем обработчики для отслеживания кликов вне модального окна
    // Небольшая задержка, чтобы не сработало сразу после открытия
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 10);
  };

  // Устанавливаем глобальные ссылки на функции
  globalOpenModal = openModal;
  globalHandleButtonClick = handleButtonClick;

  // Проверяем ширину экрана - на устройствах до 1200px будет открытие по клику
  if (window.innerWidth < 1200) {
    // Используем обработчик клика по кнопке, который может открывать и закрывать
    buttonElement.addEventListener('click', handleButtonClick);
  }
  modalElem.addEventListener('click', closeModal);
}

modalController();

// Добавляем функциональность открытия каталога при наведении на больших экранах
const hoverModalController = () => {
  const buttonElement = document.querySelector('.open-catalog');
  const modalElem = document.querySelector('.catalog__modal');
  // Находим стрелку
  const arrowSvg = buttonElement.querySelector('.svg-box > svg') || buttonElement.querySelector('svg');
  let isHovering = false;
  let timeout;

  // Функция для поворота стрелки
  const rotateArrow = (open) => {
    if (arrowSvg) {
      if (open) {
        arrowSvg.style.transform = 'rotate(180deg)';
        arrowSvg.style.transition = 'transform 0.3s ease';
      } else {
        arrowSvg.style.transform = 'rotate(0deg)';
        arrowSvg.style.transition = 'transform 0.3s ease';
      }
    }
  };

  // Проверка ширины экрана
  function isDesktop() {
    return window.innerWidth >= 1200;
  }

  // Обработчик клика вне модального окна для hover-режима
  const handleOutsideClick = (event) => {
    // Если модальное окно видимо и клик был вне его и не на кнопку открытия
    if (modalElem.style.opacity === '1' &&
      !modalElem.contains(event.target) &&
      !buttonElement.contains(event.target)) {
      // Закрываем модальное окно
      modalElem.style.opacity = 0;
      modalElem.style.zIndex = -1;
      // Возвращаем стрелку в исходное положение
      rotateArrow(false);

      setTimeout(() => {
        modalElem.style.visibility = 'visible';
      }, 100);

      // Удаляем обработчик клика
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    }
  };

  // Функция открытия модального окна при наведении
  const openModalOnHover = () => {
    if (isDesktop()) {
      isHovering = true;
      clearTimeout(timeout);

      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      modalElem.style.zIndex = 1;
      // Поворачиваем стрелку при открытии
      rotateArrow(true);

      // Добавляем обработчик для закрытия при клике вне модального окна
      // Используем глобальный обработчик клика с проверкой, что клик был вне модального окна
      setTimeout(() => {
        if (!document.querySelector('.click-handler-active')) {
          document.body.classList.add('click-handler-active');
          document.addEventListener('click', function handleClick(event) {
            // Проверяем, что клик не на модальном окне и не на кнопке
            if (!modalElem.contains(event.target) && !buttonElement.contains(event.target)) {
              modalElem.style.opacity = 0;
              modalElem.style.zIndex = -1;
              // Возвращаем стрелку в исходное положение
              rotateArrow(false);

              setTimeout(() => {
                modalElem.style.visibility = 'visible';
              }, 100);
              document.removeEventListener('click', handleClick);
              document.body.classList.remove('click-handler-active');
            }
          });
        }
      }, 10);
    }
  };

  // Функция не закрывает модальное окно при уходе курсора, а только отслеживает состояние
  const handleMouseLeave = () => {
    if (isDesktop()) {
      isHovering = false;
    }
  };

  // Функция отслеживания наведения на модальное окно
  const handleModalEnter = () => {
    if (isDesktop()) {
      isHovering = true;
      clearTimeout(timeout);
    }
  };

  // Активируем обработчики только на десктопе
  if (isDesktop()) {
    // Обработчики для кнопки
    buttonElement.addEventListener('mouseenter', openModalOnHover);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    // Обработчики для модального окна
    modalElem.addEventListener('mouseenter', handleModalEnter);
    modalElem.addEventListener('mouseleave', handleMouseLeave);

    // Убираем обработчик клика с кнопки на десктопе - но только если он был добавлен
    if (globalHandleButtonClick) {
      buttonElement.removeEventListener('click', globalHandleButtonClick);
    }
  }

  // Отслеживаем изменение размера окна
  window.addEventListener('resize', () => {
    const isDesktopNow = window.innerWidth >= 1200;

    // Если изменился тип устройства
    if (isDesktopNow !== (buttonElement.getAttribute('data-hover-enabled') === 'true')) {
      if (isDesktopNow) {
        // Переключение на десктоп
        buttonElement.setAttribute('data-hover-enabled', 'true');
        buttonElement.addEventListener('mouseenter', openModalOnHover);
        buttonElement.addEventListener('mouseleave', handleMouseLeave);
        modalElem.addEventListener('mouseenter', handleModalEnter);
        modalElem.addEventListener('mouseleave', handleMouseLeave);

        // Удаляем обработчик клика при переходе на десктоп
        if (globalHandleButtonClick) {
          buttonElement.removeEventListener('click', globalHandleButtonClick);
        }
      } else {
        // Переключение на мобильную версию
        buttonElement.setAttribute('data-hover-enabled', 'false');
        buttonElement.removeEventListener('mouseenter', openModalOnHover);
        buttonElement.removeEventListener('mouseleave', handleMouseLeave);
        modalElem.removeEventListener('mouseenter', handleModalEnter);
        modalElem.removeEventListener('mouseleave', handleMouseLeave);

        // Добавляем обработчик клика для мобильных устройств
        if (globalHandleButtonClick) {
          buttonElement.addEventListener('click', globalHandleButtonClick);
        }
      }
    }
  });
};

// Запускаем контроллер для hover эффекта
hoverModalController();