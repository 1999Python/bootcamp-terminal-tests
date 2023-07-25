var assert = require('assert');
var yearsAgo = require('../yearsAgo.js');

describe('yearsAgo' , function(){
    it('It should return how many years ago from the year 1999.' , function(){
        assert.equal((new Date().getFullYear() - 1999), yearsAgo(1999));
    });

    it('It should return how many years ago from the year 2020.' , function(){
        assert.equal((new Date().getFullYear() - 2020), yearsAgo(2020));
    });

    it('It should return how many years ago from the year 1596.' , function(){
        assert.equal((new Date().getFullYear() - 1596), yearsAgo(1596));
    });

});