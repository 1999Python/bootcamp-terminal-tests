var assert = require('assert');
var countAllPaarl = require('../countAllPaarl.js');

describe('countAllPaarl' , function(){
  
    it('It should return 1 registration number originating from Paarl starting with CJ.' , function(){
        
        var list = countAllPaarl('CJ 45 63, LKG 679 EC, CF 45699, MP 654 96, FGT 491 L','CP');

        assert.equal(1, list);
    })


    it('It should return 2 registration number originating from Paarl starting with CJ.' , function(){
        
        var list = countAllPaarl('CJ 45 63, LKG 679 EC, CJ 45699, MP 654 96, FGT 491 L','CJ');

        assert.equal(2, list);
    })

    it('It should return 0 registration number originating from Paarl starting with CJ' , function(){
        
        var list = countAllPaarl('LKG 679 EC, CA 45699, MP 654 96, FGT 491 L');

        assert.equal(0, list);
    })
   
})