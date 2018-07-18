[![Coverage Status](https://coveralls.io/repos/github/rajeshkumaravel/min-lodash/badge.svg?branch=master)](https://coveralls.io/github/rajeshkumaravel/min-lodash?branch=master)
[![Build Status](https://travis-ci.org/rajeshkumaravel/min-lodash.svg?branch=master)](https://travis-ci.org/rajeshkumaravel/min-lodash)
[![HitCount](http://hits.dwyl.io/rajeshkumaravel/min-lodash.svg)](http://hits.dwyl.io/rajeshkumaravel/min-lodash)

# min-lodash
JavaScript utility using ES functions without need of 3rd party library

## Quick Links

**[Array](#array)**

1. [compact](#compact)
1. [concat](#concat)
1. [first](#first)

## Array

### compact

Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(v => v)
  ```

**[⬆ Back to top](#quick-links)**

### concat

Creates a new array concatenating array with any additional arrays and/or values
  
  ```js
  // Underscore/Lodash
  var array = [1]
  var other = _.concat(array, [[1]], [2, [3]])

  console.log(other)
  // output: [1, [1], 2, [3]]
  
  // Native
  var array = [1]
  var other = array.concat([[1]], [2, [3]])

  console.log(other)
  // output:  [1, [1], 2, [3]]
  ```

**[⬆ Back to top](#quick-links)**

### first

Returns the first element of an array. Passing n will return the first n elements of the array
  
  ```js
  // Underscore/Lodash
  _.first([1, 2, 3, 4, 5]);
  // => 1

  _.first([1, 2, 3, 4, 5], 2);
  // => [1, 2]

  // Native
  [1, 2, 3, 4, 5][0];
  // => 1

  [1, 2, 3, 4, 5].slice(0, 2);
  // => [1, 2]
  ```

**[⬆ Back to top](#quick-links)**
