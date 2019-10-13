var cartShow = document.querySelector('.cart__show');
var cartAddedAll = document.querySelector('.cart__wrapper');
var cartNone = document.querySelector('.cart__none');
var sortShow = document.querySelector('.sort-items');
var sortBy = document.querySelector('.sort-items__type');
var sortArrow = document.querySelector('.sort-items__arrow');

cartShow.addEventListener('click', function (evt) {
  if (cartAddedAll.classList.contains('visually-hidden')) {
    cartAddedAll.classList.remove('visually-hidden');
    cartShow.textContent = 'Hide Cart';
  } else {
    cartAddedAll.classList.add('visually-hidden');
    cartShow.textContent = 'Show Cart';
  }
});

sortShow.addEventListener('click', function (evt) {
  if (sortBy.classList.contains('visually-hidden')) {
    sortBy.classList.remove('visually-hidden');
    sortArrow.style.transform = 'rotate(225deg)';
    sortArrow.style.top = '15px';
  } else {
    sortBy.classList.add('visually-hidden');
    sortArrow.style.transform = 'rotate(45deg)';
    sortArrow.style.top = '5px';
  }
});

