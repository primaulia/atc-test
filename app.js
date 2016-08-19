var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/atc_db');

var Terminal = require("./models/terminal");
var Airport = require("./models/airport");


var changi = new Airport(
  {
    name: "Changi Airport",
    country: "Singapore"
  }
);

changi.terminals.push(
  {
    name: "T1",
    capacity: 1000
  },
  {
    name: "T2",
    capacity: 2000
  },
  {
    name: "T3",
    capacity: 3000
  }
)

// console.log(changi);

changi.save(function(err) {
  // console.log('changi is saved to the database');
});

console.log(changi.terminals[0]);
