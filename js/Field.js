/* Created 03/01/15 */

'use strict'

var Field = function ( idNum, boardHTML ) {
/*

Field object, handling its rows, bullets, and player(s)
*/
	var field = this;

	// =================
	// SETUP
	// =================

	field.html 			= null;
	field.boardHTML 	= boardHTML;
	field.id	 		= "Field_" + idNum;

	field.rowMap 		= ["1", "2", "2", "3", "3"];
	field.rows 			= null;
	field.player 		= null;
	// Bullets will have a shooter type to guide collision responses
	field.bullets 		= [];

		// // ??: Should this be in the board for easier stats stuff?
		// // Or in rows to get closer to mobs?
		// field.mobTypes 		= {

		// };


	var buildHTML = function () {
	/*

	Does not append the object
	*/
		var html 		= document.createElement( "div" );
		html.className 	= "field";
		html.id 		= field.id;

		return html;
	};  // End buildHTML()


	// =================
	// RUNTIME FUNCITONS
	// =================
		// field.updateCollisions = function ( objArrays ) {
		// /*

		// Update all collisions, make a list of them, then,
		// at the end, send the signal for the or their parents
		// to clean house.

		// ?? Should this be in the board so that the stats can
		// be updated more easily?
		// */

		// 	// Collide each array to each other array, without repeats -
		// 	// like calculating factorials

		// 		// Collide each object to each other object without repeats

		// 	// Call the functions each object identified as their reaction
		// 	// Update their stats?
		// 	// Get rows to remove their dead mobs from their lists
		// 	// Remove bullets from lists
		// 	// Remove player?

		// };  // End Field.updateCollisions()


		// field.update = function () {
		// /*

		// Update all the objects on this field, handle collisions, death, etc,
		// return stats and state that the board needs to be aware of.
		// */
		// 	var self = this;

		// 	player_ = self.player;
		// 	rows_ 	= self.rows;

		// 	// player movement
		// 	// bullet movement
		// 	// Trigger each row's movement at the right time, staggered

		// 	// Update collisions


		// 	// Return all the stats stuff and game over indicator
		// 	var gameState = {
		// 		endCondition 	: "none",
		// 		lives			: player_.lives,
		// 		shots			: player_.shots,
		// 		// hits 			: rows_.hits,
		// 		deaths 			: { 1: 0, 	2: 0, 	3: 0, 	x: 0 }
		// 	}


		// };  // End Field.update()


	// =================
	// INITIALIZATION
	// =================
	field.html 		= buildHTML();
	// Always append before creating further elements so the
	// width and height properties can be used for calculations
	field.boardHTML.appendChild( field.html );

	// Rows = function ( idNum, fieldHTML, numRows, numCols )
	field.rows 		= new Rows( 1, field.html, 5, 11 );
	// Create player
	field.player 	= new Player( 1, field.html );


	// ===========
	// END
	// ===========
	return field;
	
};  // End Field{}
