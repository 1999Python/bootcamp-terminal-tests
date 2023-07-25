var assert = require('assert');
var totalPhoneBill = require('../totalPhoneBill.js');

describe('totalPhoneBill' , function(){
    it('It should return the total for 3 sms and 2 call.' , function(){
        assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('It should return the total for 1 sms and 1 call.' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('It should return the total for 2 sms.' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});