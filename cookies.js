'use strict';

var tabH = document.getElementById('tabHead');
var tabB = document.getElementById('tabBody');

var form = document.getElementById('sales_form');
var formRmv = document.getElementById('remove_form');

// row # hack
var rowNum = 0;

function Store(loc, minCust, maxCust, avgPerSale) {
  this.loc = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
}

Store.prototype.cookiesPerHour = function() {
  var cookies_arr = [];
  for (var i = 0; i < 15; i++) {
    //console.log(this.maxCust, this.minCust);
    var custNum = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
    // cookies per hour = avg cookies sold * custNum (need whole number))
    var cookiesSold =  Math.floor(custNum * this.avgPerSale);
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
  var data = [];
  var cookies_arr = this.cookiesPerHour();
  //console.log(cookies_arr);
  var total = this.total();

  cookies_arr.push(total);
  data.push('<td>' + this.loc + '</td>');
  for (var i = 0; i < cookies_arr.length; i++) {
    data.push('<td>' + cookies_arr[i] + '</td>');
  }

  addRow(data, tabB);
  rowNum += 1;
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alkai = new Store('Alkai', 2, 16, 4.6);

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

function addHeadder(hours) {
  var data = [];

  data.push('<td></td>');
  for (var i = 0; i < hours.length; i++) {
    data.push('<td>' + hours[i] + '</td>');
  }
  data.push('<td>Daily Location Total</td>');

  addRow(data, tabH);
}

function colSums() {
  var data = [];

  data.push('<td>Totals</td>');

  // iterates through the rows of each column, adding the entries
  for (var col = 1; col < 17; col++) {
    var count = 0;
    for (var row = 0; row < rowNum; row++) {
      var numbStr = tabB.children[row].children[col].innerHTML;
      console.log(col,row,numbStr);
      var number = parseInt(numbStr);
      count += number;
    }
    data.push('<td>' + count + '</td>');
  }
  addRow(data, tabB);
}

function addRow(data, table) {
  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
}

// Form //

function formData(event) {
  event.preventDefault();

  var loc = event.target.loc.value;
  var minCust = parseInt(event.target.minCustomers.value);
  var maxCust = parseInt(event.target.maxCustomers.value);
  var avgPerSale = parseInt(event.target.perSale.value);

  var store = new Store(loc, minCust, maxCust, avgPerSale);

  for (var i = 0; i < rowNum; i++) {
    if (loc === tabB.children[i].children[0].innerHTML) {
      tabB.deleteRow(i);
      rowNum -= 1;
      tabB.deleteRow(rowNum);
      store.render();
      colSums();
      form.reset();
      return;
    }
  }

  tabB.deleteRow(rowNum);
  store.render();
  colSums();
  form.reset();
}

function formRemove(event) {
  event.preventDefault();

  var loc = event.target.removeStore.value;

  for (var i = 0; i < rowNum; i++) {
    if (loc === tabB.children[i].children[0].innerHTML && rowNum > 0) {
      tabB.deleteRow(i);
      rowNum -= 1;
      tabB.deleteRow(rowNum);
      colSums();
      formRmv.reset();
    }
  }
}

addHeadder(hours);
firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alkai.render();
colSums();
form.addEventListener('submit', formData);
formRmv.addEventListener('submit', formRemove);
