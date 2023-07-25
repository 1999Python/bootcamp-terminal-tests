var assert = require('assert');
var isFromBellville = require('../isFromBellville.js');

describe('isFromBellville' , function(){
    

    it("It should return true if the registration numbers starting with CY." , function(){
        assert.equal(true, isFromBellville('CY 896 563'));

    });

    it("It should return true if the registration numbers starting with CY." , function(){
        assert.equal(false, isFromBellville('CJ 4657 860'));

    });

    it("It should return true if the registration numbers starting with CY." , function(){
        assert.equal(false, isFromBellville('CJ 4657 850'));

    });
})