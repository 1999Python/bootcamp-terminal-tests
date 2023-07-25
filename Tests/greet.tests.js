var assert = require('assert');
var greet = require('../greet.js');

describe('greet' , function(){
    it('It should return a greeting to Hakeem.' , function(){
        
        assert.equal("Hello, Hakeem", greet("Hakeem"));
       
    });
    
    it('It should return a greeting to Sarah" ' , function(){
        
        assert.equal("Hello, Sarah", greet("Sarah"));
})

it('It should return a greeting to Yasmin" ' , function(){
        
    assert.equal("Hello, Yasmin", greet("Yasmin"));
})

});
