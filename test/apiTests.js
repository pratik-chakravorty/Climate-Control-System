var expect = require("chai").expect;
var request = require("request");
//var _settings = require("../climateControlModules/settings");
//var settings = new _settings();

// describe("API testing", function() {
//   describe("Gets all the hardware values", function() {
//     var url = "http://localhost:3000/allReadings";
//
//     /*it("It returns nothing", function(done) {
//       request(url, function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//       });
//     });*/
//
//     it("It returns all the values", function(done) {
//       fetch('http://localhost:3000/allReadings')
//         .then(function(response) {
//           return response.json()
//         }).then(function(json) {
//           // Parse data
//           console.log('parsed json', json);
//           // Do stuff:
//
//           temp.textContent = JSON.parse(json[0].reading);
//           temp2.textContent = JSON.parse(json[4].reading);
//           temp3.textContent = JSON.parse(json[8].reading);
//           tempV.textContent = JSON.parse(json[12].reading);
//
//           co2.textContent = JSON.parse(json[1].reading);
//           co22.textContent = JSON.parse(json[5].reading);
//           co23.textContent = JSON.parse(json[9].reading);
//
//         }).catch(function(ex) {
//           console.log('parsing failed', ex);
//         });
//         expect(body).to.equal("[0,255,0]");
//         done();
//
//     });
//   });
// });
