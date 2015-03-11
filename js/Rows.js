/* Created 03/01/15 */

'use strict'

var Rows = function ( idNum, fieldHTML, numRows, numCols ) {
/*

Rows object, handling all its mobs. Mobs will each move individually.
Everything is in pixels.
*/
	var rows = this;

	// =================
	// SETUP
	// =================
	rows.bounderHTML 	= fieldHTML;
	rows.idNum 			= idNum;
	rows.mobs 			= [];

	var rowMap 			= ["1", "2", "2", "3", "3"];
	// Measurement values given in percents and should match CSS
	// ??: Should I have pixel value too, to place each mob?
	// Calculations needed for initial placement of mobs
	var moveXDist 		= 5;
	var xNumSteps 		= 16;
	var moveYDist 		= 15;

	var numRows 		= numRows;
	// 32 for height 400px
	var rowHeight		= (fieldHTML.clientHeight/25) * 2;

	// Needed for colWidth calculation. Each step is 5px right now.
	var numCols			= numCols;
	var rowWidth		= fieldHTML.clientWidth - (xNumSteps * moveXDist);
	var colWidth 		= rowWidth / numCols;

		// How to handle movement and speed?
		// rows.speedX 		= 0;
		// rows.speedY 		= 0;
		// rows.maxSpeedX 		= ( 100 - rowWidth ) / 16;
		// rows.maxSpeedY 		= 3.2;
		// rows.movePause 		= 0;

		// rows.shootPause  	= 0;

		// // Include this? Can I even create css classes in js?
		// var buildMobCSS = function () {
		// /*

		// If possible, build the css for the mobs?
		// */


		// };  // End buildMobCSS()


	var buildMobs = function ( rowHeight, colWidth, bounderHTML ) {
	/*

	Build the list of all mobs
	*/
		var mobs = [];

		// Mob = function ( idNum, type, rowHeight, rowNum, colWidth, colNum, fieldHTML )
		// Mobs will append themselves to the bounderHTML
		for ( var rowNum = 0; rowNum < rowMap.length; rowNum++ ) {

			for ( var colNum = 0; colNum < numCols; colNum++ ) {
				// cell# = base + col + (row * numCols)
				var idNum = colNum + (rowNum * numCols); // this isn't working for some reason

				// Each Mob adds itself to the DOM on its creation
				var mob = new Mob( idNum, rowMap[rowNum],
					rowHeight, rowNum,
					colWidth, colNum,
					rows.bounderHTML );

				mobs.push( mob );
			}
		}

		return mobs;
	};  // End buildMobs


	// =================
	// RUNTIME FUNCITONS
	// =================
		// var moveX = function () {
		// /*

		// Staggered horizontal movement for mobs, by row
		// */


		// };  // End moveX()


		// var moveY = function () {
		// /*

		// Staggered vertical movement for mobs, by row
		// */


		// };  // End moveY()


		// var needToChangeDirection = function () {
		// /*

		// Check if direction of movement needs to be changed
		// */


		// };  // End needToChangeDirection()


		// var changeDirection = function () {
		// /*

		// Move down and set speed to the opposite
		// horizontal direction
		// */


		// };  // End changeDirection()


		// var getRandomLowest = function () {
		// /*

		// Gets a random mob that is the lowest in its row
		// */

		// 	// Get random mob and its column (that way we know we
		// 	//	get a column with a mob in it)
		// 	// Get the lowest mob in that row


		// };  // End getRandomLowest()


		// var triggerAttack = function () {


		// };  // End triggerAttack()


		// var killDeadMobs = function () {
		// /*

		// Iterate through mobs, killing any that need killing
		// */

		// 	// Increase approprate hits and death counts


		// };  // End killDeadMobs()


		// rows.update = function () {
		// /*

		// */

		// 	// Kill all mobs that have been marked as dead
		// 	// After an appropriate pause, trigger horizontal movement
		// 	// After an appropriate pause, trigger vertical movement

		// };

	// =================
	// INITIALIZATION
	// =================
	rows.mobs = buildMobs( rowHeight, colWidth, fieldHTML );

	// ===========
	// END
	// ===========
	return rows;
	
};  // End Rows{}
