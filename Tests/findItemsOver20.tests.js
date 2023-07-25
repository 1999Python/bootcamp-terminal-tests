var assert = require('assert');
var findItemsOver20 = require('../findItemsOver20.js');

describe('findItemsOver20' , function(){



    it('It should return the products that have a quantity higher than 20 which is ice-cream and cookies.' , function(){
       
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'cookies', qty : 37},
            {name : 'ice-cream', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'cookies', qty : 37},
            {name : 'ice-cream', qty : 27},
        ];
       
        assert.deepEqual(results, findItemsOver20(itemList));
    });


    it('It should return the products that have a quantity higher than 20 which is watermelon and pears.' , function(){
        
        var itemList2 = [
           
            {name : 'pears', qty : 39},
            {name : 'watermelon', qty : 87},
            {name : 'apples', qty : 3},
            {name : 'strawberries', qty : 13},
        ];
        
        var results2 = [
            {name : 'pears', qty : 39},
            {name : 'watermelon', qty : 87},
        
        ];

        assert.deepEqual(results2, findItemsOver20(itemList2));
        
    });



    it('It should return the products that have a quantity higher than 20 which is Melon.' , function(){
           
    var itemList3 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 20},
        {name : 'Melon', qty : 23},
    ];
    
    var results3 = [
        {name : 'Melon', qty : 23},
    ];
        
    assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});