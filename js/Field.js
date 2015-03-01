/* Created 03/01/15 */

'use strict'

var Field = function ( id, boardHTML ) {
/*

Field object, handling its rows, bullets, and player(s)
*/
	var field = this;

	// =================
	// SETUP
	// =================

	field.html 			= null;
	field.boardHTML 	= boardHTML;

	field.rows 			= new Rows( 1, self.html, 5, 11 );
	field.player 		= new Player( 1, self.html );
	// Bullets will have a shooter type to guide collision responses
	filed.bullets 		= [];

	// ??: Should this be in the board for easier stats stuff?
	// Or in rows to get closer to mobs?
	field.mobTypes 		= {

	};




	// =================
	// RUNTIME FUNCITONS
	// =================
	field.updateCollisions = function ( objArrays ) {
	/*

	Update all collisions, make a list of them, then,
	at the end, send the signal for the or their parents
	to clean house.

	?? Should this be in the board so that the stats can
	be updated more easily?
	*/

		// Collide each array to each other array, without repeats -
		// like calculating factorials

			// Collide each object to each other object without repeats

		// Call the functions each object identified as their reaction
		// Update their stats?
		// Get rows to remove their dead mobs from their lists
		// Remove bullets from lists
		// Remove player?

	};  // End Field.updateCollisions()


	field.update = function () {
	/*

	*/

		// Trigger each row's movement at the right time, staggered


	};  // End Field.update()


	// =================
	// INITIALIZATION
	// =================
	field.html = buildHTML();
	// Append html before constructing rows

	// ===========
	// END
	// ===========
	return field;
	
};  // End Field{}
