const Calculator = require('../../app/Calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('Calculator multiply', function() {
    let multi, spy;

    beforeEach(() => {
        multi = new Calculator();
        spy = chai.spy.on(multi, 'multiply');
    });

    afterEach(() => {
        multi = null;
    });

    it('should return 16 when called with number 4,4', function () {
        expect(multi.multiply(4, 4)).to.be.equal(16);
    });

    it('should return 110889 when called with number 333,333', function () {
        expect(multi.multiply(333, 333)).to.be.equal(110889);
    });

    it('should return -539 when called with number -7,77', function() {
        expect(multi.multiply(-7,77)).to.be.equal(-539);
    });

    it('should throw error if an array is passed as a parameter', () => {
        try { multi.multiply([666, 333]) } catch (errorArrayNotANumber) { expect(errorArrayNotANumber).to.exist }
    });

    it('should throw an error when one of the parameters is not Number', () => {
        try { multi.multiply('azz', 44) } catch (errorNotANumber) { expect(errorNotANumber).to.exist }
    });
})
