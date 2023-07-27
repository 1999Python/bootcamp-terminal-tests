var assert = require('assert');
var transportFee= require('../transportFee.js');

describe('transportFee' , function(){
    it('It should return "R20" for the Morning shift.' , function(){
        assert.equal("R20", transportFee('morning'));
    });
    it('It should return "R10" for the Afternoon shift.' , function(){
        assert.equal("R10", transportFee('afternoon'));
    });
    it('It should return "free" for the Night shift.' , function(){
        assert.equal("free",  transportFee('night'));
    });
});