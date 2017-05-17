'use strict';

function Store(location, minCust, maxCust, avgPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
}

Store.prototype.cookiesPerHour = function() {
  var cookies_arr = [];
  for (var i = 0; i < 15; i++) {
    var custNum = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust));
    // cookies per hour = avg cookies sold * custNum (need whole number))
    var cookiesSold = Math.floor(custNum * this.avgPerSale);
    cookies_arr.push(cookiesSold);
  }
  return cookies_arr;
};

Store.prototype.total = function() {
  var totalCookies = 0;
  var cookies_arr = this.cookiesPerHour();
  for (var i = 0; i < cookies_arr.length; i++) {
    totalCookies += cookies_arr[i];
  }
  return totalCookies;
};

Store.prototype.render = function() {
  var table = document.getElementById('tabBody');
  var data = [];
  var cookies_arr = this.cookiesPerHour();
  var total = this.total();

  cookies_arr.push(total);
  data.push('<td>' + this.location + '</td>');
  for (var i = 0; i < cookies_arr.length; i++) {
    data.push('<td>' + cookies_arr[i] + '</td>');
  }

  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alkai = new Store('Alkai', 2, 16, 4.6);

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

function addHeadder(hours) {
  var table = document.getElementById('tabHead');
  var new_row = document.createElement('tr');
  var data = [];

  data.push('<td></td>');
  for (var i = 0; i < hours.length; i++) {
    data.push('<td>' + hours[i] + '</td>');
  }
  data.push('<td>Daily Location Total</td>');

  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
}

function colSums() {
  var table = document.getElementById('tabBody');
  var new_row = document.createElement('tr');
  var data = [];

  data.push('<td>Totals</td>');

  for (var col = 1; col < 17; col++) {
    var count = 0;
    for (var row = 0; row < 5; row++) {
      var numbStr = table.children[row].children[col].innerHTML;
      console.log(col,row,numbStr);
      var number = parseInt(numbStr);
      count += number;
    }
    data.push('<td>' + count + '</td>');
  }
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
}

addHeadder(hours);
firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alkai.render();
colSums();
