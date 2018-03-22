var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

  //Mongoose connection
  //mongoose.Promise = global.Promise;
  //mongoose.connect('');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//var routes = require('./api/routes/climateControlSystemRoutes');
//routes(app);
/*
var routes = function(app) {
  app.route('/temp')
    .get(function(req, res){
      console.log("in routes");
      res.send("shit yes");})
    .post(function(req, res){
          res.send(true);
          }
        );
};

*/
var count = 0;



var hwController = require('./climateControlModules/hwController');
var monitor = require('./climateControlModules/monitor');

var hw =  new hwController();
var mon = new monitor();

var settings = {
  "temp_zone_0": 20,
  "temp_zone_1": 20,
  "temp_zone_2": 20,
  "co2_level": 200,
  "humidity_level": 30,
  "pressure": 60
}


hw.buildHWComponentList();

app.route('/temp')
  .get(function (req, res){
    var toReturn = hw.getReadingsByType("Temp-Sensor");
    res.send(toReturn);
  })

app.route('/allReadings')
  .get(function (req, res){
    var toReturn = mon.getMonitorReadings();
    res.send(toReturn);
  });

app.route('/settings/:type')
  .post(function(req, res){
    var type = req.params.type;
    var value = Number(req.query.value);
    settings[type] = value;
    res.send("OK");
  });


app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);

run();

function updateSystem(){
  mon.updateHWReadings(hw.getReadings());
}

function run(){
  setInterval(updateSystem, 1000);
}
