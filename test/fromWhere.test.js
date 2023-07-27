var assert = require('assert');
var fromWhere = require('../fromWhere.js');

describe('fromWhere' , function(){
    it('It should return Bellville if the registration number starts with CY.' , function(){
        assert.equal('Bellville', fromWhere('CY 567489'));
    });

   
    it('It should return Cape Town if the registration number starts with CA.' , function(){
        assert.equal('Cape Town', fromWhere('CA 987504'));
    });

    it('It should return some other place if the registration number starts with other letters.' , function(){
        assert.equal('Some other place!', fromWhere('ZN 568593'));
    });

});