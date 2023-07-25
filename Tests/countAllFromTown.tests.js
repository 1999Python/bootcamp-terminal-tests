var assert = require('assert');
var countAllFromTown = require('../countAllFromTown.js');

describe('countAllFromTown' , function(){
  
    it('It should return 3 registration numbers originating from Stellenbosch starting with CL.' , function(){
        
        var fromStellies = countAllFromTown('CL 987,CY 654,CL 654, CJ 456,CL 321','CL');

        assert.equal(3, fromStellies);
    })

    it('It should return 2 registration numbers originating from Kuilsriver starting with CF.' , function(){
        
        var fromKuilsriver = countAllFromTown('CF 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(2, fromKuilsriver);
    })


    it('It should return 1 registration numbers originating from Cape Town starting with CA.' , function(){
        
        var fromCapeTown = countAllFromTown('CA 555 436,CY 567,CL 345, CF 456, CL 341','CA');

        assert.equal(1, fromCapeTown);
    })
   
})



