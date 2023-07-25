var assert = require('assert');
var countAllPaarl = require('../countAllPaarl.js');

describe('countAllPaarl' , function(){
  
    it('It should return 1 registration number originating from Paarl starting with CJ.' , function(){
        
        var list = countAllFromTown('CA 987,CY 654,GP 63654, CJ 456,CL 65321','CJ');

        assert.equal(1, list);
    })


    it('It should return 2 registration number originating from Paarl starting with CJ.' , function(){
        
        var list = countAllFromTown('CJ 45 63, LKG 679 EC, CJ 45699, MP 654 96, FGT 491 L','CJ');

        assert.equal(2, list);
    })

    it('It should return 0 registration number originating from Paarl starting with CJ' , function(){
        
        var list = countAllFromTown('LKG 679 EC, CA 45699, MP 654 96, FGT 491 L');

        assert.equal(0, list);
    })
   
})