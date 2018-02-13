//how much cookies does each location need per day to make
//hours of operation is 6am - 8pm

//These next 3 values change store to store.
// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// the stores are Lower Queen Anne, Cascade, Pike Place Market, Capital Hill, Downtown

//Return Math.floor(Math.random() * (max - min + 1)) + min;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var pike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesSold: 6.3,
  customersPerHour: [],
  numCustomers: function() { //random number of customers
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  numCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.numCustomers());
    }
  }
};
pike.numCustomersPerHour();
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