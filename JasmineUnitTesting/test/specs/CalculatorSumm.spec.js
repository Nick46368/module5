const Calculator = require('../../app/Calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('Calculator summarize', function() {
    let summarize, spy;

    beforeEach(() => {
        summarize = new Calculator();
        spy = chai.spy.on(summarize, 'summarize');
    });

    afterEach(() => {
        summarize = null;
    });

    it('should return 88 when called with number 44,44', function() {
        expect(summarize.summ(44,44)).to.be.equal(88);
    });

    it('should return 666 when called with number 333,333', function() {
        expect(summarize.summ(333,333)).to.be.equal(666);
    });

    // it('should throw an error if use some symbols', function() {
    //      expect(summarize.summ(d, 4)).to.be.equal('Input value is not a Number! Enter valid data!');
    // });
});
