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
};

var getSmaller = function () {
  var count = this.parentElement.querySelector('.count__value');
  if (parseInt(count.value, 10) > 0) {
    count.value = parseInt(count.value, 10) - countStep;
  }

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


var getTemplate = function() {
  var template = document.querySelector('#cart-template').content.querySelector('.cart__added');
  var cartTemplate = template.cloneNode(true);
  //тут вставить данные
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
};

for (var i = 0; i < catalogItem.length; i++) {
  catalogItemBuy[i].onclick = getTemplate;
};










