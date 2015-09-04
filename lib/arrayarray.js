'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, a, b[, rand] )
*	Creates a multidimensional array of uniform distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with uniform random numbers
*/
function random( dims, a, b, rand ) {
	var draw = partial( a, b, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
