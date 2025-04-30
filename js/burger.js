// const burger = document.querySelector('.burger');
// const navBody = document.querySelector('.header__body');


// burger.addEventListener('click', openMenu);

// function openMenu() {
//   burger.classList.toggle('active');
//   navBody.classList.toggle('active');
// }

// const navLink = document.querySelectorAll('.header__list-link, .header__contacts-link');

// navLink.forEach(n => n.addEventListener('click', closeMenu));

// function closeMenu() {
//   burger.classList.remove('active');
//   navBody.classList.remove('active');
// }



const burger = document.querySelector('.burger');
const navBody = document.querySelector('.header__body');


burger.addEventListener('click', openMenu);

function openMenu() {
  burger.classList.toggle('active');
  navBody.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

const navLink = document.querySelectorAll('.header__list-link, .header__contacts-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  burger.classList.remove('active');
  navBody.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// Add CSS style for no-scroll class if it doesn't exist in your CSS
const style = document.createElement('style');
style.textContent = `
  .no-scroll {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;
document.head.appendChild(style);