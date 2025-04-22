// // Получаем элементы
let wrapper = document.querySelector(".tabs");
let tabToggles = wrapper.querySelectorAll(".tab-toggle");

function openTab() {
  let content = this.parentElement.nextElementSibling;
  let activeItems = wrapper.querySelectorAll(".active");

  if (window.innerWidth > 1024) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      content.classList.toggle('active');
      activeItems.forEach(item => item.classList.toggle('active'));
      wrapper.style.minHeight = `${content.offsetHeight}px`;
    }
  } else {
    this.classList.toggle('active');
    content.classList.toggle('active');
  }
}

// Добавляем обработчик событий
tabToggles.forEach(tabToggle => {
  tabToggle.addEventListener('click', openTab);
});

// Имитируем клик на первом элементе
if (tabToggles.length > 0) {
  tabToggles[0].click();
}

