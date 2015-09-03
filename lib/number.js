'use strict';

// GENERATE UNIFORM RANDOM NUMBERS //

/**
* FUNCTION random( a, b[, rand] )
*	Generates a random draw from an uniform distribution with parameter `a` and `b`.
*
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( a, b, rand ) {
	var u;
	u = rand ? rand() : Math.random();
	return ( b - a ) * u + a;
}

module.exports = random;
