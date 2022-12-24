console.log(`1. Вёрстка валидная +10
2. Вёрстка семантическая +20
3. Вёрстка соответствует макету +48
4. Требования к css + 12
5. Интерактивность, реализуемая через css +20

Все пункты выполнены. Самооценка - 110 баллов.

*Картинки в секции service шире на 1px (330px вместо 329px) - исправлена ошибка в макете.
`);

// ---------------------------------------------------------------

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
