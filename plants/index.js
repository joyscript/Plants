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

// ------------------------------------------------------------------------------

const accordeon = document.querySelector('.prices__accordeon');

accordeon.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dropdown')) return;
  const curItem = e.target.closest('.price-item');
  const activeItem = accordeon.querySelector('.price-item.active');

  if (activeItem && activeItem != curItem) {
    activeItem.classList.remove('active');
    activeItem.style.height = '';
  }

  curItem.classList.toggle('active');

  curItem.classList.contains('active')
    ? (curItem.style.height = 50 + parseInt(getComputedStyle(curItem.lastElementChild).height) + 'px')
    : (curItem.style.height = '');
});

// ------------------------------------------------------------------------------

const select = document.querySelector('.select');
const selectHeader = select.querySelector('.select__header');
const infoCard = document.querySelector('.info-card');
const infoFields = infoCard.querySelectorAll('[data-info]');
const infoButton = infoCard.querySelector('.info-card__button');
const contactsInfo = [
  ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street'],
  ['New York City', '+1 212 456 0002', '9 East 91st Street'],
  ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'],
  ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD'],
];

const openSelect = () => {
  select.classList.add('open');
  select.classList.remove('selected');
  select.style.height = 50 + parseInt(getComputedStyle(select.lastElementChild).height) + 'px';
  if (selectHeader.innerText != 'City') selectHeader.innerText = 'City';
  document.body.addEventListener('click', closeSelectOnBodyClick);
};

const closeSelect = () => {
  select.classList.remove('open');
  select.style.height = '';
  document.body.removeEventListener('click', closeSelectOnBodyClick);
};

const closeSelectOnBodyClick = (e) => {
  if (e.target.closest('.select')) return;
  closeSelect();
};

const getInfoCard = (city) => {
  const curCity = contactsInfo.find((item) => item[0] == city);
  infoFields.forEach((field, i) => (field.innerText = curCity[i]));
  infoButton.href = `tel:${curCity[1].replace(/ /g, '')}`;
};

select.addEventListener('click', (e) => {
  if (e.target == selectHeader) select.classList.contains('open') ? closeSelect() : openSelect();

  if (e.target.classList.contains('select__option')) {
    selectHeader.innerText = e.target.value;
    select.classList.add('selected');
    getInfoCard(e.target.value);
    closeSelect();
  }
});
