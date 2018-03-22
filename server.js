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


app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);

run();

function updateSystem(){
  mon.updateHWReadings(hw.getReadings);
}

function run(){
  setInterval(updateSystem, 1000);
}
