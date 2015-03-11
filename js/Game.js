/* Created 03/11/15 */

'use strict'

var Game = function ( numPlayers ) {
/*

Does all the game stuff. It's a separate object mostly
so I can test its different functions.
*/
	var game = this;

	// ============
	// SETUP
	// ============
	game.numPlayers = numPlayers;
	game.boards 	= [];


	game.newGame = function ( numPlayers ) {
	/* ( none ) -> None

	Clears everything on the page and starts fresh
	*/
		self = this;

		var boards_ = self.boards;

		var tempBoardsList = boards_.slice();

		// Remove all html of all boards
		for ( var boardi = 0; boardi < boards_.length; boardi++ ) {

			var board = boards_[ boardi ];
			var boardHTML = board.html;

			boardHTML.parentNode.removeChild( boardHTML );

		}  // end for (boards)

		var newBoards = [];
		for (var boardCount = 0; boardCount < numPlayers; boardCount++ ) {

			var board = new Board( (boardCount) );
			newBoards.push( board );

		}

		self.boards = newBoards;
		return newBoards;
	};  // End newGame()


	// ===============
	// INITIALIZATION
	// ===============
	game.newGame( numPlayers );


	// ===============
	// END
	// ===============
	return game;

}  // End Game{}