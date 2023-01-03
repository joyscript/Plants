const burger = document.querySelector('.burger');

const closeMenu = (e) => {
  if (e.target.classList.contains('nav__link') || !e.target.closest('.nav')) {
    document.body.classList.remove('menu-open');
  }
};

burger.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  document.body.classList.contains('menu-open')
    ? document.body.addEventListener('click', closeMenu)
    : document.body.removeEventListener('click', closeMenu);
});

// ------------------------------------------------------------------------------

const buttonsField = document.querySelector('.service__buttons');
const serviceItems = document.querySelectorAll('.service-item');
let activeBtns = [];

buttonsField.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button') || activeBtns.includes(e.target)) return;
  const button = e.target;

  if (activeBtns.length == 2) {
    activeBtns.forEach((btn) => btn.classList.remove('active'));
    activeBtns = [];
  }

  button.classList.add('active');
  activeBtns.push(button);

  serviceItems.forEach((item) => {
    activeBtns.find((button) => button.innerText == item.dataset.service)
      ? item.classList.remove('blurred')
      : item.classList.add('blurred');
  });
});
