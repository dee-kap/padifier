'use strict';

var assert = require('chai').assert;
var padifier = require('./index.js');
var _ = require('lodash');

describe('padifier tests', function() {

  it('should define padLeft', function() {
    assert.isFalse(_.isUndefined(padifier.padLeft));
  });

  it('should define padLeft as a function', function() {
    assert.isTrue(_.isFunction(padifier.padLeft));
  });

  it('should define padRight', function() {
    assert.isFalse(_.isUndefined(padifier.padRight));
  });

  it('should define padRight as a function', function() {
    assert.isTrue(_.isFunction(padifier.padRight));
  });

  it('should define padBoth', function() {
    assert.isFalse(_.isUndefined(padifier.padBoth));
  });

  it('should define padBoth as a function', function() {
    assert.isTrue(_.isFunction(padifier.padBoth));
  });

  describe('.padLeft', function() {

    it('should return the string as is when length and pad-character are not passed in', function() {
      var expected = "hello";
      var actual = padifier.padLeft('hello');
      assert.equal(expected, actual);
    });

    it('should return the string as is when length is zero', function() {
      var expected = "hello";
      var actual = padifier.padLeft('hello', 0);
      assert.equal(expected, actual);
    });

    it('should return the string as is when undefined length is passed in', function() {
      var expected = "hello";
      var actual = padifier.padLeft('hello', undefined, '*');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is empty', function() {
      var expected = "     hello";
      var actual = padifier.padLeft('hello', 5, '');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is undefined', function() {
      var expected = "         hello";
      var actual = padifier.padLeft('hello', 9 );
      assert.strictEqual(expected, actual);
    });

    it('should pad correctly', function() {
      var expected = "$$$$$$hello";
      var actual = padifier.padLeft('hello', 6, '$' );
      assert.strictEqual(expected, actual);
    });

  });

  describe('.padRight', function() {

    it('should return the string as is when length and pad-character are not passed in', function() {
      var expected = "hello";
      var actual = padifier.padRight('hello');
      assert.equal(expected, actual);
    });

    it('should return the string as is when length is zero', function() {
      var expected = "hello";
      var actual = padifier.padRight('hello', 0);
      assert.equal(expected, actual);
    });

    it('should return the string as is when undefined length is passed in', function() {
      var expected = "hello";
      var actual = padifier.padRight('hello', undefined, '*');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is empty', function() {
      var expected = "hello     ";
      var actual = padifier.padRight('hello', 5, '');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is undefined', function() {
      var expected = "hello         ";
      var actual = padifier.padRight('hello', 9 );
      assert.strictEqual(expected, actual);
    });

    it('should pad correctly', function() {
      var expected = "hello$$$$$$";
      var actual = padifier.padRight('hello', 6, '$' );
      assert.strictEqual(expected, actual);
    });

  });

  describe('.padBoth', function() {

    it('should return the string as is when length and pad-character are not passed in', function() {
      var expected = "hello";
      var actual = padifier.padBoth('hello');
      assert.equal(expected, actual);
    });

    it('should return the string as is when length is zero', function() {
      var expected = "hello";
      var actual = padifier.padBoth('hello', 0);
      assert.equal(expected, actual);
    });

    it('should return the string as is when undefined length is passed in', function() {
      var expected = "hello";
      var actual = padifier.padBoth('hello', undefined, '*');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is empty', function() {
      var expected = "     hello     ";
      var actual = padifier.padBoth('hello', 5, '');
      assert.strictEqual(expected, actual);
    });

    it('should pad empty spaces when padCharacter is undefined', function() {
      var expected = "         hello         ";
      var actual = padifier.padBoth('hello', 9 );
      assert.strictEqual(expected, actual);
    });

    it('should pad correctly', function() {
      var expected = "$$$$$$hello$$$$$$";
      var actual = padifier.padBoth('hello', 6, '$' );
      assert.strictEqual(expected, actual);
    });

  });
});
