/**
 * Description.
 * Creates a new array concatenating array with any additional arrays and/or values
 * @static
 * @since 0.0.1
 * @category Array
 * @param  {arguments} array(s)  : The array(s) to concat
 * @returns {Array}       : Returns new array with concatenated
 * 
 * @example
 * _.compact([[1]], [2, [3]])
 * Result : [[1], 2, [3]]
 */

function concat() {
    /* istanbul ignore else */
    if (arguments.length > 0) {
        const args = Array.prototype.slice.call(arguments);
        /* istanbul ignore else */
        if (Array.isArray(args[0])) {
            let index = arguments.length;
            let array  = new Array();
            for (index in args) {
                array = array.concat(args[index]);
            }
            return array;
        } else {
            throw new Error('Expected array as first argument');
        }
    } else {
        return [];
    }
}

module.exports = concat;