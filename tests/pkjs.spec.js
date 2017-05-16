const chai    = require("chai");
const sinon   = require("sinon");
const sinChai = require("sinon-chai");

const pkjs = require('../index');

const expect = chai.expect;

chai.use(sinChai);


describe('pkjs', () => {
    it('is nice', () => {
       expect().to.be.ok;
    });
});
