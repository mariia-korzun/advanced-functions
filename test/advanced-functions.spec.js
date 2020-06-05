const cache = require('../src/advanced-functions').cache;
const ladder = require('../src/advanced-functions').ladder;
const applyAll = require('../src/advanced-functions').applyAll;
require('mocha-sinon');

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
