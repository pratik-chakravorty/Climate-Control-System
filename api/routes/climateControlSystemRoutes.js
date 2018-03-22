'use strict';
module.exports = function(app) {
  var guiController = require('../controllers/guiController');
  var simController = require('../controllers/simController');

  app.route('/temp')
    .get(guiController.getTemperatures)
    .post(guiController.setTemperatures);

/*
  app.route('/temp/:compId')
    .get(guiController.getTemperatureById)
    .post(guiController.setTemperatureById);

  app.route('/co2')
    .get(guiController.getCO2s)
    .post(guiController.setCO2s);

  app.route('/co2/:compId')
    .get(guiController.getCO2ById)
    .post(guiController.setCO2ById);

  app.route('/humidity')
    .get(guiController.getHumidities)
    .post(guiController.setHumidities);

  app.route('/humidity/:compId')
    .get(guiController.getHumidityById)
    .post(guiController.setHumidityById);

  app.route('/pressure')
    .get(guiController.getPressure)
    .post(guiController.setPressure);

  app.route('/pressure/:compId')
    .get(guiController.getPressureById)
    .post(guiController.setPressureById);

  app.route('/simulationInit')
    .post(simController.initialize);
*/

}
