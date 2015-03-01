/* Created 02/28/15 */

'use strict'

var Board = function ( id ) {
/*

Board object, hopefully decoupled enough to allow for
multiple boards
*/
	var board = this;

	// =================
	// SETUP
	// =================
	// Many values might be fetched for comparison with other boards
	board.id			= id;

	board.gameOver 		= false;
	board.paused 		= false;

	board.field 		= new Field( 1, boardHTML );
	board.stats 		= new Stats( 1, boardHTML );
	// Not sure if we're going to use points at all
	board.mobTypes		= {
		1: { points: 10 },
		2: { points: 20 },
		3: { points: 30 },
		// This is a base value, will be randomized
		x: { points: 100 }
	};

	// For stats
	var currentTime 	= Date.now();
	board.elapsedTime 	= currentTime;
	board.mobDeathCount = {
		1: 0,
		2: 0,
		3: 0,
		x: 0
	};
	// Determined by board.field.player
	board.lives;
	board.shots;
	board.hits;


	var buildHTML = function () {
	/*

	*/


	};  // End buildHTML()

	var pause = function () {
	/*

	*/


	};  // End pause()


	var endGame = function () {
	/*

	*/


	};  // End endGame()


	var playerWins = function ( winType ) {
	/*

	*/


	};  // End playerWins()


	var playerLoses = function ( lossType ) {
	/*

	*/


	};  // End playerLoses()

	board.update = function () {
	/*

	Updates other elements, handles pause and game over
	*/


	};  // End Board.update()


	// =================
	// INITIALIZATION
	// =================

	// ===========
	// END
	// ===========
	return board;
	
};  // End Board{}
