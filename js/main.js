/* Created 02/28/15 */

'use strict'

// To access for testing
var boards;

window.addEventListener( "load", function () {
/*

Runs all the boards for the page, compares their values, etc.
*/

	// TODO: Fetch number of players dynamically
	var numPlayers = 1;

	// var boards 			= [];
	boards = [];
	for (var boardCount = 0; boardCount < numPlayers; boardCount++ ) {

		var board = new Board( (boardCount + 1) );
		boards.push( board );

	}

});  // End document on load
