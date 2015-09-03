'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, a, b[, rand] )
*	Creates an array of uniform distributed random numbers.
*
* @param {Number} len - array length
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with uniform random numbers
*/
function random( len, a, b, rand ) {
	var out,
		draw,
		i;

	draw = partial( a, b, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
