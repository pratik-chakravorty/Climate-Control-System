var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,

  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

  //Mongoose connection
  //mongoose.Promise = global.Promise;
  //mongoose.connect('');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/climateControlSystemRoutes');
routes(app);

var hwController = require('./climateControlModules/hwController');
//var monitor = require('./climateControlModules/monitor');



var hw =  new hwController;

hw.buildHWComponentList();

app.listen(port);

console.log('Climate Control RESTful API server started on: ' + port);

while (1){
  //setTimeout(monitoring(), 1000);

};
