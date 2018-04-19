var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Mongoose connection
//mongoose.Promise = global.Promise;
//mongoose.connect('');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Climate Control module imports
var _hwController = require('./climateControlModules/hwController');
var _monitor = require('./climateControlModules/monitor');
var _settings = require('./climateControlModules/settings');
var _simulator = require('./climateControlModules/simulator');

var _optimizer = require('./climateControlModules/optimizer');

// var _optimizer = require('./climateControlModules/optimizer');


// Initialization
var hwController = new _hwController();
var monitor = new _monitor();
var settings = new _settings();
var simulator = new _simulator();

var optimizer = new _optimizer();
// var optimizer = new _optimizer();



hwController.buildHWComponentList();



// Routes / GUI Controller

app.route('/temp')
  .get(function (req, res) {
    var toReturn = hwController.getReadingsByType("Temp-Sensor");
    res.send(toReturn);
    return;
  })

app.route('/allReadings')
  .get(function (req, res) {
    var toReturn = monitor.getMonitorReadings();
    res.send(toReturn);
    return;
  });

app.route('/settings/:id')
  .post(function (req, res) {
    var status = {
      "status": "Error"
    };
    if (!req.params.id && !req.query.value) {
      status['status'] = "Error: Please enter type and value";
      res.send(status);
      return;
    }
    var settingId = req.params.id;
    var value = Number(req.query.value);
    if (!value) {
      status['status'] = "Error: Please enter a valid value";
      res.send(status);
      return;
    }
    var returnStatus = settings.updateSettings(settingId, value);
    status['status'] = returnStatus;
    res.send(status);
    return;
  });

app.route('/settings')
  .get(function (req, res) {
    var curSettings = settings.getSettings();
    res.send(curSettings);
  });

// start listening and begin main system loop
app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);
var init = true;
run();

function updateSystem() {
  // main system loop
  if (init){

    init = false;
  }
  monitor.updateHWReadings(hwController.getReadings());
  monitor.monitor();
  optimizer.updateSettings(settings.getSettings());
  optimizer.getMonitorReadings(monitor.getMonitorReadings());
  optimizer.optimize();
  var values = optimizer.getValuesToChange();
  console.log(values);
  hwController.setReadingsById(values);
  optimizer.getCO2readings(getReadingsByType("CO2-Sensor"))
  // console.log('Monitor Readings')
  // console.log('-----')
  // console.log(hwController.getReadingById("zone_heater_0"));
  // console.log(hwController.getReadingById("zone_heater_1"));
  // console.log(hwController.getReadingById("zone_heater_2"));

}

function run() {
  setInterval(updateSystem, 1000);
}
