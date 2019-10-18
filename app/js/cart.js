(function () {
window.cartTotal = document.querySelector('.cart__total');
var countValue = document.querySelectorAll('.count__value');
var price = document.querySelectorAll('.cart__added-price');
var cartAddedAll = document.querySelector('.cart__wrapper');
var cartShow = document.querySelector('.cart__show');
var cartNone = document.querySelector('.cart__none');
var catalogItem = document.querySelectorAll('.item');
var cartWrapper = document.querySelector('.cart__wrapper');
var catalogItemBuy = document.querySelectorAll('.item__buy');
var cartTotalInput = cartTotal.querySelector('.cart__total-value');

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
  var countWrapper = this.parentElement;
  var priceNow = countWrapper.parentElement.querySelector('.cart__added-price').textContent;
  var newTotalPrice = parseInt(priceNow) - parseInt(priceNow) / current + '$';
  countWrapper.parentElement.querySelector('.cart__added-price').textContent = newTotalPrice;
};

var getCancel = function () {
  var currentCount = this.querySelector('.count__value').value;
  if (currentCount < 1) {
    this.remove();
  }
}

var getTotalPrice = function () {
  var allPrices = cartAddedAll.querySelectorAll('.cart__added-price');
  var total = 0;
  for (var i = 0; i < allPrices.length; i++) {
    total = total + parseInt(allPrices[i].textContent);
    cartTotalInput.value = total;
  }
}

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

  var countSmaller = cartTemplate.querySelectorAll('.count__control--smaller');
  var countBigger = cartTemplate.querySelectorAll('.count__control--bigger');
  var cartAdded = cartTemplate;

  if (cartAddedAll.querySelector('.cart__added')) {
    cartNone.classList.add('visually-hidden');
    cartTotal.classList.add('visually-hidden');
  };

  for (var i = 0; i < countBigger.length; i++) {
    countBigger[i].addEventListener('click', getBigger);
    countBigger[i].addEventListener('click', getTotalPrice);
    countSmaller[i].addEventListener('click', getSmaller);
    countSmaller[i].addEventListener('click', getTotalPrice);
    cartAdded.addEventListener('click', getCancel);
  };

  cartAddedAll.classList.remove('visually-hidden');
  cartNone.classList.add('visually-hidden');
  cartShow.textContent = 'Hide Cart';
  cartTotal.classList.remove('visually-hidden');
};

cartAddedAll.addEventListener('click', function () {
  if (!cartAddedAll.querySelector('.cart__added')) {
    cartAddedAll.classList.add('visually-hidden');
    cartTotal.classList.add('visually-hidden');
    cartNone.classList.remove('visually-hidden');
    cartShow.textContent = 'Show Cart';
  }
});

cartShow.addEventListener('click', function () {
  if (cartAddedAll.querySelector('.cart__added')) {
    cartNone.classList.add('visually-hidden');
  }
});

for (var i = 0; i < catalogItem.length; i++) {
  catalogItemBuy[i].onclick = getTemplate;
  catalogItemBuy[i].addEventListener('click', function () {
    this.disabled = true;
    this.classList.add('item__buy--disabled');
    getTotalPrice();
  });
};
})();


























