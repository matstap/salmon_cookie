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

  // calculate/store customers per hour
  var cust_arr = [];
  for (var i = 0; i < 15; i++) {
    var custNum = location.minCust + Math.floor(Math.random() * (location.maxCust -location.minCust));
    cust_arr.push(custNum);
  }

  //

}
