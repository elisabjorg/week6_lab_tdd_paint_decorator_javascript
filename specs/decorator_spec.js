const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator(0);
  });

  it('should have no stock', function() {
    const actual = decorator.paintStock;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should have no stock', function() {
    const actual = decorator.paintStock;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a can of paint to paint stock', function() {
    decorator.addPaintToStock();
    const actual = decorator.paintStock;
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total liters in stock', function() {
    const actual = decorator.calculateLiters();
    const expected = 10;
    assert.strictEqual(actual, expected);
  });






});
