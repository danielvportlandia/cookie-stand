var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var pike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesSold: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,
  results: [this.customersPerHour, this.cookiesPerHour],
  numCustomers: function() { //generates a random number of customers.
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  getCustomersPerHour: function() { //fills the customersPerHour array.
    for (var i = 0; i <= hours.length; i++) {
      this.customersPerHour.push(this.numCustomers());
    }
  },
  roundCookies: function(a, b) { //rounds the cookies up to the nearest whole cookie.
    return Math.ceil(a * b);
  },
  getCookiesPerHour: function() { //generates cookies per hour.
    for (var i = 0; i <= hours.length; i++) {
      this.cookiesPerHour.push(this.roundCookies(this.customersPerHour[i], this.avgCookiesSold));
    }
  },
  getDailyCookieTotal: function() {
    var value = 0;
    this.getCookiesPerHour();
    for (var i = 0; i <= hours.length; i++) {
      value += this.cookiesPerHour[i];
      console.log(value);
    }
    this.daileyCookieTotal = this.value;
  },
  render: function() {
    this.getCustomersPerHour();
    this.getCookiesPerHour();
    this.getDailyCookieTotal();
    var ulEl = document.getElementById('pike');
    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesPerHour[i];
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.dailyCookieTotal;
    console.log(this.dailyCookieTotal);
    ulEl.appendChild(liEl);
  },
};
// pike.getCustomersPerHour();
// pike.getCookiesPerHour();
// pike.getDailyCookieTotal();
pike.render();
// for (i = 0; i < hours.length; i++) {
//totalCookies for the day method
//cookiesSoldEachHour = [] method
// return [];
//customers each hour = [] method to calculate
//totalCookies for the day method
//cookiesSoldEachHour = [] method
//customers each hour = [] method to calculate
//totalCookies for the day method
//cookiesSoldEachHour = [] method
// return [];
// var alki = {
//     name: 'Alki',
//     neighborhood: 'West Seattle',
//     seagullCount: [6789, 456, 754, 934859, 2, 5674, 7564],
//     render: function() {
//       var ulEl = document.getElementById('alkibeach');
//       for (var i = 0; i < this.seagullCount.length; i++) {
//         // create an element
//         var liEl = document.createElement('li');
//         // give it content
//         liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//         // append it to the DOM
//         // parent.appendChild(child)
//         ulEl.appendChild(liEl);
//       }
//     }
//   };