/**
 * Description.
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 * @static
 * @since 0.0.1
 * @category Array
 * @param  {Array} array  : The array to compact
 * @returns {Array}       : Returns new array with filtered values
 * 
 * @example
 * _.compact([0, 1, false, 2, '', 3])
 * Result : [1, 2, 3]
 */

function compact(array) {
    return array.filter(v => v);
}

module.exports = compact;
