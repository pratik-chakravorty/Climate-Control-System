var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var hwController = require('./climateControlModules/hwController');
//var monitor = require('./climateControlModules/monitor');

var hw =  new hwController;

hw.buildHWComponentList();
var readings = hw.getReadings();
console.log(readings);

app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);

while (1){
  //setTimeout(monitoring(), 1000);

};
