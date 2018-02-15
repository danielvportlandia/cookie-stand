var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var stores = [];
var tableData = document.getElementById('storeTable');

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

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

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
  this.calcCookiesPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerDay;
  trEl.appendChild(tdEl);
  tableData.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Cookie Totals';
  trEl.appendChild(thEl);
  tableData.appendChild(trEl);
}

function makeStoreRows() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'footer-row');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var storeCookieTotals = 0;
    for (var j = 0; j < stores.length; j++) {
      storeCookieTotals += stores[j].cookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = storeCookieTotals;
    trEl.appendChild(thEl);
  }
  var grandTotal = 0;
  for (i = 0; i < stores.length; i++) {
    grandTotal += stores[i].cookiesSoldPerDay;
  }
  thEl = document.createElement('th');
  thEl.textContent = grandTotal;
  trEl.appendChild(thEl);
  tableData.appendChild(trEl);
}

console.table(stores);

makeHeaderRow();
makeStoreRows();
makeFooterRow();

var salesForm = document.getElementById('sales-form');

function submitStoreData(event) {
  event.preventDefault();
  var newStore = new Store(salesForm.storeName.value, parseInt(salesForm.minCustomersPerHour.value), parseInt(salesForm.maxCustomersPerHour.value), parseFloat(salesForm.avgCookiesPerHour.value));
  event.target.reset();
  newStore.render();
  var foot = document.getElementById('footer-row');
  foot.remove();
  makeFooterRow();
}

salesForm.addEventListener('submit', submitStoreData);

// event listener for the CLEAR ALL STORES button!
// clearChatList.addEventListener('click', function() {
//   chatList.innerHTML = '';
//   console.log('You just cleared the chat list!');
//   allComments = [];
// });