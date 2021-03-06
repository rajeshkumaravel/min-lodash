const assert = require('assert');
const lib = require('../lib/index');

describe('Array', function () {
    describe('compact', function () {
        it('Returns new array without falsey values', function () {
            assert.deepEqual(lib.compact([1, 2, null, 3, undefined, 4, '']), [1, 2, 3, 4]);
        });
    });
    describe('concat', function () {
        it('Returns new array with concatenated values', function () {
            assert.deepEqual(lib.concat([[1]], [2, [3]]), [[1], 2, [3]]);
        });
    });
    describe('first', function () {
        it('Returns new array with 0 to n values', function () {
            assert.deepEqual(lib.first([1,2,3,4,5], 2), [1,2]);
        });
    });
});
