var HWController = require('../climateControlModules/hwController');
var expect = require('expect');

var hwcontroller = new HWController();
hwcontroller.buildHWComponentList();


it('hardware components temp reading is 15', () => {

    expect(hwcontroller.hwComponents[0]['reading']).toBe(15);
})

it('hardware components type is temp-sensor', () => {

    expect(hwcontroller.hwComponents[0]['type']).toBe('Temp-Sensor');
})

it('hardware component of first zone is present or not', () => {
    expect(hwcontroller.hwComponents[0]).toEqual({
        zone: '0',
        type: 'Temp-Sensor',
        id: 'temp_sensor_0',
        reading: 15,
        power: false
    })
})

it('hardware components id is temp-sensor-0', () => {

    expect(hwcontroller.hwComponents[0]['id']).toBe('temp_sensor_0');
})
