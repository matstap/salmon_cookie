'use strict';

//store location objects
var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3
};

var seatac = {
  location: 'SeaTac',
  minCust: 3,
  maxCust: 24,
  avgPerSale: 1.2
};

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerSale: 3.7
};

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerSale: 2.3
};

var alkai = {
  location: 'Alkai',
  minCust: 2,
  maxCust: 16,
  avgPerSale: 4.6
};

function domStuff(location) {
  // create container element in memory
  // add HTML to container and add Location title
  // add newly created HTML to the DOM
  var container = document.createElement('div');
  container.innerHTML = '<p>' + location.location + '</p>';
  document.body.appendChild(container);

  // calculate/store cookies per hour
  var cookies_arr = [];
  for (var i = 0; i < 15; i++) {
    var custNum = location.minCust + Math.floor(Math.random() * (location.maxCust -location.minCust));
    // cookies per hour = avg cookies sold * custNum (need whole number))
    var cookiesSold = Math.floor(custNum * location.avgPerSale);
    cookies_arr.push(cookiesSold);
  }

  // calculate total cookies sold and push it to list
  var total = 0;
  for (var i = 0; i < cookies_arr; i++) {
    total += cookies_arr[i];
  }

  cookies_arr.push(total);

  // create an UL container in memory
  var list = document.createElement('ul');

  // array of hours
  var hours = [];
  for (var i = 6; i < 13; i++) {
    hours.push(i);
  }
  for (var i = 1; i < 9; i++) {
    hours.push(i);
  }


}
