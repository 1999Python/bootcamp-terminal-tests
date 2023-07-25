var assert = require('assert');
var findItemsOver = require('../findItemsOver.js');

describe('findItemsOver' , function(){


    it('It should return products quantity higher than the threshold of 10.' , function(){
       
       
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
       
    assert.deepEqual(results, findItemsOver(itemList, 10));

    });

    it('It should return products quantity higher than the threshold of 50.' , function(){

        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'Ice-cream', qty : 55},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [
            {name : 'Ice-cream', qty : 55},
        ];

        assert.deepEqual(results2, findItemsOver(itemList2, 50));
    });


    it('It should return products quantity higher than the threshold of 199.' , function(){
        
        var itemList3 = [
            {name : 'Furniture', qty : 200},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'Furniture', qty : 200},
        ];
        
        assert.deepEqual(results3, findItemsOver(itemList3, 199));
    
    });

});