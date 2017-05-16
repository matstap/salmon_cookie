'use strict';

//store location objects

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
  var table = document.getElementById('myTable');
  var data = [];
  var cookies_arr = this.cookiesPerHour();
  var total = this.total();

  cookies_arr.push(total);
  data.push('<td>' + this.location + '</td>');
  for (var i = 0; i < cookies_arr.length; i++) {
    data.push('<td>' + cookies_arr[i] + '</td>');
  }

  var new_row = document.createElement('tr');
  new_row.innerHTML = data;
  table.appendChild(new_row);
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alkai = new Store('Alkai', 2, 16, 4.6);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function addHeadder(hours) {
  var table = document.getElementById('myTable');
  var newRow = table.insertRow(0);

  var newCell = newRow.insertCell(0);
  var newText = document.createTextNode('');
  newCell.appendChild(newText);

  for (var i = 0; i < hours.length; i++) {
    newCell = newRow.insertCell(i + 1);
    newText = document.createTextNode(hours[i]);
    newCell.appendChild(newText);
  }
}

firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alkai.render();

addHeadder(hours);
/*
// displays hourly and total sales as a list in the browser
function salesInfo(location) {
  // create container element in memory
  // add HTML to container and add Location title
  // add newly created HTML to the DOM
  var container = document.createElement('div');
  container.innerHTML = '<p>' + location.location + '</p>';
  document.body.appendChild(container);

  // calculate/store cookies per hour
  var cookies_arr = [];
  for (var i = 0; i < 15; i++) {
    var custNum = location.minCust + Math.floor(Math.random() * (location.maxCust - location.minCust));
    // cookies per hour = avg cookies sold * custNum (need whole number))
    var cookiesSold = Math.floor(custNum * location.avgPerSale);
    cookies_arr.push(cookiesSold);
  }

  // calculate total cookies sold
  var totalCookies = 0;
  for (i = 0; i < cookies_arr.length; i++) {
    totalCookies += cookies_arr[i];
    console.log(cookies_arr[i]);
  }


  // create an UL container in memory
  // create empty array to store li
  var list = document.createElement('ul');
  var list_arr = [];

  // array of hours
  var hours = [];
  for (i = 6; i < 13; i++) {
    hours.push(i + 'am: ');
  }
  for (i = 1; i < 9; i++) {
    hours.push(i + 'pm: ');
  }

  // fill out li's and push total to end
  for (i = 0; i < hours.length; i++) {
    list_arr.push('<li>' + hours[i] + cookies_arr[i] + ' cookies</li>');
  }

  list_arr.push('<li>Total: ' + totalCookies + ' cookies</li>');

  // turn list_arr to string
  var full_list = list_arr.join('');

  // add li's to ul and append ul
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

// call func for each location
salesInfo(firstAndPike);
salesInfo(seatac);
salesInfo(seattleCenter);
salesInfo(capitolHill);
salesInfo(alkai);
*/
