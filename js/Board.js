/* Created 02/28/15 */

'use strict'

var Board = function ( idNum ) {
/*

Board object, hopefully decoupled enough to allow for
multiple boards
*/
	var board = this;

	// =================
	// SETUP
	// =================
	// Many values might be fetched for comparison with other boards
	board.html 			= null; // needed?
	board.idNum			= idNum;

		// board.gameOver 		= false;
		// board.paused 		= false;

	board.field 		= null;
		// board.stats 		= new Stats( id, boardHTML );
		// Not sure if we're going to use points at all
		// board.mobTypes		= {
		// 	1: { points: 10 },
		// 	2: { points: 20 },
		// 	3: { points: 30 },
		// 	// This is a base value, will be randomized
		// 	x: { points: 100 }
		// };

		// board.paused 		= false;
		// board.elapsedPause 	= 0;
		// board.oldPauseTime 	= 0;

		// // For stats
		// var currentTime 	= Date.now();
		// board.elapsedTime 	= currentTime;
		// board.mobDeathCount = {
		// 	1: 0,
		// 	2: 0,
		// 	3: 0,
		// 	x: 0
		// };
		// // Determined by board.field.player
		// board.lives;
		// board.shots;
		// board.hits;


	var buildHTML = function () {
	/*

	Does not append the object
	*/

		var html 		= document.createElement( "div" );
		html.className 	= "board";
		html.id 		= "board_" + board.idNum;

		return html;
	};  // End buildHTML()


		// var playerWins = function ( winType ) {
		// /*

		// */


		// };  // End playerWins()


		// var playerLoses = function ( lossType ) {
		// /*

		// */


		// };  // End playerLoses()


		// var endGame = function () {
		// /*

		// */


		// };  // End endGame()


		// var togglePause = function () {
		// /* ( none ) -> Board

		// Just toggles the paused state of the game
		// */

		// 	var self = this;

		// 	if ( self.paused === true ) {
		// 		self.paused = false;
		// 	} else {
		// 		self.paused = true;
		// 	}

		// 	return togglePause;
		// };  // End pause()


		// board.update = function () {
		// /*

		// Updates other elements, handles pause and game over
		// */
		// 	var self = this;

		// 	if ( !self.paused && !self.gameOver ) {



		// 	}  // end if ( !paused && !gameOver )

		// 	if ( self.paused ) {
		// 		// Just keep adding up bits of time
		// 		self.elapsedPause += Date.now() - self.oldPauseTime;
		// 		self.oldPauseTime = Date.now();
		// 		// For test, add a div with id of "pause" into the DOM
		// 		// document.getElementById("pause").innerHTML = self.elapsedPause;

		// 	}  // end if ( paused )

		// 	// ===========
		// 	// LOOP (always want to loop, to do/sense other things, be able to start again, etc)
		// 	// ===========
		// 	self.currentTime = Date.now() - self.elapsedPause;
		// 	// Prepares to time pause, but doesn't do anything with it unless game is paused
		// 	self.oldPauseTime = Date.now();

		// 	requestAnimationFrame( self.update.bind( self ) );

		// };  // End Board.update()


	// =================
	// INITIALIZATION
	// =================
	board.html 	= buildHTML();
	board.field = new Field( idNum, board.html );

	document.body.appendChild( board.html );
	// ===========
	// END
	// ===========
	return board;
	
};  // End Board{}
