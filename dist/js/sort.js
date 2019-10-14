var sortPrice = document.querySelector('.sort-items__price');
var sortName = document.querySelector('.sort-items__name');
var prices = document.querySelectorAll('.item__price');
var itemNames = document.querySelectorAll('.item__title');

var maxValueItem = document.querySelector('.item--drone');
var maxValue = maxValueItem.querySelector('.item__price');

var getSortByPrice = function () {
  var trueArray = [];
  for (var i = 0; i < prices.length; i++) {
    trueArray.push(parseInt(prices[i].innerHTML));
  }
  trueArray.sort(function(a, b){return a-b});

  for (var i = 0; i < trueArray.length; i++) {
    var current = trueArray[i];
    for (var j = 0; j < trueArray.length; j++) {
      if (parseInt(prices[j].innerHTML) === current) {
        prices[j].parentElement.parentElement.style = 'order:' + current;
      }
    }
  }
};

var getSortByName = function () {
  var trueArray = [];
  for (var i = 0; i < itemNames.length; i++) {
    trueArray.push(itemNames[i].textContent);
  }
  trueArray.sort();

  for (var i = 0; i < trueArray.length; i++) {
    var currentIndex = trueArray.indexOf(trueArray[i]);
    var current = trueArray[i];

    for (var j = 0; j < trueArray.length; j++) {
      if (itemNames[j].innerHTML === current) {
        itemNames[j].parentElement.style = 'order:' + currentIndex;
      }
    }
  }
}

sortPrice.addEventListener('click', function () {
  getSortByPrice();
});

sortName.addEventListener('click', function () {
  getSortByName();
});




