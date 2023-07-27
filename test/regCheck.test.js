var assert = require('assert');
var regCheck = require('../regCheck.js');

describe('regCheck' , function(){
    

    it("It should return true if the registration number is for GP registration plates." , function(){
       assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });

    it("It should return true if the registration number is for EC registration plates." , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));

    });

    it("It should return true if the registration number is for MP registration plates." , function(){
        assert.equal(true, regCheck('FGT 123 MP', 'MP'));

    });

})