var Monitor = require('../climateControlModules/monitor');
var expect = require('expect');

var monitor = new Monitor();

describe("Monitor Tests", function(){
  describe("getTempStatus() Tests"), function(){
    it("Returns an error if readings unreasonably low", function(){
      var status = monitor.getTempStatus(-60);
      expect(status).toEqual("ERROR: Component malfunction");
    });

    it("Returns an error if readings unreasonably high", function(){

    });
  }
})
