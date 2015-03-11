/* Created 02/28/15 */

'use strict'

// To access for testing
var game;

window.addEventListener( "load", function () {
/*

Runs all the boards for the page, compares their values, etc.
*/

	// TODO: Fetch number of players dynamically
	var numPlayers = 1;

	game = new Game( numPlayers );

	// If something
		// game.newGame( numPlayers );

	// // var boards 			= [];
	// boards = [];
	// for (var boardCount = 0; boardCount < numPlayers; boardCount++ ) {

	// 	var board = new Board( (boardCount) );
	// 	boards.push( board );

	// }


	// var newGame = function () {
	// /* ( none ) -> None

	// Clears everything on the page and starts fresh
	// */

	// 	var tempBoardsList = boards.slice();

	// 	// Remove all html of all boards
	// 	for ( var boardi = 0; boardi < boards.length; boardi++ ) {

	// 		var board = boards[ boardi ];
	// 		boardHTML = board.html;

	// 		boardHTML.parentNode.removeChild( boardHTML );

	// 	}  // end for (boards)

	// 	// Add new boards (numPlayers will be retrieved somehow)
	// 	numPlayers = 1;

	// 	boards = [];
	// 	for (var boardCount = 0; boardCount < numPlayers; boardCount++ ) {

	// 		var board = new Board( (boardCount) );
	// 		boards.push( board );

	// 	}

	// 	return boards;
	// };  // End newGame()


});  // End document load event
