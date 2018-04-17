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


// Climate Control module imports
var _hwController = require('./climateControlModules/hwController');
var _monitor = require('./climateControlModules/monitor');
var _settings = require('./climateControlModules/settings');
//var _optimizer = require('./climateControlModules/optimizer');


// Initialization
var hwController =  new _hwController();
var monitor = new _monitor();
var settings = new _settings();
//var optimizer = new _optimizer();

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
    var status = {
      "status": "Error"
    };
    if (!req.params.id && !req.query.value){
      status['status'] = "Error: Please enter type and value";
      res.send(status);
      return;
    }
    var settingId = req.params.id;
    var value = Number(req.query.value);
    if (!value){
      status['status'] = "Error: Please enter a valid value";
      res.send(status);
      return;
    }
    var returnStatus = settings.updateSettings(settingId, value);
    status['status'] = returnStatus;
    res.send(status);
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
  //optimizer.updateSettings(settings.getSettings());
  //optimizer.updateReadings(monitor.getMonitorReadings());
  //optimizer.optimize();
  //hwController.setReadingsByControlList(optimizer.getValuesToChange());

}

function run(){
  setInterval(updateSystem, 1000);
}
