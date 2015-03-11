/* Created 03/01/15 

Resources:
- Arranging Mob's in rows
	Wrong way: http://jsfiddle.net/3sox1v3h/
	Right way: http://jsfiddle.net/3sox1v3h/1/
	Illustration for emphasis: http://i.imgur.com/j00VTJh.png
*/

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
	var speed 			= { x: 0, y: 0 };
	var maxSpeed 		= { x: 5, y: 15 };
	var xNumSteps 		= 16;

	var numRows 		= numRows;
	// 32 for height 400px
	var rowHeight		= (fieldHTML.clientHeight/25) * 2;

	// Needed for colWidth calculation. Each step is 5px right now.
	var numCols			= numCols;
	var rowWidth		= fieldHTML.clientWidth - (xNumSteps * maxSpeed.x);
	// Not possible to correctly calculate the cell width without the mob
	// width since you need to subtract the last mob width from the
	// calculation. See Resources at the top for examples
	var mobWidth 		= 20;
	var colWidth 		= (rowWidth - mobWidth) / (numCols - 1);

	var cellDimensions 	= { width: colWidth, height: rowHeight };

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

		// TODO: Change to ( idNum, type, cellDimensions, cellPos, mobWidth, fieldHTML )
		// Mobs will append themselves to the bounderHTML
		for ( var rowNum = 0; rowNum < rowMap.length; rowNum++ ) {

			for ( var colNum = 0; colNum < numCols; colNum++ ) {
				// cell# = base + col + (row * numCols)
				var idNum = colNum + (rowNum * numCols); // this isn't working for some reason

				// Each Mob adds itself to the DOM on its creation
				var mob = new Mob( idNum, rowMap[rowNum],
					cellDimensions, { x: colNum, y: rowNum },
					mobWidth, rows.bounderHTML );

				mobs.push( mob );
			}
		}

		return mobs;
	};  // End buildMobs


	// =================
	// RUNTIME FUNCITONS
	// =================
	rows.setXSpeed = function ( horDirection ) {
	/* ( str ) -> num

	Sets the horizontal speed based on the direction given.
	Returns the speed.
	"direction" should only be "right", "left", or "none"
	*/
		var self = this;

		// If moving in none of the tested directions,
		// speed will be 0
		var newXSpeed = 0;

		// Figure out the horizontal spped
		if ( horDirection === "right" ) {
			newXSpeed = maxSpeed.x;
		} else if ( horDirection === "left" )  {
			newXSpeed = -1 * maxSpeed.x
		}

		// This is this object's variable, though not a property
		// Set the horizontal speed of all the mobs
		speed.x = newXSpeed;

		return speed.x;
	};  // End Rows.setXSpeed()


	rows.setYSpeed = function ( vertDirection ) {
	/* ( str ) -> num

	Sets the horizontal speed based on the direction given.
	Returns the speed.
	"direction" should only be "down", "up", or "none"
	*/
		var self = this;

		// If moving in none of the tested directions,
		// speed will be 0
		var newYSpeed = 0;

		// Figure out the vertical speed
		if ( vertDirection === "down" ) {
			newYSpeed = maxSpeed.y;
		} else if ( vertDirection === "up" )  {
			newYSpeed = -1 * maxSpeed.y
		}

		// This is this object's variable, though not a property
		// Set the horizontal speed of all the mobs
		speed.y = newYSpeed;

		return speed.y;
	};  // End Rows.setYSpeed()


	rows.moveOneRowX = function ( rowNum ) {
	/* ( int ) -> Rows

	Move one row horizontally. This is so the movement of the
	rows can be staggered like the olde tyme legit game.

	Returns Rows.
	*/
		var self 	= this;
		var mobs_ 	= self.mobs

		for ( var mobi = 0; mobi < mobs_.length; mobi++ ) {

			var mob_ = mobs_[ mobi ];
			// If the mob is in the right row, move it
			if ( mob_.rowNum === rowNum ) {

				mob_.moveX( speed.x );

			}
		}  // end for ( mob )

		return self;

	};  // End moveOneRowX()


	rows.moveRowsX = function ( rowNum ) {
	/* ( int ) -> 

	Staggered horizontal movement for mobs, by row.
	Or not staggered. Whatever you want really.

	rowNum should start at 0
	*/


	};  // End moveRowsX()


	rows.moveOneRowY = function ( rowNum ) {
	/* ( int ) -> Rows

	Move one row horizontally. This is so the movement of the
	rows can be staggered like the olde tyme legit game.

	Returns Rows.
	*/
		var self 	= this;
		var mobs_ 	= self.mobs

		for ( var mobi = 0; mobi < mobs_.length; mobi++ ) {

			var mob_ = mobs_[ mobi ];
			// If the mob is in the right row, move it
			if ( mob_.rowNum === rowNum ) {

				mob_.moveY( speed.y );

			}
		}  // end for ( mob )

		return self;

	};  // End moveOneRowY()


	rows.moveRowsY = function ( rowNum ) {
	/* ( int ) -> 

	Staggered vertical movement for mobs, by row.
	Or whatever.

	rowNum should start at 0
	*/


	};  // End moveRowsY()


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
	rows.setXSpeed( "right" );
	rows.setYSpeed( "down" );


	// ===========
	// END
	// ===========
	return rows;
	
};  // End Rows{}
