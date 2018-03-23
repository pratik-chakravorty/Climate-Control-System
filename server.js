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




// Initialization

var _hwController = require('./climateControlModules/hwController');
var _monitor = require('./climateControlModules/monitor');
var _settings = require('./climateControlModules/settings');

var hwController =  new _hwController();
var monitor = new _monitor();
var settings = new _settings();

hwController.buildHWComponentList();



// Routes / GUI Controller

app.route('/temp')
  .get(function (req, res){
    var toReturn = hwController.getReadingsByType("Temp-Sensor");
    res.send(toReturn);
  })

app.route('/allReadings')
  .get(function (req, res){
    var toReturn = monitor.getMonitorReadings();
    res.send(toReturn);
  });

app.route('/settings/:id')
  .post(function(req, res){
    if (!req.params.id && !req.query.value){
      res.send("Error: Please enter type and value");
      return;
    }
    var settingId = req.params.id;
    var value = Number(req.query.value);
    if (!value){
      res.send("Error: Please enter a valid value");
      return;
    }
    var returnStatus = settings.updateSettings(settingId, value);
    res.send("OK");
  });

app.route('/settings')
  .get(function(req, res){
    var curSettings = settings.getSettings();
    res.send(curSettings);
  });

// start listening and begin main system loop
app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);

run();

function updateSystem(){
  // main system loop
  monitor.updateHWReadings(hwController.getReadings());
}

function run(){
  setInterval(updateSystem, 1000);
}
