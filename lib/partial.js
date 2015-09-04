'use strict';

// PARTIAL //

/**
* FUNCTION: partial( a, b[, rand] )
*	Partially applies `a` and `b` and returns a function to generate random variables from the uniform distribution.
*
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( a, b, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a uniform distribution with parameters `a` and `b`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = random();
		return ( b - a ) * u + a;
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
