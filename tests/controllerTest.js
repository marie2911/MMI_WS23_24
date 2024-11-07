const expect = require('chai').expect;
const { describe } = require('mocha');
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement

describe('fahrenheitToCelsius()', function () {
    it('test below 30', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(30) * 10) / 10).to.equal(-1.1);
    });

    it('test -20°F equals -28.9°C', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(-20) * 10) / 10).to.equal(-28.9);
    });

    it('test 0°F equals -17.8°C', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(0) * 10) / 10).to.equal(-17.8);
    });

    it('test 32°F equals 0°C', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(32) * 10) / 10).to.equal(0);
    });
});

describe('celsiusToFahrenheit()', function() {
    it('test 0°C equals 32°F', function () {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0) * 10) / 10).to.equal(32);
    });

    it('test -5°C equals 23°F', function () {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-5) * 10) / 10).to.equal(23);
    });

});


