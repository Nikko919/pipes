let tabs = document.querySelectorAll('.catalog-tabs__title');

let tabContent = document.querySelectorAll('.catalog-tabs__content')


tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach(content => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabContent[index].classList.add('active');
    tabs[index].classList.add('active');
  })
})





// код от ии


// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelectorAll('.catalog-tabs__title');
//   const tabContent = document.querySelectorAll('.catalog-tabs__content');

//   tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//       // Remove active class from all tabs and content
//       tabs.forEach(t => t.classList.remove('active'));
//       tabContent.forEach(content => content.classList.remove('active'));

//       // Add active class to clicked tab and corresponding content
//       tab.classList.add('active');
//       tabContent[index].classList.add('active');
//     });
//   });
// });