const expect = require('chai').expect;

const greatestProductOfNumbers =  require('../index.js');

describe('Testing when the list contains only integers less than or equal to 0', function(){
    it('Should return -6', function(){
        let list = [-1,-2,-3,-4,-5]
        expect(greatestProductOfNumbers(list)).to.equal(-6);
    })

    it('Should return 0', function(){
        let list = [0,-1,-2,-3,-4,-5];
        expect(greatestProductOfNumbers(list)).to.equal(0);
    })

    it('Should return -6', function(){
        let list = [-1, -2, -3];
        expect(greatestProductOfNumbers(list)).to.equal(-6);
    })

    it('Should return 0', function(){
        let list = [0,0,0];
        expect(greatestProductOfNumbers(list)).to.equal(0);
    })
})

describe('Testing when the list contains non-zero integers and only one positive integer', function(){
    it('Should return 20', function(){
        let list = [-1,-2,-3,-4,-5,1]
        expect(greatestProductOfNumbers(list)).to.equal(20);
    })

    it('Should equal 4', function(){
        let list = [-1,-2,2];
        expect(greatestProductOfNumbers(list)).to.equal(4);
    })
})

describe('Testing when the list contains postive integers, negative integers, and zeros', function(){
    it('Should return 60', function(){
        let list = [-1,-2,-3,-4,-5,1,2,3,0]
        expect(greatestProductOfNumbers(list)).to.equal(60);
    })

    it('Should return 48', function(){
        let list = [-1,-2,1,2,3,8,0]
        expect(greatestProductOfNumbers(list)).to.equal(48);
    })

    it('Should return 0', function(){
        let list = [-1,0,1];
        expect(greatestProductOfNumbers(list)).to.equal(0);
    })

    it('Should return 300', function(){
        let list = [1, 10, 2, 6, 5, 3];
        expect(greatestProductOfNumbers(list)).to.equal(300);
    })

})
