var assert = require('assert');
var countRegNumber = require('../countRegNumber.js');

describe('countRegNumber' , function(){
    it('It should return 2 registration numbers within the list.' , function(){
        assert.equal(2,countRegNumber('CA 42665, AA 12 RT GP'));
    });
    it('It should return 3 registration numbers within the list.' , function(){
        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

    it('It should return 1 registration number within the list.' , function(){
        assert.equal(1,countRegNumber("CA 182736"));
    });

});