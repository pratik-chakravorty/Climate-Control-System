'use strict';
module.exports = function(app) {
  var guiController = require('../controllers/guiController');
  var simController = require('../controllers/simController');

  app.routes('/temp')
    .get(guiController.getTemperatures)
    .post(guiController.setTemperatures);

  app.routes('/temp/:compId')
    .get(guiController.getTemperatureById)
    .post(guiController.setTemperatureById);

  app.routes('/co2')
    .get(guiController.getCO2s)
    .post(guiController.setCO2s);

  app.routes('/co2/:compId')
    .get(guiController.getCO2ById)
    .post(guiController.setCO2ById);

  app.routes('/humidity')
    .get(guiController.getHumidities)
    .post(guiController.setHumidities);

  app.routes('/humidity/:compId')
    .get(guiController.getHumidityById)
    .post(guiController.setHumidityById);

  app.routes('/pressure')
    .get(guiController.getPressure)
    .post(guiController.setPressure);

  app.routes('/pressure/:compId')
    .get(guiController.getPressureById)
    .post(guiController.setPressureById);

  app.routes('/simulationInit')
    .post(simController.initialize);


}
