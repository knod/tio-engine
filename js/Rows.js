/* Created 03/01/15 */

'use strict'

var Rows = function ( id, fieldHTML, numRows, numCols ) {
/*

Rows object, handling all its rows
*/
	var rows = this;

	// =================
	// SETUP
	// =================
	rows.fieldHTML 		= fieldHTML;
	// ??: Should rows have html? Should mobs' html be in those rows?
	// ??: Should mobs move individually or with their rows?
	rows.htmlList		= [];

	// Measurement values given in percents and should match CSS
	// ??: Should I have pixel value too, to place each mob?
	var numRows 		= numRows;
	var rowHeight		= 8;
	var numCols			= numCols
	var rowWidth		= 88;
	var mobWidth		= 4;
	rows.mobs 			= [];

	rows.speedX 		= 0;
	rows.speedY 		= 0;
	rows.movePause 		= 0;

	rows.shootPause  	= 0;

	// Include this? Can I even create css classes in js?
	var buildMobCSS = function () {
	/*

	If possible, build the css for the mobs?
	*/


	};  // End buildMobCSS()

	// Should each row have html?
	var buildHTML = function () {
	/*

	??: Are mobs each in a row, rows moving all the mobs, and
	yet have only one single list for all the mobs? Is that
	neccessary the way we're going to do collisions currently?
	*/



	};  // End buildHTML()


	var buildMobs = function () {
	/*

	Build the list of all mobs
	*/
		var mobs = [];

		return mobs;
	};  // End buildMobs


	// =================
	// RUNTIME FUNCITONS
	// =================
	var needToChangeDirection = function () {
	/*

	Check if direction of movement needs to be changed
	*/


	};  // End needToChangeDirection()


	var changeDirection = function () {
	/*

	Move down and set speed to the opposite
	horizontal direction
	*/


	};  // End changeDirection()


	var moveX = function () {
	/*

	Staggered horizontal movement for mobs, by row
	*/


	};  // End moveX()


	var moveY = function () {
	/*

	Staggered vertical movement for mobs, by row
	*/


	};  // End moveY()

	var getRandomLowest = function () {
	/*

	Gets a random mob that is the lowest in its row
	*/

		// Get random mob and its column (that way we know we
		//	get a column with a mob in it)
		// Get the lowest mob in that row


	};  // End getRandomLowest()


	var triggerAttack = function () {


	};  // End triggerAttack()


	var killDeadMobs = function () {
	/*

	Iterate through mobs, killing any that need killing
	*/


	};  // End killDeadMobs()

	rows.update = function () {
	/*

	*/

		// Kill all mobs that have been marked as dead
		// After an appropriate pause, trigger horizontal movement
		// After an appropriate pause, trigger vertical movement

	};

	// =================
	// INITIALIZATION
	// =================
	rows.mobs = buildMobs();

	// ===========
	// END
	// ===========
	return rows;
	
};  // End Rows{}
