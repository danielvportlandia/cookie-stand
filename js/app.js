var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var stores = [];
var pikeTableData = document.getElementById('pikeTable');

function Store(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.cookiesSoldPerDay = 0;
  stores.push(this);
}

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

Store.prototype.calcCustomersPerHour = function() { //generates a random number of customers per hour.
  for (var i = 0; i < hours.length; i++) {
    var customersHourly = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.customersPerHour.push(customersHourly);
  }
};

Store.prototype.calcCookiesPerHour = function() { //generates cookies per hour.
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
    this.cookiesPerHour.push(hourlyCookies);
    this.cookiesSoldPerDay += hourlyCookies;
  }
};
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  tdEl.texContent = this.minCustomers;
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  for (var i = 0; i <= hours.length; i++) {
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
}

makeHeaderRow();


//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };


// var pike = {
//   name: '1st and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesSold: 6.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   results: [this.customersPerHour, this.cookiesPerHour],
//   numCustomers: function() { //generates a random number of customers.
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   getCustomersPerHour: function() { //fills the customersPerHour array.
//     for (var i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(this.numCustomers());
//     }
//   },
//   getCookiesPerHour: function() { //generates cookies per hour.
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
//       this.cookiesPerHour.push(hourlyCookies);
//     }
//   },
//   getDailyCookieTotal: function() {
//     this.getCookiesPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.dailyCookieTotal = this.dailyCookieTotal + this.cookiesPerHour[i];
//     }
//   },
//   dailyCookieTotal: 0,
//   render: function() {
//     this.getCustomersPerHour();
//     this.getCookiesPerHour();
//     this.getDailyCookieTotal();
//     var ulEl = document.getElementById('pike');
//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };
// pike.render();

// var seatacAirport = {
//   name: 'Seatac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesSold: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   results: [this.customersPerHour, this.cookiesPerHour],
//   numCustomers: function() { //generates a random number of customers.
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   getCustomersPerHour: function() { //fills the customersPerHour array.
//     for (var i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(this.numCustomers());
//     }
//   },
//   getCookiesPerHour: function() { //generates cookies per hour.
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
//       this.cookiesPerHour.push(hourlyCookies);
//     }
//   },
//   getDailyCookieTotal: function() {
//     this.getCookiesPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.dailyCookieTotal = this.dailyCookieTotal + this.cookiesPerHour[i];
//     }
//   },
//   dailyCookieTotal: 0,
//   render: function() {
//     this.getCustomersPerHour();
//     this.getCookiesPerHour();
//     this.getDailyCookieTotal();
//     var ulEl = document.getElementById('seatac');
//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };
// seatacAirport.render();

// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesSold: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   results: [this.customersPerHour, this.cookiesPerHour],
//   numCustomers: function() { //generates a random number of customers.
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   getCustomersPerHour: function() { //fills the customersPerHour array.
//     for (var i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(this.numCustomers());
//     }
//   },
//   getCookiesPerHour: function() { //generates cookies per hour.
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
//       this.cookiesPerHour.push(hourlyCookies);
//     }
//   },
//   getDailyCookieTotal: function() {
//     this.getCookiesPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.dailyCookieTotal = this.dailyCookieTotal + this.cookiesPerHour[i];
//     }
//   },
//   dailyCookieTotal: 0,
//   render: function() {
//     this.getCustomersPerHour();
//     this.getCookiesPerHour();
//     this.getDailyCookieTotal();
//     var ulEl = document.getElementById('seattleCenter');
//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };
// seattleCenter.render();

// var capitalHill = {
//   name: 'CapitalHill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesSold: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   results: [this.customersPerHour, this.cookiesPerHour],
//   numCustomers: function() { //generates a random number of customers.
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   getCustomersPerHour: function() { //fills the customersPerHour array.
//     for (var i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(this.numCustomers());
//     }
//   },
//   getCookiesPerHour: function() { //generates cookies per hour.
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
//       this.cookiesPerHour.push(hourlyCookies);
//     }
//   },
//   getDailyCookieTotal: function() {
//     this.getCookiesPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.dailyCookieTotal = this.dailyCookieTotal + this.cookiesPerHour[i];
//     }
//   },
//   dailyCookieTotal: 0,
//   render: function() {
//     this.getCustomersPerHour();
//     this.getCookiesPerHour();
//     this.getDailyCookieTotal();
//     var ulEl = document.getElementById('capitolHill');
//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };
// capitalHill.render();

// var alki = {
//   name: 'Alki',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesSold: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   results: [this.customersPerHour, this.cookiesPerHour],
//   numCustomers: function() { //generates a random number of customers.
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   getCustomersPerHour: function() { //fills the customersPerHour array.
//     for (var i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(this.numCustomers());
//     }
//   },
//   getCookiesPerHour: function() { //generates cookies per hour.
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesSold);
//       this.cookiesPerHour.push(hourlyCookies);
//     }
//   },
//   getDailyCookieTotal: function() {
//     this.getCookiesPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.dailyCookieTotal = this.dailyCookieTotal + this.cookiesPerHour[i];
//     }
//   },
//   dailyCookieTotal: 0,
//   render: function() {
//     this.getCustomersPerHour();
//     this.getCookiesPerHour();
//     this.getDailyCookieTotal();
//     var ulEl = document.getElementById('alki');
//     for (var i = 0; i <= hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     liEl.className = 'total';
//     liEl.textContent = 'Total: ' + this.dailyCookieTotal;
//     console.log(this.dailyCookieTotal);
//     ulEl.appendChild(liEl);
//   },
// };
// alki.render();