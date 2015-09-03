'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, a, b[, rand] )
*	Creates a matrix of uniform distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with uniform random numbers
*/
function random( dims, dt, a, b, rand ) {
	var out,
		draw,
		i;

	draw = partial( a, b, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
