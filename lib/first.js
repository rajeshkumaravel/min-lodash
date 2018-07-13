/**
 * Description.
 * Returns the first element of an array. Passing n will return the first n elements of the array.
 * @static
 * @since 0.1.0
 * @category Array
 * @param  {Array} array  : Array input
 * @param  {Array} n  : Number of elements to return from 0 to n
 * @returns {Array}       : Returns new array with specified range
 * 
 * @example
 * _.first([1, 2, 3, 4, 5], 2)
 * Result : [1, 2]
 */

function first(array, n) {
    /* istanbul ignore else */
    if (Array.isArray(array)) {
        /* istanbul ignore else */
        if (array.length > 0) {
            /* istanbul ignore else */
            if (!isNaN(n)) {
                return array.slice(0, n);
            } else {
                throw new Error('Expected number as second argument');
            }
        } else {
            return undefined;
        }
    } else {
        throw new Error('Expected array as first argument');
    }
}

module.exports = first;
