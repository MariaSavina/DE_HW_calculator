var chai = require('chai')
var sinon = require('sinon')

var insert = require('./main')

describe("getFactorial", () => {
    it("should to be defined", () => {
      chai.assert.isDefined(getFactorial);
    });
    it("should to be defined", () => {
      chai.assert.equal(typeof getFactorial, "function");
    });
    it("should return 1", () => {
      chai.assert.equal(getFactorial(0), 1);
    });
    it("should return 6", () => {
      chai.assert.equal(getFactorial(3), 6);
    });
  });