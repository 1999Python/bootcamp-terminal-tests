var assert = require('assert');
var isWeekday = require('../isWeekday.js');

describe('isWeekday' , function(){
    it('It should return True if it is a day of the week.' , function(){
        assert.equal(false ,isWeekday('Saturday'));
    });

    it('It should return True if it is a day of the week.' , function(){
        assert.equal(true ,isWeekday('Monday'));
    });

    it('It should return True if it is a day of the week.' , function(){
        assert.equal(false ,isWeekday('Sunday'));
    });

});