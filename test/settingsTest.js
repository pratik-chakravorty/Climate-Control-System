var expect = require("chai").expect;
var _settings = require("../climateControlModules/settings");
var settings = new _settings();

describe("Settings tests", function(){
  describe("Update settings"), function(){
    it("Returns error with invalid id", function(){
      var result = settings.updateSettings("invalid", 100);
      expect(result).to.equal("Error: Invalid Setting ID");
    });

    it("Returns error with null value", function(){
      var result = settings.updateSettings(null, 100);
      expect(result).to.equal("Error: Invalid Setting ID");
    });

    it("Updates with temp valid", function(){
      var result = settings.updateSettings("temp", 30);
      expect(result).to.equal("OK");
    });

    it("Returns error with temp too low", function(){
      var result = settings.updateSettings("temp", -5);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with temp too high", function(){
      var result = settings.updateSettings("temp", 70);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with co2 valid", function(){
      var result = settings.updateSettings("co2", 300);
      expect(result).to.equal("OK");
    });

    it("Updates with co2 too low", function(){
      var result = settings.updateSettings("co2", -5);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with co2 too high", function(){
      var result = settings.updateSettings("co2", );
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with humidity valid", function(){});

    it("Updates with humidity too low", function(){});

    it("Updates with humidity too high", function(){});

    it("Updates with pressure valid", function(){});

    it("Updates with pressure too low", function(){});

    it("Updates with pressure too high", function(){});

    it("Updates with fan valid", function(){});

    it("Updates with fan too low", function(){});

    it("Updates with fan too high", function(){});

    it("Updates with damper valid", function(){});

    it("Updates with damper too low", function(){});

    it("Updates with damper too high", function(){});

    it("Updates with coil valid", function(){});

    it("Updates with coil too low", function(){});

    it("Updates with coil too high", function(){});

  }
})
