const cache = require('../src/advanced-functions').cache;
const ladder = require('../src/advanced-functions').ladder;
const applyAll = require('../src/advanced-functions').applyAll;
require('mocha-sinon');
const sum = require('../src/advanced-functions').sum;
const mul = require('../src/advanced-functions').mul;

const ladderResult1 = {...ladder}
    .up()
    .up()
    .down()
    .up()
    .down()
    .showStep()

const ladderResult2 = {...ladder}
    .up()
    .up()
    .down()
    .up()
    .up()
    .showStep()

const ladderResult3 = {
    step: 1,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log(this.step);
        return this
    }
};

describe('Ladder object', () => {
    beforeEach(function () {
        this.sinon.stub(console, 'log');
    });

    it('Should return an expected object', () => {
        const obj = {...ladder};
        expect(obj.up()).to.eql(ladderResult3)
    })

    it('Should console log 1', () => {
        ladderResult1.showStep();
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith(1)).to.be.true;
    });

    it('Should console log 3', () => {
        ladderResult2.showStep();
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith(3)).to.be.true;
    });

    it('Should console log 1 and -1', () => {
        const obj = {...ladder}
        obj
            .up()
            .showStep()
            .down()
            .down()
            .showStep();
        expect(console.log.callCount).to.be.equal(2);
        expect(console.log.calledWith(1)).to.be.true;
        expect(console.log.calledWith(-1)).to.be.true;
    });

})

describe('applyAll function testing', () => {
  it('Should return correct sum according to given arguments in function', () => {
    expect(applyAll(sum,1,2,3))
        .to.eql(6);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(applyAll(sum,22,232))
        .to.eql(254);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(applyAll(sum,5,3,5,12,10,22,1,51,33))
        .to.eql(142);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(applyAll(sum,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1))
        .to.eql(17);
  });
  it('Should return correct mul according to given arguments in function', () => {
    expect(applyAll(mul,21,2,5))
        .to.eql(210);
  });
  it('Should return correct mul according to given arguments in function', () => {
    expect(applyAll(mul,6,6))
        .to.eql(36);
  });
  it('Should return correct mul according to given arguments in function', () => {
    expect(applyAll(mul,5,2,12,1,6,32,31,88,121,4,2))
        .to.eql(60841820160);
  });
  it('Should return correct mul according to given arguments in function', () => {
    expect(applyAll(mul,3,2,1,0))
        .to.eql(0);
  });
});

