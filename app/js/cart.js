var countValue = document.querySelectorAll('.count__value');
var price = document.querySelectorAll('.cart__added-price');
var cartAddedAll = document.querySelector('.cart__wrapper');
var cartShow = document.querySelector('.cart__show');
var cartNone = document.querySelector('.cart__none');


var catalogItem = document.querySelectorAll('.item');
var cartWrapper = document.querySelector('.cart__wrapper');
var catalogItemBuy = document.querySelectorAll('.item__buy');

var countStep = 1;

var getBigger = function () {
  var count = this.parentElement.querySelector('.count__value');
  if (parseInt(count.value, 10) < 100) {
    count.value = parseInt(count.value, 10) + countStep;
  }
  var countWrapper = this.parentElement;
  var priceNow = countWrapper.parentElement.querySelector('.cart__added-price').textContent;
  var newTotalPrice = parseInt(priceNow) + parseInt(priceNow) / (count.value - 1) + '$';
  countWrapper.parentElement.querySelector('.cart__added-price').textContent = newTotalPrice;
};

var getSmaller = function () {
  var count = this.parentElement.querySelector('.count__value');
  if (parseInt(count.value, 10) > 0) {
    count.value = parseInt(count.value, 10) - countStep;
  }
  if (parseInt(count.value, 10) < 1) {
    var itemBuyDisabled = document.querySelector('.item__buy--disabled');
    itemBuyDisabled.disabled = false;
    itemBuyDisabled.classList.remove('item__buy--disabled');
  }

  var current = parseInt(count.value) + 1;
  var countWrappe = this.parentElement;
  var priceNo = countWrappe.parentElement.querySelector('.cart__added-price').textContent;
  var newTotalPric = parseInt(priceNo) - parseInt(priceNo) / current + '$';
  countWrappe.parentElement.querySelector('.cart__added-price').textContent = newTotalPric;
};

var getCancel = function () {
  var currentCount = this.querySelector('.count__value').value;
  if (currentCount < 1) {
    this.remove();
  }
}

cartAddedAll.addEventListener('click', function () {
  if (!cartAddedAll.querySelector('.cart__added')) {
    cartAddedAll.classList.add('visually-hidden');
    cartNone.classList.remove('visually-hidden');
    cartShow.textContent = 'Show Cart';
  }
});

cartShow.addEventListener('click', function () {
  if (cartAddedAll.querySelector('.cart__added')) {
    cartNone.classList.add('visually-hidden');
  }
});

//pushing data from catalog to cart within tempate
var getTemplate = function() {
  var template = document.querySelector('#cart-template').content.querySelector('.cart__added');
  var cartTemplate = template.cloneNode(true);
  var buttonWrap = this.parentElement;

  var currentPicture = buttonWrap.parentElement.querySelector('.item__img').src;
  cartTemplate.querySelector('.cart__added-picture').src = currentPicture;

  var currentName = buttonWrap.parentElement.querySelector('.item__title').textContent;
  cartTemplate.querySelector('.cart__added-title').textContent = currentName;

  var currentPrice = buttonWrap.parentElement.querySelector('.item__price').textContent;
  cartTemplate.querySelector('.cart__added-price').textContent = currentPrice;

  cartWrapper.appendChild(cartTemplate);

  if (cartAddedAll.querySelector('.cart__added')) {
    cartNone.classList.add('visually-hidden');
  }

  var countSmaller = cartTemplate.querySelectorAll('.count__control--smaller');
  var countBigger = cartTemplate.querySelectorAll('.count__control--bigger');
  var cartAdded = cartTemplate;

  for (var i = 0; i < countBigger.length; i++) {
    countBigger[i].onclick = getBigger;
    countSmaller[i].onclick = getSmaller;
    cartAdded.onclick = getCancel;
  }
  cartAddedAll.classList.remove('visually-hidden');
  cartNone.classList.add('visually-hidden');
  cartShow.textContent = 'Hide Cart';
};

for (var i = 0; i < catalogItem.length; i++) {
  catalogItemBuy[i].onclick = getTemplate;
  catalogItemBuy[i].addEventListener('click', function () {
    this.disabled = true;
    this.classList.add('item__buy--disabled');
  });
};



















