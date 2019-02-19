const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {

  let paint;

  beforeEach(function(){
    paint = new Paint(5);
  });

  it('should have a number of liters', function() {
    const actual = paint.liters;
    const expected = 5;
    assert.strictEqual(actual, expected);
  });

  it('should check if it is empty false', function() {
    const actual = paint.empty();
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('should check if paint can be used', function() {
    paint.usePaint();
    const expected = 4;
    const actual = paint.liters;
    assert.strictEqual(actual, expected);
  });

  it('should check if it is empty true', function() {
    const paint2 = new Paint(1);
    paint2.usePaint();
    const actual = paint2.empty();
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  });
