var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var stores = [];
var tableData = document.getElementById('storeTable');
var salesForm = document.getElementById('sales-form');

function Store(name, minCustomers, maxCustomers, avgCookiesSold) { //Store constructor function.
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

Store.prototype.render = function() { //Render method that fills table with data.
  this.calcCookiesPerHour();
  var trEl = document.createElement('tr');
  trEl.className = 'table-data';
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) { //Renders store data and fills the td elements with cookies per hour.
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerDay; //Last column calculates all the cookies sold per day.
  trEl.appendChild(tdEl);
  tableData.appendChild(trEl);
};

function makeHeaderRow() { //Creates the header row.
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) { //Populates header row with the hours array.
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Cookie Totals';
  trEl.appendChild(thEl);
  tableData.appendChild(trEl);
}

function makeStoreRows() { //This function calls the render function, filling the table with data.
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function makeFooterRow() { //Creates the footer row.
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'footer-row');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) { //Outer loop iterates through hours while the inner loop iterates through the stores.
    var storeCookieTotals = 0;
    for (var j = 0; j < stores.length; j++) {
      storeCookieTotals += stores[j].cookiesPerHour[i]; //Each iteration the cookiesPerHour index matches [i] while the stores index is [j].
    }
    thEl = document.createElement('th');
    thEl.textContent = storeCookieTotals;
    trEl.appendChild(thEl);
  }
  var grandTotal = 0;
  for (i = 0; i < stores.length; i++) { //Calculates the grand total between the total cookies sold per hour and cookies sold per day.
    grandTotal += stores[i].cookiesSoldPerDay;
  }
  thEl = document.createElement('th');
  thEl.textContent = grandTotal;
  trEl.appendChild(thEl);
  tableData.appendChild(trEl);
}

makeHeaderRow();
makeStoreRows();
makeFooterRow();

/*Data entered in the forms is used to create and render a new Store instance, then the values are reset, the footer is removed then readded
so that the makeFooterRow function can remake the row with the updated totals of all stores.*/
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
salesForm.addEventListener('click', updateStoreData);

function updateStoreData(event) {
  if (event.target === 'table-data') {
    alert('Cell clicked');
  }
}